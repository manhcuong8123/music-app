import { VscHeart } from 'react-icons/vsc';
import { RiUserFollowLine } from 'react-icons/ri';

import className from 'classnames/bind';
import styles from './AccountItems.module.scss';

import { useDispatch } from 'react-redux';
import { clickSong } from '../../../../features/dashboard/DashboardSlice';

const cx = className.bind(styles);
function AccountItems({ handleShowResult, data }) {
  const dispatch = useDispatch();
  const { name, image, author } = data;

  const handleClickAccount = (data) => {
    dispatch(clickSong({
      ...data,
      active: true
    }));
    handleShowResult(false)
  }
  return (
    <div
      className={cx('account')}
      onClick={() => handleClickAccount(data)}
    >
      <div className={cx('icon-author')}>
        <img src={process.env.PUBLIC_URL + image} alt="" />
      </div>
      <div className={cx('info')}>
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      <div className={cx('icon-actions')}>
        <div className={cx('heart')}><VscHeart /></div>
        <div className={cx('follow')}><RiUserFollowLine /></div>
      </div>
    </div>
  );
}

export default AccountItems;