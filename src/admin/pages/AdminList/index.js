import styles from './AdminList.module.scss';
import DataTable from '../../components/DataTable';

function AdminList() {
  return (
    <div className={styles.list}>
      <div className={styles.listContainer}>
        <DataTable />
      </div>
    </div>
  );
}

export default AdminList;
