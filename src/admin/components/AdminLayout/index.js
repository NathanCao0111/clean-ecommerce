import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import styles from './AdminLayout.module.scss';

function AdminLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <AdminSidebar className={styles.sidebar} />
      <div className={styles.container}>
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
