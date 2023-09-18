import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeButton from '../assets/images/svgComponent/HomeButton';
import BookButton from '../assets/images/svgComponent/BookButton';
import StatickButton from '../assets/images/svgComponent/StatickButton';
import ProfileButton from '../assets/images/svgComponent/ProfileButton';
import BurgerMenu from '../assets/images/svgComponent/BurgerMenu';
import ProfileImage from '../assets/images/svgComponent/ProfileImage';
import FilterIcon from '../assets/images/svgComponent/Settings';
import CourseSlider from '../components/CourseSlider';
import PopulerCourse from '../components/PopulerCourse';
import DetailScreen from './DetailScreen';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <BurgerMenu style={styles.burgerMenu} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Learnify</Text>
            <Text style={styles.location}>Istanbul, Türkiye</Text>
          </View>
          <ProfileImage style={styles.profileImage} />
        </View>
        {/* HEADER BİTİŞİ */}

        {/* SEARCH KISMI */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="İçerik Ara"
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={styles.settingsBar}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        {/* SEARCH BİTİŞİ */}

        {/* KURS GEÇMİŞİ */}
        <CourseSlider />
        {/* KURS GEÇMİŞİ BİTİŞ */}

        {/* Popüler Kurslar */}
        <View style={styles.populerTextContainer}>
          <Text style={styles.populerCourseText}>Popüler öğrenmeler</Text>
          <Text style={styles.allText}>Tümü</Text>
        </View>
        <PopulerCourse navigation={navigation} />
        {/* Popüler Kurslar Bitiş*/}
      </ScrollView>
    </SafeAreaView>
  );
}

function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let buttonIcon;

        if (route.name === 'HomeScreen') {
          buttonIcon = <HomeButton  />;
        } else if (route.name === 'Book') {
          buttonIcon = <BookButton />;
        } else if (route.name === 'Statick') {
          buttonIcon = <StatickButton />;
        } else if (route.name === 'Profile') {
          buttonIcon = <ProfileButton />;
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabBarItem,
              {
                backgroundColor: isFocused
                  ? 'rgba(109, 34, 228, 0.2)'
                  : 'transparent',
                borderRadius: 300,
              },
            ]}>
            {buttonIcon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
        style={{backgroundColor: '#fff'}}
      />
      <Tab.Screen
        name="Book"
        component={DetailScreen}
        options={{headerShown: false}}
        style={{backgroundColor: '#fff'}}
      />
      <Tab.Screen
        name="Statick"
        component={DetailScreen}
        options={{headerShown: false}}
        style={{backgroundColor: '#fff'}}
      />
      <Tab.Screen
        name="Profile"
        component={DetailScreen}
        options={{headerShown: false}}
        style={{backgroundColor: '#fff'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  customTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  tabBarItem: {
    width: 50, // Genişlik
    height: 50, // Yükseklik
    borderRadius: 25, // Yarıçapı yarı genişlik olarak ayarlayarak tam yuvarlak yapın
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  burgerMenu: {
    marginLeft: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#656565',
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#080A24',
  },
  profileImage: {
    marginRight: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    marginTop: 30,
  },

  searchInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    marginRight: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white', // Beyaz arka plan rengi
    shadowColor: '#000', // Gölge rengi
    shadowOffset: {width: 0, height: 2}, // Gölge boyutu ve pozisyonu
    shadowOpacity: 0.3, // Gölge saydamlığı
    shadowRadius: 3.2, // Gölge yarıçapı
    elevation: 10, // Android için ekstra elevation
  },
  settingsBar: {
    backgroundColor: '#6D22E4',
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FC9F094D',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 3.84,
    elevation: 10,
  },
  populerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    marginTop: 26,
  },
  populerCourseText: {
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
});

export default Home;
