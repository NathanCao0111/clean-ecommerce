import styles from './ProductsTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

function ProductsTable() {
  const [productsData, setProductsData] = useState([]);

  const actionColumn = [
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: () => {
        return (
          <div className={styles.cellActions}>
            <button className={styles.view}>View</button>
            <button className={styles.delete}>Delete</button>
          </div>
        );
      },
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'products',
      headerName: 'Products',
      width: 330,
      renderCell: (params) => {
        return (
          <div className={styles.cellImg}>
            <img src={params.row.image.bigImg} alt={params.row.title} />
            <span>{params.row.title}</span>
          </div>
        );
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      headerAlign: 'start',
      cellClassName: styles.cellPrice,
      width: 100,
    },
    {
      field: 'texture',
      headerName: 'Texture',
      width: 130,
      renderCell: (params) => {
        return <div className={styles.cellSpecs}>{params.row.specs.texture}</div>;
      },
    },
    {
      field: 'weight',
      headerName: 'Weight',
      width: 100,
      renderCell: (params) => {
        return <div className={styles.cellSpecs}>{params.row.specs.weight}</div>;
      },
    },
    {
      field: 'size',
      headerName: 'Size',
      width: 170,
      renderCell: (params) => {
        return <div className={styles.cellSpecs}>{params.row.specs.size}</div>;
      },
    },
  ];

  const rows = productsData;

  useEffect(() => {
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/products')
      .then((response) => response.json())
      .then((data) => setProductsData(data));
  }, []);

  return (
    <div className={styles.dataTable} style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        autoPageSize
        // pageSizeOptions={[5, 10]}
        checkboxSelection
        rowHeight={78}
        className={styles.dataGrid}
      />
    </div>
  );
}

export default ProductsTable;
