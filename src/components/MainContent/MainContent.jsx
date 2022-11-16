import className from 'classnames/bind';
import styles from './MainContent.module.scss';
import Search from './Search/Search';
import Nav from './Nav/Nav';
import MenuSong from './MenuSong/MenuSong';

const cx = className.bind(styles);

function MainContent() {
  return (
    <div className={cx('content')}>
      <Search />
      <Nav />
      <MenuSong />
    </div>
  );
}

export default MainContent;