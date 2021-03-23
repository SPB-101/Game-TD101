import React, { useState } from "react";

import "./Pagination.scss";

import { Props } from "./types";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
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
    console.log(totalPages);
    console.log(currentPage);

    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages - 1, currentPage + PAGE_LIMIT);
    let pages = range(startPage, endPage);

    const hasLeftHiddenPages = startPage > 1;
    const hasRightHiddenPages = totalPages - endPage > 1;
    const countOfHiddenPages = totalPages - (pages.length + 1);

    if (hasLeftHiddenPages && !hasRightHiddenPages) {
      const extraPages = range(startPage - countOfHiddenPages, startPage - 1);
      pages = [LEFT_PAGE, ...extraPages, ...pages];
    } else if (!hasLeftHiddenPages && hasRightHiddenPages) {
      const extraPages = range(endPage + 1, endPage + countOfHiddenPages);
      pages = [...pages, ...extraPages, RIGHT_PAGE];
    } else {
      pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
    }
    return pages;
  };

  const pages = getRange();

  return (
    <div>
      <ul className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={page}>
                <a
                  href="#"
                  className="arrow arrow--prev"
                  onClick={(event) => {
                    event.preventDefault();
                    console.log(page, index);
                    setCurrentPage(currentPage - 1);
                  }}
                ></a>
              </li>
            );
          if (page === RIGHT_PAGE)
            return (
              <li key={page}>
                <a
                  href="#"
                  className="arrow arrow--next"
                  onClick={(event) => {
                    event.preventDefault();
                    console.log(page, index);
                    setCurrentPage(currentPage + 1);
                  }}
                ></a>
              </li>
            );
          return (
            <li key={page}>
              <a
                href="#"
                className="pagination__item"
                onClick={(event) => {
                  event.preventDefault();
                  console.log(page, index);
                  setCurrentPage(+page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
