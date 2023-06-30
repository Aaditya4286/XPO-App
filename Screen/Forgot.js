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
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack'

function Forgot({ navigation }) {
  const [email, setEmail] = useState('email');
  const onPress = () => {
    console.log(email, 'email');
  };
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={require('../assets/44988941.png')} />
        <Text style={styles.head}>RESET PASSWORD </Text>
        <Text style={styles.loginText}>
          Enter your email address to reset your password. You will receive an
          email with instructions.
        </Text>
        <Text style={styles.address}>Enter your Email Address :</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="info@xpo.ru"
        />
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttontext}>Send Password Link</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.password}>Remember your Password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text1}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function DetailsScreen() {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const onPress = () => {
    console.log(email, 'email');
    console.log(password, 'password');
  };
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/login_new-011(1).png')}
        />

        <Text style={styles.head}>WELCOME TO XPO</Text>
        <Text style={styles.loginText}>Login to continue</Text>

        <Text style={styles.text}>Email id</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="info@expo.ru"
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={SetPassword}
          placeholder="Enter your password"
          secureTextEntry="true"
        />
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttontext}>Login Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button2}>
          <Text style={styles.buttontext}>Create An Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  image: {
    height: 290,
    width: 309,
    alignSelf: 'center',
    marginTop: 58,
    marginLeft: 42,
  },
  head: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 38,
  },
  loginText: {
    textAlign: 'center',
    color: '#0046B3',
    marginBottom: 1,
    marginLeft: 1,
    padding: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#0E3AAA',
    padding: 10,
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttontext: {
    textAlign: 'center',
    color: 'white',
  },
  password: {
    textAlign: 'center',
    marginBottom: 10,
    left: 120,
    top: 423,
  },
  address: {
    marginLeft: 12,
    marginTop: 5,
  },
  text1: {
    color: '#0046B3',
    textDecorationLine: 'underline',
    justifyContent: 'center',
    marginRight: 170
  },
  text: {
    marginLeft: 12,
  },
});
export default Forgot;
