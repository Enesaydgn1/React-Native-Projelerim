import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Tasarim from '../assets/images/svgComponent/Tasarim';
import Slider from '@react-native-community/slider';

function CourseSlider() {
  return (
    <View>
      <View style={styles.courseStoryContainer}>
        <Text style={styles.courseText}>Devam eden öğrenmeler</Text>
        <Text style={styles.allText}>Tümü</Text>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ paddingLeft: 30 , marginTop: 15}} showsHorizontalScrollIndicator={false}>
        <View style={styles.courseCard}>
          <View style={styles.courseCardHeader}>
            <View style={styles.courseIcon}>
              <Tasarim />
            </View>
            <Text style={styles.courseCardTitle}>Tasarımın İlkeleri UI/UX</Text>
          </View>

          <View style={{marginTop: 5, flex: 1}}>
            <Slider
              style={{width: '100%'}}
              minimumValue={0}
              maximumValue={6}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FFFFFF"
            />
            <View style={styles.contentCountContainer}>
              <Text style={styles.countText}>00 İçerik</Text>
              <Text style={styles.countText}>24 İçerik</Text>
            </View>
          </View>

          <Text style={styles.courseTime}>2 saat, 24 dakika</Text>
        </View>
        <View style={styles.courseCard}>
          <View style={styles.courseCardHeader}>
            <View style={styles.courseIcon}>
              <Tasarim />
            </View>
            <Text style={styles.courseCardTitle}>Tasarımın İlkeleri UI/UX</Text>
          </View>

          <View style={{marginTop: 5, flex: 1}}>
            <Slider
              style={{width: '100%'}}
              minimumValue={0}
              maximumValue={6}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FFFFFF"
            />
            <View style={styles.contentCountContainer}>
              <Text style={styles.countText}>00 İçerik</Text>
              <Text style={styles.countText}>24 İçerik</Text>
            </View>
          </View>

          <Text style={styles.courseTime}>2 saat, 24 dakika</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  courseStoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    marginTop: 26,
  },
  courseText: {
    fontSize: 22,
    color: '#080A24',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  allText: {
    fontSize: 14,
    color: '#AA84E5',
    marginRight: 20,
    marginTop: 5,
  },
  courseCard: {
    width: 300,
    height: 150,
    backgroundColor: 'rgba(109, 34, 228, 0.75)',
    padding: 10,
    borderRadius: 30,
    marginRight: 20,
  },
  courseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    flex: 1,
  },
  courseIcon: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    width: 48,
    height: 46,
    borderRadius: 13,
  },
  courseCardTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins',
    marginTop: 10,
    fontWeight: '800',
    marginRight: 15,
  },
  contentCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countText: {
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 8,
    paddingRight: 15,
    paddingLeft: 15,
  },
  courseTime: {
    color: '#FFFF',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
  },
});

export default CourseSlider;
