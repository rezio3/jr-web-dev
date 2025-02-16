import "./App.scss";
import BgLanding from "./bgLanding/BgLanding.tsx";
import MenuBarView from "./menuBar/MenuBarView.tsx";

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center sm:px-10 px-2">
        <MenuBarView />
        <BgLanding />
      </div>
    </>
  );
}

export default App;
