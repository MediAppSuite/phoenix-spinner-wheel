import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import SpinWheel from './components/SpinWheel';
import TwoTablesComponent from './components/WinnerLists';
import {table1DataDemo,table2DataDemo} from  './Models/winnersLits'




function App() {

  return (
    <div className="App">
      <NavBar />
      <SpinWheel />
      <TwoTablesComponent table1Data={table2DataDemo} table2Data={table1DataDemo} />
    </div>
  );
}

export default App;
