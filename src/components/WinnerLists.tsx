import React from 'react';
import { Table } from 'react-bootstrap';
import { Person } from '../Models/winnersLits';



interface TwoTablesProps {
  table1Data: Person[];
  table2Data: Person[];
}


const TwoTablesComponent: React.FC<TwoTablesProps> = ({ table1Data, table2Data }) => {
  return (
    <div className='winnersComponent'>   
      <div className='recentWinnders col-xs-12 col-sm-6' >
      <h2>Listed of Recently winners</h2>
      <Table striped bordered hover>
        {/* Render the headers */}
        
        {/* Render the rows with data from table1Data */}
        <tbody>
          {table1Data.map((person, index) => (
            <tr key={index}>
              <td>{person.fristName}</td>
              <td>{person.lastName}</td>
              <td>{person.gift}</td>
              <td>{person.recivedDate.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <div className='toptWinnders col-xs-12 col-sm-6'>
      <h2>Listed of Top winners</h2>
      <Table striped bordered hover>
        {/* Render the headers for Table 2 */}
        
        {/* Render the rows with data from table2Data */}
        <tbody>
          {table2Data.map((person, index) => (
            <tr key={index}>
              <td>{person.fristName}</td>
              <td>{person.lastName}</td>
              <td>{person.gift}</td>
              <td>{person.recivedDate.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default TwoTablesComponent;
