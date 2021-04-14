import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLogin } from "../../store/selectors/widgets/currentView";

import { resolveUserInfo } from "../../../app/resolvers/auth";

import { fetchFulfilled } from "../../store/actions/userInfo";

export const useAuth = () => {
  const isLogin = useSelector(getIsLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin === null) {
      resolveUserInfo()
        .then((user) => {
          dispatch(fetchFulfilled(user));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  return {
    isLogin: useSelector(getIsLogin),
  };
};
