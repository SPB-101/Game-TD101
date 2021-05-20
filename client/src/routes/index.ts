import { match } from "react-router-dom";
import { Dispatch } from "redux";

import { ErrorPage } from "../pages/Error";
import { SandboxPage } from "../pages/Sandbox";
import { GamePage } from "../pages/Game";
import { RegistrationPage } from "../pages/Registration";
import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";
import { MenuPage } from "../pages/Menu";
import { LeaderBoardPage } from "../pages/LeaderBoard";
import { ForumPage } from "../pages/ForumPage";
import { CommentsPage } from "../pages/CommentsPage";
import { fetchUserInfo } from "@thunks/collections/userInfo";
import { LevelsPage } from "../pages/LevelsPage";

export type RouterFetchData = {
  dispatch: Dispatch<any>;
  match: match<{ slug: string }>;
};

export const routes = [
  {
    isPrivate: false,
    redirect: "/menu",
    path: "/",
    component: LoginPage,
    exact: true,
  },
  {
    isPrivate: false,
    redirect: "/menu",
    path: "/registration",
    component: RegistrationPage,
    exact: true,
  },
  {
    isPrivate: false,
    path: "/menu",
    component: MenuPage,
    exact: true,
  },
  {
    isPrivate: true,
    redirect: "/",
    path: "/levels",
    component: LevelsPage,
    exact: true,
  },
  {
    isPrivate: true,
    redirect: "/",
    path: "/level-:id",
    component: GamePage,
    exact: true,
  },
  {
    isPrivate: true,
    redirect: "/",
    path: "/profile",
    component: ProfilePage,
    exact: true,
    fetchData() {
      return fetchUserInfo();
    },
  },
  {
    isPrivate: true,
    redirect: "/",
    path: "/leaderboard",
    component: LeaderBoardPage,
    exact: true,
  },
  {
    isPrivate: true,
    redirect: "/",
    path: "/forum",
    component: ForumPage,
    exact: true,
  },
  {
    isPrivate: true,
    redirect: "/",
    path: "/comments/:id",
    component: CommentsPage,
    exact: true,
  },
  {
    isPrivate: false,
    path: "/sandbox",
    component: SandboxPage,
    exact: true,
  },
  {
    isPrivate: false,
    path: "*",
    component: ErrorPage,
    exact: true,
  },
];
