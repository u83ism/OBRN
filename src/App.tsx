/**
 * MUI用
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeOptions, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { LinkProps } from '@mui/material/Link';
import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps, RouterProvider, createBrowserRouter } from 'react-router';
import Dashboard from "./component/dash-board/Dashboard";
import { ErrorPage } from './component/error-page';
import { EventPage } from './component/event-page';
import { InformationPage } from './component/information-page';
import { NovelsDisplay } from './component/novels-display';
import { TalkPage } from './component/talk/TalkPage';
import { RandomBackground } from './component/dash-board/random-background';
import { JSX } from 'react/jsx-runtime';


// react-routerとMUIの双方にLINKコンポーネントがあるので連携させる
// @link https://mui.com/material-ui/guides/routing/#global-theme-link
const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});
// MuiLinkとMuiButtonBaseを含む他のコンポーネント（ListItemButton）等も影響し、
// 単に普通のMUIのLINKコンポーネントのように`<Link href="/">`のように書くだけで、react-routerの遷移が使える。
const themeOptions: ThemeOptions = {
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
};
// MUIでレスポンシブに文字のサイズを調整させる
const customTheme = responsiveFontSizes(createTheme(themeOptions))

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <NovelsDisplay />
        },
        {
          path: "/information",
          element: <InformationPage />
        },
        {
          path: "/event",
          element: <EventPage />
        },
        {
          path: "/talk/:id",
          element: <TalkPage />
        },
      ]
    },
  ]
)

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
