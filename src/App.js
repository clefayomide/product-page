import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidenav from "./components/sidenav-mobile/Sidenav";
import AppState from "./context/AppState";

function App() {
  return (
    <AppState>
      <div
        className="App"
        style={{
          position: "relative",
          backgroundColor: "hsl(223, 64%, 98%)",
          fontFamily: "Kumbh Sans, sans-serif",
        }}
      >
        <Header />
        <Sidenav />
        <Main />
      </div>
    </AppState>
  );
}

export default App;
