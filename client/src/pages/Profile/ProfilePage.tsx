import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AvatarForm } from "./AvatarForm";
import { PasswordForm } from "./PasswordForm";
import { ProfileForm } from "./ProfileForm";

import { Wrapper } from "../../component/Wrapper";

import "./ProfilePage.scss";

export const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/menu" className="button button_back profile-page_button-back">
        {t("backToMenu")}
      </Link>
      <Wrapper className="profile-page" size="xl">
        <h1 className="profile-page__title">{t("profile")}</h1>
        <div className="wrapper-forms">
          <div className="wrapper-forms_left">
            <ProfileForm />
          </div>
          <div className="wrapper-forms_center">
            <PasswordForm />
          </div>
          <div className="wrapper-forms_right">
            <AvatarForm />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
