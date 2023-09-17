import React from 'react'
import Svg, { Path } from "react-native-svg"
function Kodlama(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#CCD6DD"
      d="M21.333 17.333H2.667A2.667 2.667 0 0 1 0 14.667v-12A2.667 2.667 0 0 1 2.667 0h18.666A2.667 2.667 0 0 1 24 2.667v12a2.667 2.667 0 0 1-2.667 2.666Z"
    />
    <Path fill="#5DADEC" d="M21.334 2.667v12H2.667v-12h18.667Z" />
    <Path fill="#CCD6DD" d="M15.334 17.333v4H8.667v-4h6.667Z" />
    <Path fill="#9AAAB4" d="M15.334 17.333v1.333H8.667v-1.333h6.667Z" />
    <Path fill="#E1E8ED" d="M22 20H2a2 2 0 1 0 0 4h20a2 2 0 0 0 0-4Z" />
    <Path
      fill="#F5F8FA"
      d="M20.667 22.666v-1.333H22v1.333h-1.333Zm-2.667 0v-1.333h1.333v1.333H18Zm-2.667 0v-1.333h1.333v1.333h-1.333Zm-2.667 0v-1.333H14v1.333h-1.334Zm-2.666 0v-1.333h1.333v1.333H10Zm-2.667 0v-1.333h1.333v1.333H7.333Zm-2.667 0v-1.333H6v1.333H4.666Zm-2.666 0v-1.333h1.333v1.333H2Z"
    />
  </Svg>
  )
}

export default Kodlama