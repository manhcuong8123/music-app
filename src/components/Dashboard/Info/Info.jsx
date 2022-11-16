import { useSelector } from 'react-redux';

import className from 'classnames/bind';
import styles from './Info.module.scss';

const cx = className.bind(styles);
function Info() {
  const { name, image, author, path } = useSelector(state => state.Dashboard);
  return (
    <div className={cx('info')}>
      <div className={cx('cd')}>
        <img id='cdThumb' src={process.env.PUBLIC_URL + image} alt="" />
      </div>
      <h2 className={cx('name-song')}>{name}</h2>
      <p className={cx('author')}>{author}</p>
      <audio src={process.env.PUBLIC_URL + path} id='audio'></audio>
    </div>
  );
}

export default Info;