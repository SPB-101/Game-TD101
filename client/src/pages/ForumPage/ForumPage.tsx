import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../component/Pagination";
import { Button } from "../../component/Button";
import { Wrapper } from "../../component/Wrapper";

import "./ForumPage.scss";

import mock from "./mockData.json";
import { useTranslation } from "react-i18next";

export const ForumPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/menu" className="button button_back forum__button">
        {t("backToMenu")}
      </Link>
      <Wrapper className="forum" size={"l"}>
        <h1 className="forum__title">{t("forum")}</h1>
        <table className="forum__table">
          <thead className="table__head">
            <tr>
              <th className="table__head_theme table__cell">{t("theme")}</th>
              <th className="table__head_updated table__cell">
                {t("lastUpdate")}
              </th>
              <th className="table__head_comments table__cell">
                {t("comments")}
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            {mock.map((elem) => {
              return (
                <tr className={"table__row"} key={elem.id}>
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
        <Button className={"forum__button"}>{t("createNewTheme")}</Button>
      </Wrapper>
    </>
  );
};
