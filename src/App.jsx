import "./app.scss";
import Background from "./components/background/Background.tsx";
import NavBarView from "./components/navBar/NavBarView.tsx";
import LandingView from "./views/LandingView.tsx";
import { theme } from "./styles/themeMUI.ts";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-wrapper relative w-full flex flex-col items-center sm:px-10 px-2">
        <NavBarView />
        <Background />
        <div className="z-1 w-full">
          <LandingView />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
