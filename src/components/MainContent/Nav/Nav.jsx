import { songs } from '../../../api/Songs';

// redux
import { useDispatch } from 'react-redux';
import { changeYoungSong, changeRapSong, allSong } from '../../../features/menu/MenuSlice';

// Tippy
import Tippy from '@tippyjs/react/headless';

// class
import className from 'classnames/bind';
import styles from './Nav.module.scss';

const cx = className.bind(styles);
function Nav() {
  const dispatch = useDispatch()
  return (
    <div className={cx('nav')}>
      <div
        className={cx('all')}
        onClick={() => dispatch(allSong(songs))}
      >
        <button>All</button>
      </div>
      <div className={cx('category')}>
        <Tippy
          interactive
          placement='bottom'
          render={(attr) =>
          (
            <div className={cx('show-category')} {...attr}>
              <div
                className={cx('category-young')}
                onClick={() => dispatch(changeYoungSong(songs))}
              >
                <img src="/images/song1.jpg" alt="" />
                <p className={cx('name-category')}>Nhạc Trẻ</p>
              </div>
              <div
                className={cx('category-rap')}
                onClick={() => dispatch(changeRapSong(songs))}
              >
                <img src="/images/song2.jpg" alt="" />
                <p className={cx('name-category')}>Nhạc Rap</p>
              </div>
            </div>
          )
          }
        >
          <button>Thể loại</button>
        </Tippy>
      </div>
    </div>
  );
}

export default Nav;