import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
export default function NextIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="none"
      {...props}>
      <Path
        fill="url(#a)"
        d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30Z"
      />
      <Path
        fill="#fff"
        d="m31.713 30.002-7.247-7.891a1.6 1.6 0 0 1 .512-2.603 1.57 1.57 0 0 1 1.724.346l8.837 9.017a1.608 1.608 0 0 1 0 2.259l-8.837 9.017a1.568 1.568 0 0 1-2.236 0 1.6 1.6 0 0 1 0-2.257l7.247-7.888Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={0}
          x2={60}
          y1={30}
          y2={30}
          gradientUnits="userSpaceOnUse">
          <Stop />
          <Stop offset={1} stopColor="#545454" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
