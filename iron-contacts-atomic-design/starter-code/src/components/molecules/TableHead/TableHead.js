import React from 'react';
import { Title } from '../../atoms';

const TableHead = ({ columns }) => {
  const data = columns.map((col) => {
    return (
      <th>
        <Title htmlType="H3">{col}</Title>
      </th>
    );
  });

  return (
    <thead>
      <tr>
        {data}
      </tr>
    </thead>
  );
};

export default TableHead;
