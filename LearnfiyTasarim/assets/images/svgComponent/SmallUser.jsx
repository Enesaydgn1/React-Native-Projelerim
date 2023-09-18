import React from 'react'
import Svg, { Path } from "react-native-svg"
function SmallUser(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#6D22E4"
      d="M9 .974A8.026 8.026 0 1 0 17.026 9 8.035 8.035 0 0 0 9 .974Zm0 14.5a6.442 6.442 0 0 1-4.415-1.753 3.8 3.8 0 0 1 .842-1.047c1-.839 2.268-1.29 3.573-1.269a5.2 5.2 0 0 1 4.013 1.73c.154.183.288.382.4.593A6.442 6.442 0 0 1 9 15.474Zm5.461-3.012A6.61 6.61 0 0 0 9 9.849a6.58 6.58 0 0 0-5.456 2.619A6.47 6.47 0 1 1 15.474 9a6.428 6.428 0 0 1-1.013 3.461v.001Z"
    />
    <Path
      fill="#6D22E4"
      d="M9 4.058a2.15 2.15 0 1 0 0 4.3 2.15 2.15 0 0 0 0-4.3Zm0 3a.853.853 0 1 1 .605-.248.854.854 0 0 1-.604.252v-.004Z"
    />
  </Svg>
  )
}

export default SmallUser