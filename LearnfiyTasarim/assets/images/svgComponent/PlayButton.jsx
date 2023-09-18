import React from 'react'
import Svg, { Path } from "react-native-svg"
function PlayButton(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="m8 19 11-7L8 5v14Z" />
  </Svg>
  )
}

export default PlayButton