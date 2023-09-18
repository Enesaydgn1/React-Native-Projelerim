import React from 'react';
import Svg, { Path } from "react-native-svg"
function InfoButton(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#6D22E4"
      d="M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20s8.954 20 20 20 20-8.954 20-20Z"
      opacity={0.2}
    />
    <Path
      fill="#6D22E4"
      d="M19.999 11.808a8.191 8.191 0 1 0 0 16.383 8.191 8.191 0 0 0 0-16.383Zm0 14.744a6.553 6.553 0 1 1 0-13.106 6.553 6.553 0 0 1 0 13.106Z"
    />
    <Path
      fill="#6D22E4"
      d="M20 15.085a2.867 2.867 0 0 0-2.868 2.867.819.819 0 0 0 1.638 0A1.23 1.23 0 1 1 20 19.185a.819.819 0 0 0-.82.819v1.638a.819.819 0 0 0 1.638 0v-.957a2.86 2.86 0 0 0-.819-5.6ZM19.999 24.999a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
  );
}

export default InfoButton;
