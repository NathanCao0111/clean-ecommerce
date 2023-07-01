import styles from './DataTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

function DataTable() {
  const [usersData, setUsersData] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'users',
      headerName: 'Users',
      width: 230,
      renderCell: (params) => {
        return (
          <div className={styles.cellImg}>
            <img src={params.row.img} alt={params.row.name} />
            <span>{params.row.name}</span>
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => {
        return (
          <div
            className={clsx(
              styles.cellStatus,
              params.row.status === 'active' ? styles.active : '',
              params.row.status === 'inactive' ? styles.inactive : '',
              params.row.status === 'pending' ? styles.pending : '',
            )}
          >
            {params.row.status}
          </div>
        );
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
    <div className={styles.dataTable} style={{ height: 500, width: '100%' }}>
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
        rowHeight={70}
        className={styles.dataGrid}
      />
    </div>
  );
}

export default DataTable;
