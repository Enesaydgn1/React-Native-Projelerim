import React from 'react';
import Svg, { Path } from "react-native-svg"
function Kariyer(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#9A4E1C"
      d="M2.667 24A2.667 2.667 0 0 1 0 21.334V8a2.667 2.667 0 0 1 2.667-2.667h4V2.667A2.667 2.667 0 0 1 9.333 0h5.333a2.667 2.667 0 0 1 2.667 2.667v2.666h4A2.667 2.667 0 0 1 24 8v13.334A2.667 2.667 0 0 1 21.334 24H2.667Z"
    />
    <Path
      fill="#662113"
      d="M21.333 16H2.667A2.667 2.667 0 0 1 0 13.333V8a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 8v5.333A2.668 2.668 0 0 1 21.333 16Z"
    />
    <Path
      fill="#9A4E1C"
      d="M21.333 14.666H2.667A2.667 2.667 0 0 1 0 12V8a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 8v4a2.667 2.667 0 0 1-2.667 2.666Z"
    />
    <Path
      fill="#CCD6DD"
      d="M13.333 13.334h-2.667a1.333 1.333 0 1 1 0-2.667h2.667a1.333 1.333 0 1 1 0 2.667Z"
    />
  </Svg>
  );
}

export default Kariyer;
