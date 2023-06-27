import styles from './Dashboard.module.scss';
import Widget from '../../components/Widget';
import Progress from '../../components/Progress';
import Chart from '../../components/Chart';

function Dashboard() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.widgets}>
          <Widget type="sales" />
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="refunded" />
        </div>
        <div className={styles.charts}>
          <Progress />
          <Chart />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
