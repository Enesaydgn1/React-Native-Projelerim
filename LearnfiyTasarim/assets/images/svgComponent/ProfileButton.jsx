import React from 'react';
import Svg, { G, Path } from "react-native-svg"
function ProfileButton(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#6D22E4" opacity={0.5}>
      <Path
        d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 21.677a9.632 9.632 0 0 1-6.6-2.62 5.677 5.677 0 0 1 1.259-1.568 8.117 8.117 0 0 1 5.342-1.9 7.78 7.78 0 0 1 6 2.586c.228.274.427.57.593.886A9.631 9.631 0 0 1 12 21.677Zm8.164-4.5a9.886 9.886 0 0 0-8.164-3.9 9.837 9.837 0 0 0-8.158 3.915A9.673 9.673 0 1 1 21.677 12a9.609 9.609 0 0 1-1.513 5.174v.003Z"
        opacity={0.5}
      />
      <Path
        d="M12 4.611a3.215 3.215 0 1 0 0 6.43 3.215 3.215 0 0 0 0-6.43Zm0 4.491a1.276 1.276 0 1 1 0-2.553 1.276 1.276 0 0 1 0 2.553Z"
        opacity={0.5}
      />
    </G>
  </Svg>
  );
}

export default ProfileButton;
