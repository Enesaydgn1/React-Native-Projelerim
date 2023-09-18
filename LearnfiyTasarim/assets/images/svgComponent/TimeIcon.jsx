import React from 'react'
import Svg, { Path } from "react-native-svg"
function TimeIcon(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#6D22E4"
      d="M4.342 15.658a8 8 0 1 1 11.314-11.31A8 8 0 0 1 4.342 15.656v.001Zm1.061-10.25a6.507 6.507 0 0 0 0 9.192 6.507 6.507 0 0 0 9.193 0 6.508 6.508 0 0 0-2.107-10.605A6.479 6.479 0 0 0 10 3.5a6.481 6.481 0 0 0-4.6 1.9l.003.008Zm5.814 6.878-1.768-1.768a.812.812 0 0 1-.237-.573V5.9a.811.811 0 0 1 1.622 0v3.7l1.531 1.531a.812.812 0 0 1-.883 1.322.809.809 0 0 1-.263-.176l-.002.009Z"
    />
  </Svg>
  )
}

export default TimeIcon