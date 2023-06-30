import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// import Navigation from '../Navigation';

function DetailsScreen() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [referralcode, setReferralcode] = useState('');
    const [password, setPassword] = useState('');
    const onPress = () => {
      console.log(firstname, 'firstname');
      console.log(lastname, 'lastname');
      console.log(email, 'email');
      console.log(referralcode, 'referralcode');
      console.log(password, 'password');
    };
    return (
      <ScrollView>
        <View>
          <Image style={styles.image1} source={require('../assets/graph(1).png')} />
  
          <Text style={styles.head}>SIGN UP </Text>
          <Text style={styles.loginText}>Create your new account with XPO</Text>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstname}
            onChangeText={setFirstName}
            placeholder="Enter First Name"
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastname}
            onChangeText={setLastName}
            placeholder="Enter Last Name"
          />
          <Text style={styles.text}>Email id</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
          />
          <Text style={styles.text}>Referral Code</Text>
          <TextInput
            style={styles.input}
            value={referralcode}
            onChangeText={setReferralcode}
            placeholder="Your Referral Code"
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={onPress} style={styles.button1}>
            <Text style={styles.buttontext}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    image: {
      width: 270,
      height: 300,
      alignSelf: 'center',
    },
    image1: {
      height: 100,
      width: 270,
      alignSelf: 'center',
    },
    text: {
      marginLeft: 12,
    },
    head: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 18,
    },
    loginText: {
      textAlign: 'center',
      color: '#0046B3',
    },
    button: {
      backgroundColor: '#0E3AAA',
      padding: 10,
      marginHorizontal: 12,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      borderColor: 'red',
    },
    buttontext: {
      textAlign: 'center',
      color: 'white',
    },
    button2: {
      backgroundColor: '#0E3AAA',
      padding: 10,
      marginHorizontal: 12,
      marginTop: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },
    text1: {
      marginLeft: 12,
      textAlign: 'center',
      fontWeight: '400',
      fontSize: 15,
      marginTop: 10,
      textDecorationLine: 'underline',
    },
    button1: {
      backgroundColor: '#0E3AAA',
      padding: 10,
      marginHorizontal: 12,
      marginTop: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },
  });
  
  export default DetailsScreen;
  