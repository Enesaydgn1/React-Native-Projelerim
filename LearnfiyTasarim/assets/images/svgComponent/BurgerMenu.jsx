import React from 'react'
import Svg, { Path } from "react-native-svg"
function BurgerMenu(props) {
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
      d="M11 14a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1Zm1 5a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2H12Z"
    />
  </Svg>
  )
}

export default BurgerMenu