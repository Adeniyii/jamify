/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const Slider = () => {
  const [values, setValues] = useState([50]);

  return (
    <Range
      step={STEP}
      min={MIN}
      max={MAX}
      values={values}
      onChange={(newValues) => {
        setValues(newValues);
      }}
      renderTrack={({ props, children }) => (
        <div
          className="w-full group h-5 flex flex-col justify-center cursor-pointer"
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded self-center"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#525151"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className="flex items-center justify-center h-3 w-3 outline-none !cursor-pointer"
        >
          <div
            className={`${
              !isDragged && "hidden"
            } h-3 w-3 bg-[#ccc] rounded-full group-hover:block ${
              isDragged && "block"
            }`}
          />
        </div>
      )}
    />
  );
};

export default Slider;
