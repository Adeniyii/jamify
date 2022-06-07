/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;

interface IProps {
  max: number;
  seek: number;
  // eslint-disable-next-line no-unused-vars
  onSeek: (values: number[]) => void;
}

const Slider: FC<IProps> = ({ max, seek, onSeek }) => {
  return (
    <Range
      step={STEP}
      min={MIN}
      max={max}
      values={[seek]}
      onChange={(values) => onSeek(values)}
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
                max,
                min: MIN,
                values: [seek],
                colors: ["#ccc", "#525151"],
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
