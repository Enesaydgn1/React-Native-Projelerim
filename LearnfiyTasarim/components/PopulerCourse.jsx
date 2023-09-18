import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import Mutfak from '../assets/images/svgComponent/Mutfak';
import Kariyer from '../assets/images/svgComponent/Kariyer';
import Kodlama from '../assets/images/svgComponent/Kodlama';
import Sanat from '../assets/images/svgComponent/Sanat';
import Tasarim from '../assets/images/svgComponent/Tasarim';
import Oyun from '../assets/images/svgComponent/Oyun';
import Pazarlama from '../assets/images/svgComponent/Pazarlama';
import Muzik from '../assets/images/svgComponent/Muzik';
import Spor from '../assets/images/svgComponent/Spor';

// Textleri bilerek silmedim tıklandığında ilgili içeriklerin gelmesini sağlarsam diye
const emojis = [
  {
    image: <Sanat />,
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
    image: <Tasarim />,
    text: 'Tasarım',
  },
  {
    image: <Oyun />,
    text: 'Oyun',
  },
  {
    image: <Pazarlama />,
    text: 'Pazarlama',
  },
  {
    image: <Muzik />,
    text: 'Müzik',
  },
  {
    image: <Spor />,
    text: 'Spor',
  },
];

const renderButtons = () => {
  const buttons = [];
  for (let i = 0; i < 9; i++) {
    buttons.push(
      <View key={i} style={styles.buttonContainer}>
        <TouchableOpacity>
          <View>
            <View style={styles.courseIcon}>{emojis[i].image}</View>
          </View>
        </TouchableOpacity>
      </View>,
    );
  }
  return buttons;
};

function PopulerCourse({navigation}) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonsContainer}>{renderButtons()}</View>
      </ScrollView>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.populerCoursContainer}>
            <View style={styles.populerCourseCard}>
              <View style={styles.headerImage}></View>
              <Text style={styles.populerCardTitle}>
                Javascript’in Temelleri
              </Text>
              <View style={styles.profileElipseContainer}>
                <View style={styles.profileElipse}></View>
                <View style={[styles.profileElipse, {marginLeft: -20}]}></View>
                <View style={[styles.profileElipse, {marginLeft: -20}]}>
                  <Text style={styles.verticalDots}>.</Text>
                  <Text style={styles.verticalDots}>.</Text>
                  <Text style={styles.verticalDots}>.</Text>
                </View>
              </View>
              <View style={styles.populerCardFooter}>
                <Text style={styles.joinText}>100+ katıldı</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen')}>
                  <Text style={styles.deatilText}>Detayları Gör</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.populerCourseCard}>
              <View style={styles.headerImage}></View>
              <Text style={styles.populerCardTitle}>Sürdürülebilirlik</Text>
              <View style={styles.profileElipseContainer}>
                <View style={styles.profileElipse}></View>
                <View style={[styles.profileElipse, {marginLeft: -20}]}></View>
                <View style={[styles.profileElipse, {marginLeft: -20}]}>
                  <Text style={styles.verticalDots}>.</Text>
                  <Text style={styles.verticalDots}>.</Text>
                  <Text style={styles.verticalDots}>.</Text>
                </View>
              </View>
              <View style={styles.populerCardFooter}>
                <Text style={styles.joinText}>100+ katıldı</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailScreen')}>
                  <Text style={styles.deatilText}>Detayları Gör</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 6,
    marginTop: 10,
  },
  courseIcon: {
    backgroundColor: 'rgba(242, 242, 242, 1)',
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  populerCoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    marginTop: 10,
    padding: Platform.OS === 'ios' ? 10 : 10,
  },
  populerCourseCard: {
    width: 230,
    height: 230,
    backgroundColor: '#FFFF',
    borderRadius: 30,
    marginRight: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },
  headerImage: {
    width: '100%',
    backgroundColor: 'rgba(109, 34, 228, 0.7)',
    height: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  populerCardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    margin: 11,
  },
  profileElipseContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  profileElipse: {
    width: 27,
    height: 27,
    borderRadius: 200,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 11,
  },
  verticalDots: {
    color: 'rgba(169, 169, 169, 1)',
    fontSize: 28,
    lineHeight: 10,
    marginTop: -5,
  },
  populerCardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  joinText: {
    fontSize: 10,
    color: 'rgba(73, 73, 73, 1)',
    marginLeft: 10,
  },
  deatilText: {
    color: 'rgba(109, 34, 228, 1)',
    fontSize: 12,
    fontFamily: 'Poppins',
    marginRight: 15,
    fontWeight: '700',
  },
});

export default PopulerCourse;
