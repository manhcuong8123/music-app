import { VscHeart } from 'react-icons/vsc';
import { HiOutlineShare } from 'react-icons/hi';

import Info from "./Info/Info";
import Control from "./Control/Control";

import className from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cx = className.bind(styles);

function Dashboard() {
  return (
    <div className={cx('dashboard')}>
      <Info />
      <Control />
      <div className={cx('icon-heart')}>
        <VscHeart />
      </div>
      <div className={cx('icon-share')}>
        <HiOutlineShare />
      </div>
    </div>
  );
}

export default Dashboard;