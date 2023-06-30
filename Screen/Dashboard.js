import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  Share,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Dashboard = ({ navigation }) => {
  const handleButtonPress = (buttonName) => {
    console.log(`Button ${buttonName} pressed`);
  };
  const data = [
    {
      id: '1',
      name: 'Diamond FX',
      value: '+ 3.99 (%)',
      growth: 'Weekly Growth'
    },
    {
      id: '2',
      name: 'Gold FX',
      value: '+ 1.99 (%)',
      growth: 'Weekly Growth'
    },
    {
      id: '3',
      name: 'Platinum FX',
      value: '+ 2.99 (%)',
      growth: 'Weekly Growth'
    },
    {
      id: '4',
      name: 'Bronze FX',
      value: '+ 0.99 (%)',
      growth: 'Weekly Growth'
    },
    {
      id: '5',
      name: 'Silver FX',
      value: '+ 0.099 (%)',
      growth: 'Weekly Growth'
    },
  ]


  const News = [
    {
      id: '1',
      name: 'MetaMask hits 1M monthly users ...',
      date: '07-October-2020 12:00:00 AM...'
    },
    {
      id: '2',
      name: 'Brazilian crypto industry gets ...',
      date: '05-December-2022 12:00:00 AM...'
    },
    {
      id: '3',
      name: 'UAE regulator adopts blockchain ...',
      date: '16-November-2022 12:00:00 AM ...'
    },
    {
      id: '4',
      name: 'EU Commissioner lawmakers...',
      date: '18-October-2022 12:00:00 AM ...'
    },
    {
      id: '5',
      name: 'UAE regulator adopts blockchain ...',
      date: '16-November-2022 12:00:00 AM ...'
    },
  ]
  
const onPress=()=>{
  navigation.openDrawer()
}
const onClick=()=>{
  navigation.openTab()
}
const copyToClipboard = async () => {
  await Clipboard.setStringAsync('6HQQp');
};
const [copiedText, setCopiedText] = useState('6HQQp');
  return (
    <View>
      <View style={{ height: 100, backgroundColor: "blue", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", marginTop: 50, }}>
  
          <Image
            style={styles.image}
            source={require('../assets/xpo_logo_only1.png')}
          />
          <Text style={styles.text}>Hi, Xeno</Text>
        </View>
        <View style={{ flexDirection: "row", width: "40%", justifyContent: "space-between", marginTop: 65, }}>
  
          <TouchableOpacity
            onPress={() => handleButtonPress('2')}
            style={styles.buttonContainer}
          >
            <Image
              style={styles.image2}
              source={require('../assets/Vector.png')}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => handleButtonPress('4')}
            style={styles.buttonContainer}
          >
            <Image
              style={styles.image4}
              source={require('../assets/Vector3.png')}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => handleButtonPress('3')}
            style={styles.buttonContainer}
          >
            <Image
              style={styles.image3}
              source={require('../assets/Vector2.png')}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
          onPress={onPress}
          style={styles.drawerButtonContainer}
        >
          <Image style={styles.image5} source={require('../assets/Icon.png')} />
        </TouchableOpacity>
        </View>
  
      </View>
  
      <ScrollView contentContainerStyle={{ backgroundColor: "aliceblue" }} >
  
        <View style={styles.container2}>
  
  
          <View style={styles.portfolioContainer}>
            <ImageBackground
              source={require('../assets/Rectangle.png')}
              style={styles.portfolioBox}
            >
              <Text style={styles.text2}>Portfolio Value</Text>
              <Text style={styles.text3}>$20,321</Text>
              <Image
                style={styles.image6}
                source={require('../assets/9432281.png')}
              />
            </ImageBackground>
  
            <ImageBackground
              source={require('../assets/Rectangle.png')}
              style={styles.portfolioBox2}
            >
              <Text style={styles.text2}>Performance 24h</Text>
              <Text style={styles.text3}>+3.99%</Text>
              <Image
                style={styles.image6}
                source={require('../assets/9432281(1).png')}
              />
            </ImageBackground>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, marginTop: 15 }}>
            <View>
              <Image
                style={styles.image7}
                source={require('../assets/Group21.png')}
              />
              <Text style={styles.text4}>Deposit</Text>
            </View>
            <View>
              <Image
                style={styles.image8}
                source={require('../assets/Group22.png')}
              />
              <Text style={styles.text4}>Withdrawal</Text>
            </View>
            <View>
              <Image
                style={styles.image9}
                source={require('../assets/Group23.png')}
              />
              <Text style={styles.text4}>Crypto</Text>
            </View>
            <View>
              <Image
                style={styles.image10}
                source={require('../assets/Group24.png')}
              />
              <Text style={styles.text4}>Descriptive</Text>
            </View>
            <View>
              <Image
                style={styles.image11}
                source={require('../assets/Group25.png')}
              />
              <Text style={styles.text4}>Transaction</Text>
            </View>
          </View>
        </View>
  
        <View style={styles.container3}>
  
          <View style={{ flexDirection: "row",alignSelf: "center",justifyContent: "space-between",  marginTop: 20}}>
          <View style={{ width: "45%" }}>
              <ImageBackground
                style={styles.image12}
                source={require('../assets/Group149.png')}
              >
                <Text style={styles.text11}>USD</Text>
                <Text style={styles.text12}>$454,253,65.98</Text>
                <Image
                  style={styles.image16}
                  source={require('../assets/Group82.png')}
                />
              </ImageBackground>
  
            </View>
  
            <ImageBackground
              style={styles.image14}
              source={require('../assets/Group149.png')}
            >
              <Text style={styles.text20}>RUBLE</Text>
              <Text style={styles.text21}>0.00</Text>
              <Image
                style={styles.image17}
                source={require('../assets/rubel.png')}
              />
            </ImageBackground>
  
          </View>
  
          <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-between"}}>
            <View style={{ width: "45%" }}>
              <ImageBackground
                style={styles.image14}
                source={require('../assets/Group149.png')}
              >
                <Text style={styles.text22}>EURO</Text>
                <Text style={styles.text23}>0.00</Text>
                <Image
                  style={styles.image17}
                  source={require('../assets/Group92.png')}
                />
              </ImageBackground>
            </View>
            <ImageBackground
              style={styles.image15}
              source={require('../assets/Group149.png')}
            >
              <Text style={styles.text13}>REWARDS</Text>
              <Text style={styles.text14}>$1058.90</Text>
              <Image
                style={styles.image18}
                source={require('../assets/Group84.png')}
              />
            </ImageBackground>
          </View>
          <Text style={styles.text16}> Trending Index</Text>
          <View style={{ marginTop: 15, }}>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image
                    style={styles.itemImage}
                    source={require('../assets/Ellipse10.png')}
                  />
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemText2}>{item.value}</Text>
                  <Text style={styles.itemText3}>{item.growth}</Text>
                  <View style={styles.ViewContainer}>
                    <TouchableOpacity
                      onPress={() => { handleButtonPress('2') }}
                      style={styles.buttonContainer}
                    >
                      <ImageBackground
                        style={styles.image19}
                        source={require('../assets/Rectangle44.png')}
                      >
                        <Text style={styles.text17}>View</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
  
        <View style={styles.container4}>
          <Text style={styles.text9}>
            Refer a friend
          </Text>
          <Text style={styles.text18}>
            Earn something extra each month for every friend
            you bring to the platform.</Text>
          <View style={{ height: 46, marginHorizontal: 17, top: 10, backgroundColor: "rgba(238, 238, 238, 1)", borderRadius: 8, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", marginTop: 12, marginLeft: 15 }}>
              <Image
                style={styles.image2}
                source={require('../assets/Vector(4).png')}
              />
              <Text style={styles.text19}>6HQQP</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 12, marginRight: 15 }}>
            <TouchableOpacity
    onPress={() => {
      copyToClipboard()
      // handleButtonPress('2');
      // Clipboard.setString('6HQQP'); // Set the text to be copied to the clipboard
      // Clipboard.getString().then(text => setCopiedText(text)); // Store the copied text in state
    }}
    style={styles.buttonContainer}
  >
              <Image
                style={styles.image20}
                source={require('../assets/Vector(5).png')}
              />
              </TouchableOpacity>
  {copiedText === '6HQQP' && (
  <Text style={{ color: 'green' }}>Copied to clipboard!</Text>
)}

              <TouchableOpacity
                onPress={() => {
                  handleButtonPress('2')
                  Share.share({
                    message: '6HQQp',
                  });
                }}
                style={styles.buttonContainer}
              >
  
                <ImageBackground
                  style={styles.image2}
                  source={require('../assets/tabler-icon-share.png')}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 46, alignItems: 'center', marginHorizontal: 17, top: 20, justifyContent: "space-between", backgroundColor: "rgba(238, 238, 238, 1)", borderRadius: 8 }}>
            <View style={{ flexDirection: "row", marginTop: 12, marginRight: 15, marginHorizontal: 17, justifyContent: "space-between" }}>
              <Image style={styles.image20}
                source={require('../assets/Vector(6).png')}
              />
              <Text>https://clients.xpo.ru/referrer/6HQQP</Text>
              <Image
                style={styles.image21}
                source={require('../assets/Vector(7).png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => { handleButtonPress('2') }}
              style={styles.buttonContainer}
            >
              <View style={{ width: 130, marginTop: 30, height: 30, alignItems: 'center', backgroundColor: "white", borderRadius: 8, borderWidth: 1, borderColor: 'blue' }}>
                <Text style={{ color: 'blue', top: 5 }}>Discover More</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.container5}>
          <Text style={styles.text9}>
            News & Updates
          </Text>
          <Text style={styles.text18}>
            Stay up to date with the latest news and updates.</Text>

            <View style={{ marginTop: 15, }}>
            {/* <FlatList
              data={News}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
              
                <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                  <View>
                  <Image
                    style={styles.itemImage}
                    source={require('../assets/Group174.png')}
                  /></View>
                  <View style={{ justifyContent: 'center' ,top: 5, left:10  }}>
                  <Text style={{ fontSize: 16,fontWeight: 'bold', color: 'blue' }}>{item.name}</Text>
                  <Text>{item.date}</Text>
                  </View>
                </View>


              )}
            /> */}

            {
              News.map((item)=>{
                return(
                  <View key={item.id} style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                  <View>
                  <Image
                    style={styles.itemImage}
                    source={require('../assets/Group174.png')}
                  /></View>
                  <View style={{ justifyContent: 'center' ,top: 5, left:10  }}>
                  <Text style={{ fontSize: 16,fontWeight: 'bold', color: 'blue' }}>{item.name}</Text>
                  <Text>{item.date}</Text>
                  </View>
                </View>

                )
              })
            }
          </View>
          <TouchableOpacity
              onPress={() => { handleButtonPress('2') }}
              style={styles.buttonContainer}
            >
              <View style={{ width: 130, marginTop: 30, height: 30, alignItems: 'center', backgroundColor: "white", borderRadius: 8, borderWidth: 1, borderColor: 'blue', left: 110 }}>
                <Text style={{ color: 'blue', top: 5 }}>View All</Text>
              </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}  
