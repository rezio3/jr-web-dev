import "./App.scss";
import BgLanding from "./bgLanding/BgLanding.jsx";
import MenuBarView from "./menuBar/MenuBarView.tsx";

function App() {
  return (
    <>
      <div className="landing-container">
        <MenuBarView />
        <BgLanding />
      </div>
    </>
  );
}

export default App;
