import React from 'react'
import Svg, { Path } from "react-native-svg"
function Sanat(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#D99E82"
      d="M5.04 18.654a1.68 1.68 0 0 1-.373-2.083C6 13.905 9.818 9.328 6 11.238 2.251 13.113 1.431 14.4.245 12.36A8.854 8.854 0 0 1 0 10.285C0 4.605 5.373 0 12 0s12 4.605 12 10.285-5.373 10.286-12 10.286c-2.452.014-4.86-.65-6.96-1.917Z"
    />
    <Path fill="#5C913B" d="M6.667 7.238a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    <Path fill="#269" d="M13.333 5.905a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    <Path fill="#DD2E44" d="M19.333 9.905a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    <Path fill="#FFCC4D" d="M18.667 15.905a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
  </Svg>
  )
}

export default Sanat