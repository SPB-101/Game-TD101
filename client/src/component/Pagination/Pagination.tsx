import React, { MouseEvent, useCallback, useState } from "react";
import classNames from "classnames";

import "./Pagination.scss";

import { Props } from "./types";

const MAX_COUNT = 5;

const range = (from: number, to: number, step = 1): (number | string)[] => {
  const range = [];
  let i = from;

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const Pagination = ({
  className,
  totalRecords = 0,
  pageLimit = 5,
}: Props): JSX.Element | null => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  if (totalRecords === 0 || totalPages === 1) return null;

  const [currentPage, setCurrentPage] = useState(1);

  const getRange = () => {
    if (totalPages < pageLimit) return range(1, totalPages);

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    let pages = range(startPage, endPage);

    const hasLeftHiddenPages = startPage > 1;
    const hasRightHiddenPages = totalPages - endPage > 0;
    const countOfHiddenPages = MAX_COUNT - pages.length;

    if (hasLeftHiddenPages && !hasRightHiddenPages) {
      const extraPages = range(startPage - countOfHiddenPages, startPage - 1);
      pages = [...extraPages, ...pages];
    } else if (!hasLeftHiddenPages && hasRightHiddenPages) {
      const extraPages = range(endPage + 1, endPage + countOfHiddenPages);
      pages = [...pages, ...extraPages];
    }
    return pages;
  };

  const listClasses = classNames({
    ["pagination"]: true,
    [`${className}`]: !!className && className,
  });

  const handleMoveLeft = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      const current = Math.max(1, currentPage - 1);
      if (current !== currentPage) setCurrentPage(current);
    },
    [currentPage]
  );

  const handleMoveRight = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      const current = Math.min(currentPage + 1, totalPages);
      if (current !== currentPage) setCurrentPage(current);
    },
    [currentPage]
  );

  const handleClick = useCallback(
    (page: number | string) => {
      return (event: MouseEvent) => {
        event.preventDefault();
        if (page !== currentPage) setCurrentPage(+page);
      };
    },
    [1]
  );

  return (
    <ul className={listClasses}>
      <li className="pagination__item">
        <a className="arrow arrow--prev" onClick={handleMoveLeft} />
      </li>
      {getRange().map((page) => {
        const linkClass = classNames({
          ["pagination__link"]: true,
          ["active"]: page === currentPage,
        });
        return (
          <li key={page} className="pagination__item">
            <a className={linkClass} onClick={handleClick(page)}>
              {page}
            </a>
          </li>
        );
      })}
      <li className="pagination__item">
        <a className="arrow arrow--next" onClick={handleMoveRight} />
      </li>
    </ul>
  );
};
