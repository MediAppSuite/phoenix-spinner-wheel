import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./common/NavBar";
import SpinWheel from "./components/SpinWheel";
import Description from "./components/Description";
import ListComponent from "./components/ListComponent";
import { recentWinners, topWinners } from "./data/data";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SpinWheel />
      <Description />
      <ListComponent title={"RECENT WINNERS"} data={recentWinners} />
      <ListComponent title={"TOP WINNERS"} data={topWinners} />
      <Footer />
    </div>
  );
}

export default App;
