import React from 'react';
import { TableData, TableHead } from '../../molecules';


const Table = ({ data }) => {
  const headData = data.map((el) => {
    return el.header;
  });
  
  const rowData = data.map((node) => {
    const oneRow = node.data.map((props) => {
      return node.render(props);
    });
    return oneRow;
  });

  const displayData = (array) => {
    const rows = [];
      for(let i = 0; i < array[0].length; i += 1) {
        let row = [];
        array.forEach(element => {
          row.push(
            <TableData node={element[i]}/>
          );
        });
        rows.push(
          <tr>
            {row}
          </tr>
        )
      }
    return rows;
  }

  return (
    <table>
      <TableHead columns={headData} />
      <tbody>
        {displayData(rowData)}
      </tbody>
    </table>
  );
};

export default Table;
