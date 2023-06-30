import styles from './DataTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

function DataTable() {
  const [usersData, setUsersData] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'users',
      headerName: 'Users',
      width: 250,
      renderCell: (params) => {
        return (
          <div className={styles.cellImg}>
            <img src={params.row.img} alt={params.row.name} />
            <span>{params.row.name}</span>
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'age', headerName: 'Age', width: 100 },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => {
        return <div className={styles.cellStatus}>{params.row.status}</div>;
      },
    },
  ];

  const rows = usersData;

  useEffect(() => {
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users')
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  }, []);

  console.log(usersData);

  return (
    <div className={styles.dataTable} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className={styles.dataGrid}
      />
    </div>
  );
}

export default DataTable;
