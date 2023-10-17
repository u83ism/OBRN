/**
 * MUI
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from "./component/dash-board/Dashboard";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

// MUIのカスタム
// MUIのカスタム
const customTheme = responsiveFontSizes(createTheme())
export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={customTheme}>
      <Dashboard />
    </ThemeProvider>
  )
}