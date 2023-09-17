import React from 'react'
import Svg, { Path } from "react-native-svg"
function HomeButton(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#6D22E4"
      d="m20.4 7.224-7.2-6.3a3.6 3.6 0 0 0-4.8 0l-7.2 6.3a3.594 3.594 0 0 0-1.2 2.7v10.48a3.6 3.6 0 0 0 3.6 3.6H18a3.6 3.6 0 0 0 3.6-3.6V9.917a3.594 3.594 0 0 0-1.2-2.7v.007Zm-7.2 14.379H8.4V15.61a1.2 1.2 0 0 1 1.2-1.2H12a1.2 1.2 0 0 1 1.2 1.2v5.993Zm6-1.2a1.2 1.2 0 0 1-1.2 1.2h-2.4V15.61a3.6 3.6 0 0 0-3.6-3.6H9.6a3.6 3.6 0 0 0-3.6 3.6v5.993H3.6a1.2 1.2 0 0 1-1.2-1.2V9.917a1.2 1.2 0 0 1 .408-.9l7.2-6.292a1.2 1.2 0 0 1 1.584 0l7.2 6.292a1.2 1.2 0 0 1 .408.9v10.486Z"
    />
  </Svg>
  )
}

export default HomeButton