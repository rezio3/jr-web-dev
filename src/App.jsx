import "./app.scss";
import Background from "./components/background/Background.tsx";
import NavBarView from "./components/navBar/NavBarView.tsx";
import LandingView from "./views/LandingView.tsx";

function App() {
  return (
    <div className="app-wrapper relative w-full flex flex-col items-center sm:px-10 px-2">
      <NavBarView />
      <Background />
      <div className="mt-[180px] z-1">
        <LandingView />
      </div>
    </div>
  );
}

export default App;
