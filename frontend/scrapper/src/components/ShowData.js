import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const MUIDataGridComponent = () => {
  // State to store data fetched from the API
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "timestamp", headerName: "Timestamp", width: 200 },
  ]);

  const styles = {
    container: {
        padding: '20px 100px',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        height: '100vh',          // Adjust height as needed
    },
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("http://0.0.0.0:8001/gas-prices")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setRows(
          data.map((row) => {
            return { id: row.id, price: row.price, timestamp: row.timestamp };
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div style={styles.container}>
      {
        rows.length > 0 && 
        <DataGrid 
            rows={rows} columns={columns} pageSize={5}
            rowsPerPageOptions={[5]}
        />
      }
    </div>
  );
};

export default MUIDataGridComponent;
