import React, { MouseEvent, useState } from "react";

import "./Pagination.scss";

import { Props } from "./types";

const PAGE_LIMIT = 5;

const range = (from: number, to: number, step = 1): (number | string)[] => {
  const range = [];
  let i = from;

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const Pagination = ({ totalRecords = 0 }: Props): JSX.Element | null => {
  const totalPages = Math.ceil(totalRecords / PAGE_LIMIT);
  if (totalRecords === 0 || totalPages === 1) return null;

  const [currentPage, setCurrentPage] = useState(1);

  const getRange = () => {
    if (totalPages < PAGE_LIMIT) return range(1, totalPages);

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    let pages = range(startPage, endPage);

    const hasLeftHiddenPages = startPage > 1;
    const hasRightHiddenPages = totalPages - endPage > 0;
    const countOfHiddenPages = PAGE_LIMIT - pages.length;

    if (hasLeftHiddenPages && !hasRightHiddenPages) {
      const extraPages = range(startPage - countOfHiddenPages, startPage - 1);
      pages = [...extraPages, ...pages];
    } else if (!hasLeftHiddenPages && hasRightHiddenPages) {
      const extraPages = range(endPage + 1, endPage + countOfHiddenPages);
      pages = [...pages, ...extraPages];
    }
    return pages;
  };

  const handleMoveLeft = (event: MouseEvent) => {
    event.preventDefault();
    const current = Math.max(1, currentPage - 1);
    if (current !== currentPage) setCurrentPage(current);
  };

  const handleMoveRight = (event: MouseEvent) => {
    event.preventDefault();
    const current = Math.min(currentPage + 1, totalPages);
    if (current !== currentPage) setCurrentPage(current);
  };

  const handleClick = (page: number | string) => {
    return (event: MouseEvent) => {
      event.preventDefault();
      if (page !== currentPage) setCurrentPage(+page);
    };
  };

  return (
    <>
      <ul className="pagination">
        <li className="pagination__item">
          <a href="#" className="arrow arrow--prev" onClick={handleMoveLeft} />
        </li>
        {getRange().map((page) => {
          return (
            <li key={page} className="pagination__item">
              <a
                href="#"
                className={`pagination__link${
                  page === currentPage ? " active" : ""
                }`}
                onClick={handleClick(page)}
              >
                {page}
              </a>
            </li>
          );
        })}
        <li className="pagination__item">
          <a href="#" className="arrow arrow--next" onClick={handleMoveRight} />
        </li>
      </ul>
    </>
  );
};
