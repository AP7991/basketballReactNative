import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './components/navBar';  // Import the NavBar component

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;


const NvBar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.logo}>🏀 Basketball Camps</Text>
    </View>
  );
};


const Home = () => {
  const [selectedCamp, setSelectedCamp] = useState(null);
  const scrollViewRef = useRef(null);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.topSection}>
        <View style={styles.leftPane}>
          <Text style={styles.title}>Basketball Holiday Camps Brisbane</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Booking page not implemented yet!')}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightPane}>
          <Image
            source={{
              uri: 'https://static.wixstatic.com/media/706c5f_cfab713943ad42ccaf56ff6fd65b253f~mv2.jpg/v1/fit/w_1440,h_1800,al_c,q_90/706c5f_cfab713943ad42ccaf56ff6fd65b253f~mv2.jpg',
            }}
            style={styles.image}
          />
        </View>
      </View>

      {/* New Info Cards Section */}
      <View style={styles.infoCardsSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {infoCards.map((card, index) => (
            <View key={index} style={styles.infoCard}>
              <Image source={{ uri: card.image }} style={styles.infoCardImage} />
              <Text style={styles.infoCardTitle}>{card.title}</Text>
              {card.bullets.map((bullet, i) => (
                <Text key={i} style={styles.infoCardBullet}>{'\u2022'} {bullet}</Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Camps and Map Section (moved up) */}
      <View style={styles.campsAndMapContainer}>
        <View style={styles.campListContainer}>
          <Text style={styles.sectionTitle}>Viewing 16 Camps</Text>
          <View style={styles.campList}>
            {camps.map((camp, index) => (
              <TouchableOpacity
                key={index}
                style={styles.campCard}
                onPress={() => setSelectedCamp(camp)}
              >
                <Image source={{ uri: camp.image }} style={styles.campImage} />
                <View style={styles.campDetails}>
                  <Text style={styles.campTitle}>{camp.title}</Text>
                  <Text style={styles.campLocation}>{camp.location}</Text>
                  <Text style={styles.campDates}>{camp.dates}</Text>
                  <Text style={styles.campPrice}>
                    <Text style={styles.discountedPrice}>{camp.discountedPrice}</Text> {' '}
                    <Text style={styles.originalPrice}>{camp.originalPrice}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.mapContainer}>
          <Text style={styles.mapPlaceholderText}>Map Placeholder</Text>
        </View>
      </View>

      {/* New What's Involved Section (moved down) */}
      <View style={styles.involvedSection}>
        <View style={styles.involvedImageContainer}>
          <Image
            source={{
              uri: 'https://tsbasketball.com/wp-content/uploads/2020/07/Right-Basketball-Camp-For-Your-Kids-1024x498.jpg', // Replace with your image URL
            }}
            style={styles.involvedImage}
          />
        </View>
        <View style={styles.involvedContent}>
          <Text style={styles.involvedTitle}>WHAT'S INVOLVED IN A SPORTS CAMP</Text>
          <View style={styles.involvedItem}>
            <Text style={styles.involvedItemTitle}>3 Days | 18hrs | 9am-3pm</Text>
            <Text style={styles.involvedItemDescription}>
              Full days of developmental coaching and care in fantastic facilities.
            </Text>
          </View>
          <View style={styles.involvedItem}>
            <Text style={styles.involvedItemTitle}>Experienced coaches & specialist sessions</Text>
            <Text style={styles.involvedItemDescription}>
              Including video analysis using digital video coaching software.
            </Text>
          </View>
          <View style={styles.involvedItem}>
            <Text style={styles.involvedItemTitle}>Friends and new friends for life</Text>
            <Text style={styles.involvedItemDescription}>
              Groups are assigned based on friendships, ability & age. Creating friendships for life.
            </Text>
          </View>
          <View style={styles.involvedItem}>
            <Text style={styles.involvedItemDescription}>
              Special sports star guest coaches to inspire our camp groups.
            </Text>
          </View>
          <View style={styles.involvedItem}>
            <Text style={styles.involvedItemDescription}>
              Beginners to advanced players are catered for.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


const infoCards = [
  {
    image: 'https://example.com/sports_camp.jpg',
    title: 'Sports Camp Overview',
    bullets: [
      'Three days of sports coaching and fun.',
      'From 9am-3pm daily, totalling 18 hours of coaching & care.',
      'Your child will receive a written assessment.'
    ],
  },
  {
    image: 'https://example.com/facilities.jpg',
    title: 'Quality Facilities & Tech',
    bullets: [
      'Full access to great private school, high-school, and council sports facilities.',
      'Video analysis of participant skills to reinforce learning.',
    ],
  },
  {
    image: 'https://example.com/coaches.jpg',
    title: 'Skilled Coaches & Sporting Idol Appearances',
    bullets: [
      'Skilled & enthusiastic coaches.',
      'Motivating mentors, providing lifelong lessons & experiences.',
      'Guest sport star appearances!'
    ],
  },
];



const benefits = [
  {
    title: 'Game-Changing Experiences',
    description:
      'Our program is designed to be engaging and interactive, ensuring that every student stays motivated and excited while building their basketball skills, making new friends, and learning valuable life lessons in a fun, dynamic setting.',
  },
  {
    title: 'Top Coaches',
    description:
      'Founded by Atem Bior, a professional basketball player, our coaches are hand-picked to create a fun, supportive environment where kids develop not only their basketball skills but also essential life values like teamwork, leadership, and resilience.',
  },
  {
    title: 'Focused Training Programs',
    description:
      'We offer targeted coaching programs that provide structured basketball training for primary and secondary school kids.',
  },
  {
    title: 'Partnerships with Schools',
    description:
      'We partner with local schools in Brisbane to bring convenient and accessible basketball coaching programs to students.',
  },
  {
    title: 'Support for Parents',
    description:
      'We provide regular communication and updates, ensuring that parents are involved and informed every step of the way.',
  },
];

const camps = [
  {
    image: 'https://example.com/camp1.jpg',
    title: 'Basketball Camp',
    location: 'Trinity Grammar, Kew',
    dates: '11, 12, 13 December 2024',
    discountedPrice: '$234.50',
    originalPrice: '$335.00',
  },
  {
    image: 'https://example.com/camp2.jpg',
    title: 'Youth Basketball Skills',
    location: 'Brighton Grammar, Brighton',
    dates: '20, 21, 22 December 2024',
    discountedPrice: '$200.00',
    originalPrice: '$290.00',
  },
  {
    image: 'https://example.com/camp3.jpg',
    title: 'Junior Basketball Camp',
    location: 'Haileybury College, Keysborough',
    dates: '27, 28, 29 December 2024',
    discountedPrice: '$180.00',
    originalPrice: '$250.00',
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <NavBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFA500',
    padding: 15,
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topSection: {
    flexDirection: 'row',
    height: 300,
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFA500',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightPane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  arrowButton: {
    backgroundColor: '#FFA500',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  arrowText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  benefitsContainer: {
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.1,
  },
  benefitCard: {
    width: (windowWidth * 0.8) / 3,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  campsSection: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  campList: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: "100%"
  },
  campListContainer: {
  width: '40%', // 40% of the screen width for camp cards
  paddingRight: 10,
  },
  campCard: {
  backgroundColor: '#FFF',
  borderRadius: 10,
  padding: 15,
  marginBottom: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
  },
  campImage: {
    /*
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    */
  },
  campDetails: {
    flex: 1,
  },
  campTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  campLocation: {
    fontSize: 14,
    color: '#777',
  },
  campDates: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  campPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountedPrice: {
    color: '#FFA500',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mapPlaceholderText: {
  color: '#777',
  fontSize: 16,
  },
  campsAndMapContainer: {
  flexDirection: 'row',
  padding: 10,
  },
mapContainer: {
  width: '60%', // 60% of the screen width for the map
  backgroundColor: '#EEE',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},

infoCardsSection: {
  paddingVertical: 20,
  backgroundColor: '#ADD8E6', // Light blue background for the section
  paddingHorizontal: 10,
  alignItems: 'center',
  justifyContent: 'center', // Center the cards horizontally
},
infoCard: {
  backgroundColor: '#FFF',
  borderRadius: 10,
  marginHorizontal: 10, // Add horizontal margin for spacing between cards
  padding: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
  maxWidth: 400, // Prevents the card from becoming too wide on larger screens
},

infoCardImage: {
  width: '100%',
  height: 120,
  borderRadius: 10,
  marginBottom: 10,
  resizeMode: 'cover',
},
infoCardTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},
infoCardBullet: {
  fontSize: 14,
  color: '#555',
  marginBottom: 5,
},

involvedSection: {
  flexDirection: 'row',
  padding: 20,
  backgroundColor: '#F0F4FA', // Light blue/grey background for the section
  borderRadius: 10,
  marginVertical: 20,
},
involvedImageContainer: {
  width: '40%', // Adjust width as necessary
  paddingRight: 10,
},
involvedImage: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  resizeMode: 'cover',
},
involvedContent: {
  width: '60%', // Adjust width as necessary
  paddingLeft: 10,
},
involvedTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 15,
},
involvedItem: {
  marginBottom: 10,
},
involvedItemTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 5,
},
involvedItemDescription: {
  fontSize: 14,
  color: '#555',
},

});

export default App;