const Settings = () => {
  return (
    <View style = {{backgroundColor: 'powderblue' }}>
      <Text style={styles.text15}>Settings Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    color: 'white',
  },
  text2: {
    height: 18,
    top: 10,
    color: 'white',
    marginLeft: 30,
    textAlign: 'center',
    fontSize: 12,
  },
  text3: {
    marginBottom: 25,
    height: 18,
    top: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text4: {
    color: 'white',
    fontSize: 11,
    textAlign:"center"
  },
  text5: {
    color: 'white',
    fontSize: 11
  },
  text6: {
    color: 'white',
    fontSize: 11
  },
  text7: {
    bottom: 60,
    left: 232,
    color: 'white',
    fontSize: 11
  },
  text9: {
     height: 18,
     color: 'blue',
     fontSize: 16,
     fontWeight: 'bold',
     textAlign:"center",
     top: 10,
  },
  text11: {
    marginBottom: 75,
    height: 18,
    top: 83,
    color: 'white',
    marginLeft: 56,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text12: {
    height: 18,
    top: 16,
    color: 'white',
    marginLeft: 3,
    textAlign: 'center',
    fontSize: 12,
  },
  text13: {
    marginBottom: 75,
    height: 18,
    top: 83,
    color: 'white',
    marginLeft: 33,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text14: {
    height: 18,
    top: 16,
    color: 'white',
    marginLeft: 2,
    textAlign: 'center',
    fontSize: 12,
  },
  text15: {
    marginBottom: 75,
    height: 18,
    top: 73,
    color: 'black',
    marginLeft: 56,
    fontSize: 15,
    fontWeight: 'bold',
  },
  text16: {
    height: 18,
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center"
  },
  text17: {
    marginLeft: 22,
    color: 'white',
    marginRight: 22,
    marginTop: 5,
    marginBottom: 5
  },
  text18: {    
    fontSize: 16,
    textAlign:"center",
    marginTop:15,
    marginHorizontal:5
  },
  text19: {
    marginLeft: 10
  },
  text20: {
    marginBottom: 75,
    height: 18,
    top: 83,
    color: 'white',
    marginLeft: 47,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text21: {
    height: 18,
    top: 16,
    color: 'white',
    marginLeft: 2,
    textAlign: 'center',
    fontSize: 12,
  },
  text22: {
    marginBottom: 75,
    height: 18,
    top: 83,
    color: 'white',
    marginLeft: 51,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text23: {
    height: 18,
    top: 16,
    color: 'white',
    marginLeft: 1,
    textAlign: 'center',
    fontSize: 12,
  },
  container2: {
    width: "100%",
    height: 250,
    backgroundColor: 'blue',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  container3: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginHorizontal:12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 12,
    marginTop: -50,
    height: 580
  },
  container4: {
    height: 250,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    marginHorizontal:12,
  },
  container5: {
    height: 600,
    top: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    marginHorizontal:12,
  },
  portfolioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop:15,
  },
  ViewContainer: {
    width: 176,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -12,
    bottom: 10,
    top: -7,
  },
  portfolioBox: {
    width: 176,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioBox2: {
    alignSelf: 'center',
    width: 176,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 12,
  },
  image2: {
    width: 20,
    height: 20
  },
  image3: {
    width: 20,
    height: 20,
  },
  image4: {
    width: 20,
    height: 20,
  },
  image5: {
    width: 20,
    height: 20,
    marginLeft: 15,
    right:20
  },
  image6: {
    position: 'absolute',
    width: 26,
    height: 26,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  image7: {
    width: 46,
    height: 46,
    alignSelf: 'center',
     },
  image8: {
    width: 46,
    height: 46,
    alignSelf: 'center',
  },
  image9: {
    width: 46,
    height: 46,
    alignSelf: 'center',
  },
  image10: {
    width: 46,
    height: 46,
    alignSelf: 'center',
  },
  image11: {
    width: 46,
    height: 46,
    alignSelf: 'center',
  },
  image12: {
    width: 152,
    height: 167,
  },
  image13: {
    width: 207,
    height: 205,
    alignSelf: 'center',
    marginBottom: 15
  },
  image14: {
    width: 152,
    height: 167,
  },
  image15: {
    width: 152,
    height: 167,
    alignSelf: 'center',
  },
  image16: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 50,
    top: 27
  },
  image17: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 50,
    top: 27
  },
  image18: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 50,
    top: 27
  },
  image19: {
    Width: 61,
    Height: 22,
    Top: 149,
    Left: 135,
    Radius: 4
  },
  image20: {
    marginRight: 15
  },
  image21: {
    marginLeft: 15
  },
  drawerButtonContainer: {
    right: -10
  },
  buttonContainer: {
    marginBottom: -2,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 30,
    width: 171,
    height: 180,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 12
  },
  itemText2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 12,
    color: 'green'
  },
  itemText3: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 12,
    color: 'black'
  },
  itemImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
    alignSelf: 'center',
    top: 12
  }
});

export default Dashboard;
