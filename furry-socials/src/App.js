import pfp from "./img/profile-picture.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pfp} className="App-logo" alt="profile_picture" />
        <h1>MrMatt</h1>
        <h2>
          the <b>oversized house cat</b>
        </h2>
        <sub>#MrMatt04</sub>
      </header>
    </div>
  );
}

export default App;
