import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

const MyTable = () => {
  const [gasPrices, setGasPrices] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Gas Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://0.0.0.0:8001/gas-prices/");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGasPrices(data);
      } catch (error) {
        console.error('Error fetching gas prices:', error);
      }
    };

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Table dataSource={gasPrices} columns={columns} />
  );
};

export default MyTable;
