import { useSelector, useDispatch } from "react-redux/es/exports";

import { useState, useEffect } from "react";
import { songs } from "../api/Songs";
import { nextSong } from "../features/dashboard/DashboardSlice";


const useAudio = () => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [number, setNumber] = useState(null);


  let { id } = useSelector(state => state.Dashboard);
  const dispatch = useDispatch();

  const toogle = () => setPlaying(!playing);

  useEffect(() => {
    const audio = document.querySelector('#audio');
    const progress = document.querySelector('#progress');

    const setAudioData = () => {
      setPlaying(true);
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }
    const setAudioTime = () => {
      setCurTime(audio.currentTime);
      var progressPercent = curTime / duration * 100;
      if (progressPercent) {
        progress.value = progressPercent;
      }
    }

    const handleEnded = () => {
      if (isRandom) {
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
        return;
      } else if (isRepeat) {
        setCurTime(audio.currentTime);
        return;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (id >= songs.length) id = 0;
      dispatch(nextSong({
        ...songs[id],
        active: true,
      }))
    }

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    audio.addEventListener('ended', handleEnded)

    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", handleEnded);
    }
  }, [playing, clickedTime, curTime, id]);

  return {
    curTime,
    playing,
    setClickedTime,
    toogle,
    isRandom,
    setIsRandom,
    isRepeat,
    setIsRepeat
  }
}

export default useAudio;