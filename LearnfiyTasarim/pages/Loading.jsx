import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

const handleClick = () => {
  alert('Succes');
};

function Loading() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={[styles.elipseContainer]}>
        <View style={[styles.elipseTwo, styles.elipseTop]} />
        <View style={[styles.elipseOne, styles.elipseBottom]} />
      </View>
      <View style={styles.bottomNavigateBar}>
        <Text style={styles.navigateText}>Hoş geldin! 🎉</Text>
        <Text style={styles.navigateSubTitle}>
          Günde 10 dakikanı ayırarak yeni şeyler öğrenmeye hazır mısın?
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Image source={require('../assets/images/icon/Next.png')} style={styles.buttonImage}/>
        </TouchableOpacity>
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
    flexDirection: 'colmn',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  elipseOne: {
    width: '100%', 
    height: 600,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    margin:-300
  },
  elipseTwo: {
    width: '100%', 
    height: 410, 
    backgroundColor: '#fff',
    marginBottom:-30
  
  },
  elipseTop: {
    opacity: 0.15,
    borderTopRightRadius: 170, 
    borderTopLeftRadius: 170,
     
   
  },
  elipseBottom: {
    opacity: 0.18,
    borderTopRightRadius: 200, 
    borderTopLeftRadius: 200, 
    alignItems:'center',

  },
  bottomNavigateBar: {
    backgroundColor: '#fff',
    height: '45%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  navigateText: {
    color: '#000',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 32,
    fontWeight:'900'
  },
  navigateSubTitle: {
    textAlign: 'center',
    color: '#BABABA',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    lineHeight: 29,
    marginTop: 23,
  },
  button: {
    width: '100%',
  },
  buttonImage: {
    marginTop:67,
    alignSelf: 'center', // Görüntüyü yatayda ortala
  },

});
export default Loading;
