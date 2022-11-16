import { useState, memo } from 'react';
import useAudio from '../../../Hooks/useAudio';
import { songs } from '../../../api/Songs';

// icons
import { TbRepeat } from 'react-icons/tb';
import { BiSkipPreviousCircle, BiSkipNextCircle, BiShuffle } from 'react-icons/bi';
import { CgPlayPauseO, CgPlayButtonO } from 'react-icons/cg';

// class
import className from 'classnames/bind';
import styles from './Control.module.scss';

//
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { nextSong, prevSong } from '../../../features/dashboard/DashboardSlice';

const cx = className.bind(styles);
function Control() {
  const {
    curTime,
    playing,
    setClickedTime,
    toogle,
    isRandom,
    setIsRandom,
    isRepeat,
    setIsRepeat
  } = useAudio();

  const [number, setNumber] = useState(null);

  let { id } = useSelector(state => state.Dashboard);
  const dispatch = useDispatch();

  const randomSong = () => {
    let newValue;
    do {
      newValue = Math.floor(Math.random() * songs.length);
      setNumber(newValue);
    } while (newValue === number);
    const dataRandom = songs[newValue];
    dispatch(nextSong({
      ...dataRandom,
      active: true
    }));
  }

  const handleClickNext = () => {
    if (id >= songs.length) id = 0;

    if (isRandom) {
      randomSong();
      return;
    } else if (isRepeat) {
      return;
    } else {
      const dataNew = songs[id];
      dispatch(nextSong({
        ...dataNew,
        active: true
      }));
    }
  }

  const handleClickPrev = () => {
    if (id <= 1) id = songs.length + 1;

    if (isRandom) {
      randomSong();
      return;
    } else if (isRepeat) {
      return;
    } else {
      const prev = id - 2;
      const dataNew = songs[prev];
      dispatch(prevSong({
        ...dataNew,
        active: true
      }));
    }
  }

  const handleRandom = () => {
    if (isRepeat) {
      setIsRepeat(false)
    }
    setIsRandom(!isRandom);
  }

  const handleRepeat = () => {
    if (isRandom) {
      setIsRandom(false);
    }
    setIsRepeat(!isRepeat);
  }

  const handleChangeInput = (e) => {
    setClickedTime(e.target.value);
  }

  return (
    <div className={cx('control')}>
      <div className={cx('progress')}>
        <input
          id='progress'
          value={curTime ? curTime : 0}
          type="range"
          step="0.0003"
          onChange={handleChangeInput} />
      </div>
      <div className={cx('control-actions')}>
        <div
          className={isRepeat ? cx('icon-repeat', 'active') : cx('icon-repeat')}
          onClick={handleRepeat}
        >
          <TbRepeat />
        </div>
        <div
          className={cx('icon-prev')}
          onClick={() => handleClickPrev()}
        >
          <BiSkipPreviousCircle />
        </div>
        <div
          className={cx('icon-play')}
          onClick={toogle}
        >
          {playing ? <CgPlayPauseO /> : <CgPlayButtonO />}
        </div>
        <div
          className={cx('icon-next')}
          onClick={() => handleClickNext()}
        >
          <BiSkipNextCircle />
        </div>
        <div
          className={isRandom ? cx('icon-random', 'active') : cx('icon-random')}
          onClick={handleRandom}
        >
          <BiShuffle />
        </div>
      </div>
    </div>
  );
}

export default memo(Control);