import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
// icons
import { BsSearch } from 'react-icons/bs';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FiRotateCw } from 'react-icons/fi';
// class
import className from 'classnames/bind';
import styles from './Search.module.scss';

import useDebounce from '../../../Hooks/useDebounce';
import AccountItems from './AccountItems/AccountItems';
import { songs } from '../../../api/Songs';

const cx = className.bind(styles);
function Search() {
  const [value, setValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [stateInput, setStateInput] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const debounce = useDebounce(value, 800);

  useEffect(() => {
    if (!debounce.trim()) {
      setResultSearch([]);
      return;
    }
    const fetchApi = () => {
      setStateInput(true);
      const result = songs.filter(item => {
        return item.name.toLowerCase().includes(debounce.toLowerCase());
      })
      setResultSearch(result);

      setTimeout(() => {
        setStateInput(false);
      }, 300)
    }
    fetchApi();
  }, [debounce]);

  const refInput = useRef('');

  const handleChange = (e) => setValue(e.target.value);
  const handleClear = () => {
    setValue('');
    refInput.current.focus();
  }
  return (
    <div>
      <Tippy
        interactive
        visible={showResult && resultSearch.length > 0}
        placement='bottom'
        render={(attr) =>
        (
          <div className={cx('result-search')} {...attr}>
            {resultSearch.map((item) => (
              <AccountItems key={item.id} handleShowResult={setShowResult} data={item} />
            ))}
          </div>
        )
        }
        onClickOutside={() => setShowResult(false)}
      >
        <div className={cx('search')}>
          <button className={cx('btn-search')}>
            <BsSearch />
          </button>
          <input
            ref={refInput}
            value={value}
            type="text"
            spellCheck={false}
            placeholder='Enter your song'
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          <div
            className={cx('icon-actions')}
          >
            {stateInput && <FiRotateCw className={cx('icon-rotate')} />}
            {!stateInput && <FaRegTimesCircle onClick={handleClear} />}
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;