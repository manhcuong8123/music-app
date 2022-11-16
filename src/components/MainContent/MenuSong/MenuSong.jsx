import { AiOutlineBars } from 'react-icons/ai'
import { useSelector } from 'react-redux';

import className from 'classnames/bind';
import styles from './MenuSong.module.scss';
import ItemSong from './ItemSong/ItemSong';

const cx = className.bind(styles);

function MenuSong() {
  const listSong = useSelector(state => state.menuSong);
  return (
    <>
      <div className={cx('title')}>
        <span className={cx('title-icon')}><AiOutlineBars /></span>
        <span>List Songs</span>
      </div>
      <div
        className={cx('list-song')}
        id="listSong"
      >
        {
          listSong.map((item, index) => (
            <ItemSong key={item.id} index={index} data={item} />
          ))
        }
      </div>
    </>
  );
}

export default MenuSong;