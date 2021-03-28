// Снипет для типов компонента

// личные пропсы компонента
// interface OwnProps {}

// состояние-пропсы компонента
// interface StateProps {}

// пути роута в компоненте
// interface RouteProps {}

// дополнительные пропсы от HOC
// interface HOCProps {}

// стандартные пропсы от реакта
// события / атрибуты

// итоговые просы
// export type Props = OwnProps & StateProps & HOCProps & RouteComponentProps<RouteProps>;

// состояние компонента
// export interface State {}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.scss";
