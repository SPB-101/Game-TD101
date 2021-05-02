import React, { MouseEvent, useCallback, useState } from "react";
import classNames from "classnames";

import { Props } from "./types";

import "./Pagination.scss";

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
  recordLimit = 5,
  onCurrentPage,
}: Props) => {
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
    const countOfHiddenPages = recordLimit - pages.length;

    if (hasLeftHiddenPages && !hasRightHiddenPages) {
      const extraPages = range(startPage - countOfHiddenPages, startPage - 1);
      pages = [...extraPages, ...pages];
    } else if (!hasLeftHiddenPages && hasRightHiddenPages) {
      const extraPages = range(endPage + 1, endPage + countOfHiddenPages);
      pages = [...pages, ...extraPages];
    }
    return pages;
  };

  const listClasses = classNames("pagination", { className });

  const newCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (onCurrentPage) {
      onCurrentPage(pageNumber);
    }
  };

  const handleMoveLeft = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      const current = Math.max(1, currentPage - 1);
      if (current !== currentPage) newCurrentPage(current);
    },
    [currentPage]
  );

  const handleMoveRight = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      const current = Math.min(currentPage + 1, totalPages);
      if (current !== currentPage) newCurrentPage(current);
    },
    [currentPage]
  );

  const handleClick = useCallback(
    (page: number | string) => {
      return (event: MouseEvent) => {
        event.preventDefault();
        if (page !== currentPage) newCurrentPage(+page);
      };
    },
    [currentPage]
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
            <div className={linkClass} onClick={handleClick(page)}>
              {page}
            </div>
          </li>
        );
      })}
      <li className="pagination__item">
        <a className="arrow arrow--next" onClick={handleMoveRight} />
      </li>
    </ul>
  );
};
