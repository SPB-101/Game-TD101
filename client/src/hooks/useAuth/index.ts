import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLogin } from "../../store/selectors/widgets/currentView";

import { resolveUserInfo } from "../../../app/resolvers/auth";
import { fetchFulfilled, fetchFailed } from "../../store/actions/userInfo";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);

  useEffect(() => {
    if (isLogin === null) {
      resolveUserInfo()
        .then((user) => {
          dispatch(fetchFulfilled(user));
        })
        .catch((error) => {
          dispatch(fetchFailed(error));
        });
    }
  });

  return {
    isLogin,
  };
};
