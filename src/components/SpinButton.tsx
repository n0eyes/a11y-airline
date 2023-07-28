import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    if (count < 3) setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label id="adult-count-label" htmlFor="adult-count">
            성인
          </label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}>
            ?
            {isTooltipVisible && (
              <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label="성인 탑승자 한명 줄이기"
          aria-live="assertive"
          aria-relevant="additions"
          aria-atomic="true"
          aria-disabled={count === 0}>
          -
        </button>
        <input
          id="adult-count"
          type="text"
          role="spinbutton"
          readOnly
          className="spinButtonInput"
          value={count}
          aria-labelledby="adult-count-label"
          aria-valuetext={`성인 승객 추가 ${count}`}
          aria-valuemin={0}
          aria-valuemax={3}
          aria-live="assertive"
        />
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한명 늘리기"
          aria-live="assertive"
          aria-relevant="additions"
          aria-atomic="true"
          aria-disabled={count === 3}>
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
