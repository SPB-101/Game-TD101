import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { Loader } from "../../../component/Loader";
import { Toggle } from "../../../component/Toggle";
import { AvatarField } from "../../../component/AvatarField";

import { getUserInfo } from "../../../store/selectors/collections/currentView";
import { getFormAvatar } from "../../../store/selectors/widgets/profilePage";

import { fetchProfileAvatar } from "../../../store/thunks/widgets/profile";

import type { State } from "../../../store/reducers";
import type { Props } from "./types";

import "./AvatarForm.scss";

export const AvatarFormBlock = ({
  userInfo,
  formAvatar,
  fetchAvatarThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  const onSubmitAvatar = useCallback((file: File) => {
    const avaData = new FormData();
    avaData.append("avatar", file);
    return fetchAvatarThunk(avaData);
  }, []);

  return (
    <>
      <form
        className={classNames("form", {
          ["form--error"]: formAvatar.errorMessage,
        })}
      >
        <h3>{t("avatar")}</h3>
        {formAvatar.isLoading && <Loader />}
        {formAvatar.errorMessage && (
          <div className="form__error-text">
            <span>{formAvatar.errorMessage}</span>
          </div>
        )}

        <AvatarField
          initValue={userInfo.avatar}
          name="avatar"
          disabled={formAvatar.isLoading}
          label={t("uploadAvatar")}
          onSelectFile={onSubmitAvatar}
        />
      </form>

      <h3 className="theme">{t("theme")}</h3>
      <Toggle small />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  userInfo: getUserInfo(state),
  formAvatar: getFormAvatar(state),
});

const mapDispatchToProps = {
  fetchAvatarThunk: fetchProfileAvatar,
};

export const AvatarForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarFormBlock);
