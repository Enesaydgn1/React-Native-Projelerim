import React from 'react'
import Svg, { Path } from "react-native-svg"
function SmallBack(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#B6B6B6"
      d="M6.29 8.001.828 2.054a1.209 1.209 0 0 1 .386-1.96 1.183 1.183 0 0 1 1.299.26l6.66 6.8a1.212 1.212 0 0 1 0 1.7l-6.66 6.8a1.182 1.182 0 0 1-1.685 0 1.21 1.21 0 0 1 0-1.7L6.29 8.001Z"
    />
  </Svg>
  )
}

export default SmallBack