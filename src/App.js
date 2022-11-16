import styles from './App.module.scss';
import className from 'classnames/bind';
import Dashboard from './components/Dashboard/Dashboard';
import MainContent from './components/MainContent/MainContent';

const cx = className.bind(styles);
function App() {
  return (
    <div className={cx('app')}>
      <Dashboard />
      <MainContent />
    </div>
  );
}

export default App;
