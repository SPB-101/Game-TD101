import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLogin } from "../../store/selectors/widgets/currentView";

import { resolveUserInfo } from "../../../app/resolvers/auth";
import {
  fetchUserFailed,
  fetchUserFulfilled,
} from "../../store/actions/userInfo";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);

  useEffect(() => {
    if (isLogin === null) {
      resolveUserInfo()
        .then((user) => {
          dispatch(fetchUserFulfilled(user));
        })
        .catch((error) => {
          dispatch(fetchUserFailed(error));
        });
    }
  });

  return {
    isLogin,
  };
};
