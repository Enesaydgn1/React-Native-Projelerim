import React from 'react';
import { Image } from 'react-native';

function PurpleTick(props) {
  const { visible } = props; // Görselliği kontrol etmek için bir "visible" prop'u alır

  return (
    <Image
      source={require('../assets/images/icon/Tick.png')} // Mor tik görüntüsünün yolunu belirtin
      style={{ width: 20, height: 20, position: 'absolute', top: -5, right: -5, display: visible ? 'flex' : 'none' }}
    />
  );
}

export default PurpleTick;
