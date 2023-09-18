import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import BackIcon from '../assets/images/svgComponent/BackIcon';
import InfoButton from '../assets/images/svgComponent/InfoButton';
import CourseThumbnail from '../assets/images/svgComponent/CourseThumbnail';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SmallUser from '../assets/images/svgComponent/SmallUser';
import TimeIcon from '../assets/images/svgComponent/TimeIcon';
import PlayButton from '../assets/images/svgComponent/PlayButton';
import SmallBack from '../assets/images/svgComponent/SmallBack';
import { useNavigation } from '@react-navigation/native';

function DetailScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // Önceki sayfaya geri git
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <BackIcon style={styles.backbutton} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Öğrenme Detayı</Text>
        </View>
        <InfoButton style={styles.info} />
      </View>
      {/* HEADER BİTİŞİ */}

      {/* Thumbnail  */}
      <View style={styles.thumbnailContainer}>
        <CourseThumbnail style={styles.thumbnail} />
      </View>

      <View style={styles.LeftContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Javascript’in Temelleri</Text>
          <View style={styles.contentFooterContainer}>
            <SmallUser style={styles.icon} />
            <Text style={styles.author}>Taha Aydogmus</Text>
            <TimeIcon style={styles.icon} />
            <Text style={styles.duration}>2s 45d</Text>
          </View>
          <Text style={styles.content}>
            Kodlama, bir programlama dilinde kod {'\n'}
            veya komut dosyaları yazarak program{'\n'}
            eylemlerinden biridir.
          </Text>
        </View>

        <Text style={styles.secondTitle}>Başlıklar</Text>
        <View style={styles.coursePlayCardContainer}>
          <View style={styles.coursePlayCard}>
            <View style={styles.flexContainer}>
              <View style={styles.coursePlayButton}>
                <PlayButton />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.corusePlayTitle}>Kodlamaya giriş</Text>
                <Text style={styles.coursePlayTime}>03.45 min</Text>
              </View>
              <SmallBack style={styles.SmallBack} />
            </View>
          </View>
        </View>
        <View style={styles.coursePlayCardContainer}>
          <View style={styles.coursePlayCard}>
            <View style={styles.flexContainer}>
              <View style={styles.coursePlayButton}>
                <PlayButton />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.corusePlayTitle}>İlk temel uygulama</Text>
                <Text style={styles.coursePlayTime}>03.45 min</Text>
              </View>
              <SmallBack style={styles.SmallBack} />
            </View>
          </View>
        </View>
        <View style={styles.coursePlayCardContainer}>
          <View style={styles.coursePlayCard}>
            <View style={styles.flexContainer}>
              <View style={styles.coursePlayButton}>
                <PlayButton />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.corusePlayTitle}>Yayınlama yöntemleri</Text>
                <Text style={styles.coursePlayTime}>03.45 min</Text>
              </View>
              <SmallBack style={styles.SmallBack} />
            </View>
          </View>
        </View>
      </View>

      {/* Thumbnail  Bitiş*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 20 : 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('10%'),
  },
  backbutton: {
    marginLeft: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  info: {
    marginRight: 16,
  },
  thumbnailContainer: {
    alignItems: 'center',
  },
  thumbnail: {
    marginTop: hp('2%'),
    width: 100,
  },
  contentContainer: {
    marginTop: wp('2%'),
  },
  contentFooterContainer: {
    flexDirection: 'row',
    marginTop: wp('3%'),
  },
  icon: {
    marginRight: 5,
  },
  author: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: wp('8%'),
  },
  duration: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    color: 'rgba(0, 0, 0, 0.5)',
    lineHeight: 24,
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginTop: wp('4%'),
  },
  secondTitle: {
    fontSize: hp('2%'),
    fontWeight: '600',
    lineHeight: 27,
    marginTop: hp('3%'),
  },
  LeftContainer: {
    marginLeft: wp('13%'),
  },
  coursePlayCardContainer: {
    alignItems: 'center',
    marginTop: wp('2%'),
  },
  coursePlayCard: {
    backgroundColor: 'rgba(242, 242, 242, 1)',
    width: wp('76%'),
    height: hp('9%'),
    marginLeft: -wp('16%'),
    borderRadius: 30,
    padding: 20,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column', 
    marginLeft: 10, 
    width:150
  },
  corusePlayTitle:{
    color:'rgba(0, 0, 0, 1)',
    fontWeight:'500',
    lineHeight:21,
    fontFamily:'Poppins'
  },
  coursePlayButton: {
    width: wp('10%'),
    height: hp('4%'),
    backgroundColor: 'rgba(109, 34, 228, 1)',
    alignItems: 'center',
    borderRadius: 300,
    padding: 20,
    justifyContent: 'center',
  },
  coursePlayTime:{
    color:'rgba(182, 182, 182, 1)',
    fontSize:12,
    fontFamily:'Poppins'
  },
  SmallBack: {
    marginLeft: wp('12%'),
  },
});

export default DetailScreen;
