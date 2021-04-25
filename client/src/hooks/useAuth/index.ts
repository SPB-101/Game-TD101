import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getIsLogin } from "@selectors/widgets/currentView";
import { resolveUserInfo } from "@resolvers/auth";
import { fetchUserFailed, fetchUserFulfilled } from "@actions/userInfo";

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
  }, []);

  return {
    isLogin,
  };
};
