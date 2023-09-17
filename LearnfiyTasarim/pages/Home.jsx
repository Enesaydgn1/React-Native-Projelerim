import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
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

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
     
      <CourseSlider/>

      {/* KURS GEÇMİŞİ BİTİŞ */}
    </SafeAreaView>
  );
}

function CustomTabBar() {
  return (
    <View style={styles.customTabBar}>
      <TouchableOpacity style={styles.tabBarItem}>
        <HomeButton />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabBarItem}>
        <BookButton />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabBarItem}>
        <StatickButton />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabBarItem}>
        <ProfileButton />
      </TouchableOpacity>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator tabBar={CustomTabBar} tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeScreen}
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
    paddingTop: 50,
  },
  customTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    backgroundColor: '#fff',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
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

});

export default Home;
