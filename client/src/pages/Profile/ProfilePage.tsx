import React, { useCallback, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "../../component/Wrapper";
import { Field, Form } from "react-final-form";
import { Loader } from "../../component/Loader";
import { TextField } from "../../component/TextField";
import { Button } from "../../component/Button";
import {
  dispatchOnChange,
  fetchProfile,
  saveProfile,
} from "../../store/thunks/widgets/profile";
import { connect, ReactReduxContext } from "react-redux";
import classNames from "classnames";
import "./ProfilePage.scss";
import { State } from "../../store/reducers";
import {
  getIsLoading,
  getUser,
} from "../../store/selectors/widgets/profilePage";
import { UserProfile } from "../../../app/resolvers/profile";
import { Pair } from "../../store/actions/profile";

export type Props = {
  user: UserProfile;
  isLoading: boolean;
  fetchProfileThunk: () => void;
  saveProfileThunk: (user: UserProfile) => void;
  dispatchOnChangeThunk: (pair: Pair) => void;
};

export const ProfilePageBlock = ({
  user,
  isLoading,
  fetchProfileThunk,
  saveProfileThunk,
  dispatchOnChangeThunk,
}: Props): JSX.Element => {
  const { t } = useTranslation();
  useEffect(() => {
    fetchProfileThunk();
  }, []);
  const { store } = useContext(ReactReduxContext);
  const onSubmit = useCallback(() => {
    const user = getUser(store.getState() as State);
    saveProfileThunk(user);
  }, []);

  const onChange = (key: string, value: string) =>
    dispatchOnChangeThunk({
      first: key,
      second: value,
    } as Pair);

  return (
    <Wrapper className="profile-page" size="m">
      <h1 className="profile-page__title">{t("nameProfile")}</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            className={classNames("profile-page__form", {
              ["profile-page__form_error"]: "error-message!",
            })}
            onSubmit={handleSubmit}
          >
            {isLoading && <Loader />}

            <Field name="first_name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="first_name"
                  label="First name"
                  placeholder=""
                  value={(user && user.first_name) || ""}
                  onChange={(e) =>
                    onChange(input.name, (e.target as HTMLInputElement).value)
                  }
                />
              )}
            </Field>

            <Field name="second_name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="second_name"
                  label="Second name"
                  placeholder=""
                  value={(user && user.second_name) || ""}
                  onChange={(e) =>
                    onChange(input.name, (e.target as HTMLInputElement).value)
                  }
                />
              )}
            </Field>

            <Field name="phone">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="phone"
                  label="Phone"
                  placeholder=""
                  value={(user && user.phone) || ""}
                  onChange={(e) =>
                    onChange(input.name, (e.target as HTMLInputElement).value)
                  }
                />
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  error={meta.error && meta.touched ? meta.error : ""}
                  name="email"
                  label="Email"
                  placeholder=""
                  value={(user && user.email) || ""}
                  onChange={(e) =>
                    onChange(input.name, (e.target as HTMLInputElement).value)
                  }
                />
              )}
            </Field>

            <div className=""></div>
            <Button type="submit" disabled={isLoading}>
              {t("save")}
            </Button>
            <Button disabled={true}>{t("logout")}</Button>
          </form>
        )}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state: State) => ({
  user: getUser(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  fetchProfileThunk: fetchProfile,
  saveProfileThunk: saveProfile,
  dispatchOnChangeThunk: dispatchOnChange,
};

export const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePageBlock);
