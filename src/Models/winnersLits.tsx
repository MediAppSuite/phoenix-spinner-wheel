export interface Person {
    fristName: string;
    lastName: string;
    gift : number;
    recivedDate: Date
  }


  export const table1DataDemo: Person[] = [
    { fristName: 'A1', lastName: 'B1', gift: 10, recivedDate: new Date() },
    { fristName: 'A2', lastName: 'B2', gift: 20, recivedDate: new Date() },
    // Add more rows as needed
  ];
  
 export const table2DataDemo: Person[] = [
    { fristName: 'X1', lastName: 'Y1', gift: 30, recivedDate: new Date() },
    { fristName: 'X2', lastName: 'Y2', gift: 40, recivedDate: new Date() },
    // Add more rows as needed
  ];