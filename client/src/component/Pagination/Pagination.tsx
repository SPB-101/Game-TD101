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

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    let pages = range(startPage, endPage);

    const hasLeftHiddenPages = startPage > 1;
    const hasRightHiddenPages = totalPages - endPage > 0;
    const countOfHiddenPages = PAGE_LIMIT - pages.length;
    console.log(`hasLeftHiddenPages = ${hasLeftHiddenPages}`);

    if (hasLeftHiddenPages && !hasRightHiddenPages) {
      const extraPages = range(startPage - countOfHiddenPages, startPage - 1);
      console.log(
        `pages = ${pages}, extra = ${extraPages}, startPage = ${startPage}`
      );

      pages = [LEFT_PAGE, ...extraPages, ...pages];
    } else if (!hasLeftHiddenPages && hasRightHiddenPages) {
      const extraPages = range(endPage + 1, endPage + countOfHiddenPages);
      console.log(`pages = ${pages}, extra = ${extraPages}`);
      pages = [...pages, ...extraPages, RIGHT_PAGE];
    } else if (hasLeftHiddenPages && hasRightHiddenPages) {
      pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
    }
    return pages;
  };

  const pages = getRange();
  console.log(`currentPage = ${currentPage}, pages = ${pages}`);

  return (
    <>
      <ul className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={page} className="pagination__item">
                <a
                  href="#"
                  className="arrow arrow--prev"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentPage(Math.max(1, currentPage - 1));
                  }}
                ></a>
              </li>
            );
          if (page === RIGHT_PAGE)
            return (
              <li key={page} className="pagination__item">
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
            <li key={page} className="pagination__item">
              <a
                href="#"
                className={`pagination__link${
                  page === currentPage ? " active" : ""
                }`}
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
    </>
  );
};
