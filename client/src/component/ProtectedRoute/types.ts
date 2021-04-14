/* eslint @typescript-eslint/no-explicit-any: "off" */

import type { ComponentType } from "react";
import type { RouteComponentProps } from "react-router-dom";

interface OwnProps {
  auth: boolean | null;
  path: string;
  component?: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  exact?: boolean;
}

export type Props = OwnProps;
