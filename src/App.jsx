import "./app.scss";
import BgLanding from "./bgLanding/BgLanding.tsx";
import NavBarView from "./navBar/NavBarView.tsx";
import Landing from "./sections/Landing.tsx";

function App() {
  return (
    <div className="w-full flex flex-col items-center sm:px-10 px-2">
      <NavBarView />
      <BgLanding />
      <div className="mt-[180px] z-1">
        <Landing />
      </div>
    </div>
  );
}

export default App;
