import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clickSong } from '../../../../features/dashboard/DashboardSlice';

import { HiDotsHorizontal } from 'react-icons/hi';

import className from 'classnames/bind';
import styles from './ItemSong.module.scss';

// get data

const cx = className.bind(styles);
function ItemSong({ data }) {
  const { image, name, author, id: idItem } = data;
  const { id, active } = useSelector(state => state.Dashboard);
  const scrollIntoViews = useRef()

  const dispatch = useDispatch();

  if (active && idItem === id) {
    if (scrollIntoViews.current) {
      scrollIntoViews.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleClickSong = (data) => {

    dispatch(clickSong({
      ...data,
      active: true
    }));
  }
  return (
    <div
      ref={scrollIntoViews}
      className={idItem === id && active ? cx('wrapper', 'active') : cx('wrapper')}
      onClick={() => handleClickSong(data)}
    >
      <div className={cx('image-author')}>
        <img src={process.env.PUBLIC_URL + image} alt="" />
      </div>
      <div className={cx('info')}>
        <h3 className={cx('name-song')}>{name}</h3>
        <p className={cx('name-author')}>{author}</p>
      </div>
      <div className={cx('icon-song')}>
        <HiDotsHorizontal />
      </div>
    </div>
  );
}

export default ItemSong;