import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import MainContentContainer from "./containers/MainContentContainer";
import PropertiesContainer from "./containers/Properties/PropertiesContainer";

function App() {
  return (
    <>
      <div className="main-page">
        <div className="" id="landing-page">
          <HeaderContainer />
          <MainContentContainer />
        </div>

        <PropertiesContainer />
      </div>
    </>
  );
}

export default App;
