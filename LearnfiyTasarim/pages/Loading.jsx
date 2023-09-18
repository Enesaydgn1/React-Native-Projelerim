import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 
import NextIcon from '../assets/images/svgComponent/NextIcon';

function Loading({ navigation }) {
  return (
    <View style={styles.sectionContainer}>
      <View style={[styles.elipseContainer]}>
        <View style={[styles.elipseTwo, styles.elipseTop]} />
        <View style={[styles.elipseOne, styles.elipseBottom]} />
      </View>
      <View style={styles.bottomNavigateBar}>
        <Text style={styles.navigateText}>Hoş geldin! 🎉</Text>
        <Text style={styles.navigateSubTitle}>
          Günde 10 dakikanı ayırarak {"\n"} yeni şeyler öğrenmeye hazır mısın?
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SelectionPage')}>
          <NextIcon style={styles.buttonNext} />
        </TouchableOpacity>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  elipseOne: {
    width: '100%',
    height: hp('40%'),
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    margin: -hp('20%'),
  },
  elipseTwo: {
    width: '100%',
    height: hp('60%'),
    backgroundColor: '#fff',
    margin: -hp('30%'),
  },
  elipseTop: {
    opacity: 0.15,
    borderTopRightRadius: wp('45%'),
    borderTopLeftRadius: wp('45%'),
  },
  elipseBottom: {
    opacity: 0.18,
    borderTopRightRadius: wp('45%'),
    borderTopLeftRadius: wp('45%'),
    alignItems: 'center',
    marginBottom: -hp('10%'),
  },
  bottomNavigateBar: {
    backgroundColor: '#fff',
    height: hp('45%'),
    borderTopLeftRadius: wp('10%'),
    borderTopRightRadius: wp('10%'),
    padding: wp('4%'),
  },
  navigateText: {
    color: '#000',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: hp('3.5%'),
    fontSize: wp('8%'),
    fontWeight: '700',
  },
  navigateSubTitle: {
    textAlign: 'center',
    color: 'rgba(186, 186, 186, 1)',
    fontSize: 16,
    fontFamily: 'Poppins',
    lineHeight: hp('4%'),
    marginTop: hp('2.5%'),
  },
  button: {
    width: '100%',
  },
  buttonNext: {
    marginTop: hp('6%'),
    alignSelf: 'center',
  },
  
});

export default Loading;
