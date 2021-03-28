import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../component/Pagination";
import { Button } from "../../component/Button";

import "./ForumPage.scss";

import mock from "./mockData.json";
import { useTranslation } from "react-i18next";

export const ForumPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/" className="button button_back">
        {t("backToMenu")}
      </Link>
      <main className="forum">
        <h1 className="forum__title">forum</h1>
        <table className="forum__table">
          <thead className="table__head">
            <tr>
              <th className="table__head_theme table__cell">Theme</th>
              <th className="table__head_updated table__cell">Last Update</th>
              <th className="table__head_comments table__cell">Comments</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {mock.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td className="table__cell table__cell_left">{elem.theme}</td>
                  <td className="table__cell">
                    {new Date(elem.updatedAt * 1000).toLocaleDateString("ru")}
                  </td>
                  <td className="table__cell">{elem.comments}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalRecords={mock.length}
          pageLimit={2}
          className="forum__pagination"
        />
        <Button>{t("create new theme")}</Button>
      </main>
    </>
  );
};
