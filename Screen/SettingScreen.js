import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SettingScreen = () => {
  return (
    <View style = {{backgroundColor: 'powderblue' }}>
      <Text style={styles.text15}>Settings Screen</Text>
    </View>
  )
}
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

export default SettingScreen