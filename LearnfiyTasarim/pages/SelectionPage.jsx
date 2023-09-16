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
import {LinearGradient as ExpoLinearGradient} from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

function SelectionPage() {
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
      image: require('../assets/images/icon/png/Emoji1.png'),
      text: 'Sanat',
    },
    {
      image: require('../assets/images/icon/png/Emoji2.png'),
      text: 'Kariyer',
    },
    {
      image: require('../assets/images/icon/png/Emoji3.png'),
      text: 'Mutfak',
    },
    {
      image: require('../assets/images/icon/png/Emoji4.png'),
      text: 'Kodlama',
    },
    {
      image: require('../assets/images/icon/png/Emoji5.png'),
      text: 'Tasarım',
    },
    {
      image: require('../assets/images/icon/png/Emoji6.png'),
      text: 'Oyun',
    },
    {
      image: require('../assets/images/icon/png/Emoji7.png'),
      text: 'Pazarlama',
    },
    {
      image: require('../assets/images/icon/png/Emoji8.png'),
      text: 'Müzik',
    },
    {
      image: require('../assets/images/icon/png/Emoji9.png'),
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
              <Image source={emojis[i].image} style={styles.buttonImage} />
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

  // İşletim sistemine göre doğru gradient bileşenini seçin
  const GradientComponent =
    Platform.OS === 'ios' ? ExpoLinearGradient : LinearGradient;

  return (
    <SafeAreaView style={styles.sectionContainer}>
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
        {Platform.OS === 'ios' ? (
          <TouchableOpacity style={{marginTop: 10}}>
            <GradientComponent
              colors={['#000000', '#545454']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>
                Öğrenme Yolculuğuna Başla!
              </Text>
            </GradientComponent>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity >
            <GradientComponent
              colors={['#000000', '#545454']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>
                Öğrenme Yolculuğuna Başla!
              </Text>
            </GradientComponent>
          </TouchableOpacity>
        )}
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
    </SafeAreaView>
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
