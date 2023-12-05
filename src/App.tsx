import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import SpinWheel from './components/SpinWheel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SpinWheel />
    </div>
  );
}

export default App;
