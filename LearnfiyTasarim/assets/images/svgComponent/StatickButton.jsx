import React from 'react'
import Svg, { Path } from "react-native-svg"
function StatickButton(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#6D22E4"
      d="M1.5 16.5A1.5 1.5 0 0 0 0 18v4.5a1.5 1.5 0 0 0 3 0V18a1.5 1.5 0 0 0-1.5-1.5Zm6-4.5A1.5 1.5 0 0 0 6 13.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 7.5 12Zm12-12A1.5 1.5 0 0 0 18 1.5v21a1.5 1.5 0 1 0 3 0v-21A1.5 1.5 0 0 0 19.5 0Zm-6 6A1.5 1.5 0 0 0 12 7.5v15a1.5 1.5 0 1 0 3 0v-15A1.5 1.5 0 0 0 13.5 6Z"
      opacity={0.5}
    />
  </Svg>
  )
}

export default StatickButton