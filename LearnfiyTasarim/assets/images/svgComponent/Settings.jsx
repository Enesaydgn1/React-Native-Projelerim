import React from 'react'
import Svg, { Path } from "react-native-svg"
function FilterIcon(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.636 3.939h5.727M10.636 3.939h5.727M1.636 10.484H9M12.272 10.484h4.091M1.636 17.029h4.091M8.999 17.029h7.364M7.363 1.484v4.909M12.272 8.029v4.909M5.727 14.575v4.909"
    />
  </Svg>
  )
}

export default FilterIcon