import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform, // Platform modülünü içe aktarın
} from 'react-native';
import PurpleTick from '../components/PurpleTick';
import {LinearGradient} from 'expo-linear-gradient';
import Mutfak from '../assets/images/svgComponent/Mutfak';
import Kariyer from '../assets/images/svgComponent/Kariyer';
import Kodlama from '../assets/images/svgComponent/Kodlama';
import Sanat from '../assets/images/svgComponent/Sanat';
import Tasarim from '../assets/images/svgComponent/Tasarim';
import Oyun from '../assets/images/svgComponent/Oyun';
import Pazarlama from '../assets/images/svgComponent/Pazarlama';
import Muzik from '../assets/images/svgComponent/Muzik';
import Spor from '../assets/images/svgComponent/Spor';

function SelectionPage({navigation}) {
  const [clickedButtons, setClickedButtons] = useState(Array(9).fill(false)); // Her bir buton için tıklama durumu

  const handleClick = buttonIndex => {
    // Tıklanan butonun tıklama durumunu değiştir
    const updatedClickedButtons = [...clickedButtons];
    updatedClickedButtons[buttonIndex] = !updatedClickedButtons[buttonIndex];
    setClickedButtons(updatedClickedButtons);
  };

  // Resimlerin yollarını ve alt metinlerini bir dizi olarak sakladım ve buradan dağıttım
  const emojis = [
    {
      image: <Sanat/>,
      text: 'Sanat',
    },
    {
      image: <Kariyer />,
      text: 'Kariyer',
    },
    {
      image: <Mutfak />,
      text: 'Mutfak',
    },
    {
      image: <Kodlama />,
      text: 'Kodlama',
    },
    {
      image: <Tasarim/>,
      text: 'Tasarım',
    },
    {
      image: <Oyun/>,
      text: 'Oyun',
    },
    {
      image: <Pazarlama/>,
      text: 'Pazarlama',
    },
    {
      image: <Muzik/>,
      text: 'Müzik',
    },
    {
      image: <Spor/>,
      text: 'Spor',
    },
  ];

  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 9; i++) {
      buttons.push(
        <View key={i} style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleClick(i)}
            style={[
              styles.topiContainer,
              {
                borderColor: clickedButtons[i] ? '#6D22E4' : 'transparent',
                borderWidth: 2,
                backgroundColor: clickedButtons[i] ? '#fff' : '#F2F2F2',
              },
            ]}>
            <View
              style={[
                styles.buttonImageContainer,
                {
                  backgroundColor: clickedButtons[i] ? '#fff' : '#F2F2F2',
                },
              ]}>
              <View>{emojis[i].image}</View>
            </View>
            <PurpleTick visible={clickedButtons[i]} />
          </TouchableOpacity>
          <Text
            style={[
              styles.buttonText,
              {
                color: clickedButtons[i] ? '#1D2D3A' : '#868894',
              },
            ]}>
            {emojis[i].text}
          </Text>
        </View>,
      );
    }
    return buttons;
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={[styles.elipseContainer]}>
        <View style={[styles.elipseTwo, styles.elipseTop]} />
        <View style={[styles.elipseOne, styles.elipseBottom]} />
      </View>
      <Text style={styles.title}>Hangi alanlarda öğrenmek istersin?</Text>
      <View style={styles.bottomNavigateBar}>
        <Text style={styles.navigateTittle}>
          Sana daha iyi içerikler sunmak için favori öğrenme alanlarını seçmen
          gerekiyor.
        </Text>
        <View style={styles.buttonsContainer}>{renderButtons()}</View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            colors={['#000000', '#545454']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.startButton}>
            <Text style={styles.startButtonText}>
              Öğrenme Yolculuğuna Başla!
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {Platform.OS === 'ios' ? (
          <Text style={[styles.subText, {marginTop: 40}]}>
            Favori alanlarını daha sonra değiştirebilirsin.
          </Text>
        ) : (
          <Text style={[styles.subText]}>
            Favori alanlarını daha sonra değiştirebilirsin.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#6D22E4',
    flex: 1,
    justifyContent: 'flex-end',
  },
  elipseContainer: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  elipseOne: {
    width: 330,
    height: 300,
    backgroundColor: '#fff',
    position: 'absolute',
    justifyContent: 'center',
    right: 0,
    marginRight: -60,
    marginBottom: 0,
    top: 80,
  },
  elipseTwo: {
    width: 350,
    height: 200,
    backgroundColor: '#fff',
    marginBottom: -150,
    marginRight: -20,
    top: 0,
  },
  elipseTop: {
    opacity: 0.15,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 200,
  },
  elipseBottom: {
    opacity: 0.18,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 180,
    alignItems: 'center',
  },
  bottomNavigateBar: {
    backgroundColor: '#fff',
    height: '78%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 28,
    padding: 35,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  navigateTittle: {
    color: '#868894',
    fontSize: 15,
    fontFamily: 'Poppins',
    padding: 20,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '30%', // Her satırda 3 düğün görünmesi için 30% ayarlıyoruz
  },
  topiContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F2F2F2',
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    resizeMode: 'contain',
  },
  buttonText: {
    marginTop: 8,
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  startButton: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    borderRadius: 26,
    marginTop: 40,
  },
  startButtonText: {
    color: '#ffff',
    fontSize: 16,
    fontFamily: 'Poppin-Medium',
    fontWeight: '700',
  },
  subText: {
    color: '#BABABA',
    fontSize: 15,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 20,
    width: '100%',
    margin: 'auto',
  },
});

export default SelectionPage;
