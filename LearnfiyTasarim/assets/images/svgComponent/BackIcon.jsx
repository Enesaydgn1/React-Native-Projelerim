import React from 'react'
import Svg, { Path } from "react-native-svg"
function BackIcon(props) {
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
      d="m18.71 20.001 5.462-5.947a1.209 1.209 0 0 0-.386-1.96 1.182 1.182 0 0 0-1.299.26l-6.66 6.8a1.212 1.212 0 0 0 0 1.7l6.66 6.8a1.183 1.183 0 0 0 1.685 0 1.209 1.209 0 0 0 0-1.7l-5.462-5.953Z"
    />
  </Svg>
  )
}

export default BackIcon