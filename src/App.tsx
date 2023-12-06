import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import SpinWheel from './components/SpinWheel';
import TwoTablesComponent from './components/WinnerLists';
import {table1DataDemo,table2DataDemo} from  './Models/winnersLits'




function App() {

  const table1Data  = [
    { column1: 'A1', column2: 'B1' },
    { column1: 'A2', column2: 'B2' },
    
  ];

  const table2Data = [
    { column1: 'X1', column2: 'Y1' },
    { column1: 'X2', column2: 'Y2' },
    
  ];

  return (
    <div className="App">
      <NavBar />
      <SpinWheel />
      <TwoTablesComponent table1Data={table2DataDemo} table2Data={table1DataDemo} />
    </div>
  );
}

export default App;
