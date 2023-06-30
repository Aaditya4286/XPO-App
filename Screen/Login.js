import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
// import Toast from 'react-native-toast-message';
import {createStackNavigator}from '@react-navigation/stack'
// import Toast from 'react-native-simple-toast';


const Stack = createStackNavigator();
function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [securePassword, SetsecurePassword] = useState(true);
  // const onPress = () => {
  //   if (!email || !password) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: 'Please enter both email and password',
  //     });
  //     return;
  //   }
  //   console.log(email, 'email');
  //   console.log(password, 'password');
  // };

  const handleLOgin=()=>{
    if(validateemail && password.length>5){
      setEmail('')
      SetPassword('')
      return navigation.navigate('MyTabs')
    }
    if(!email){
      return Alert.alert("Please Enter the E-mail")
    }
    if(!validateemail()){
      return Alert.alert('please Enter Proper E-mail')
    }
    if(!password){
      return Alert.alert("Please Enter Password")
    }
    if(!password.length<6){
      return Alert.alert("Password must be of 6 Characters")
    }
    
  }

  const validateemail=()=>{
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email))
    {
    return true
    }    
    return false
    }
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
      <View style={{ flex:1, flexDirection:"row", justifyContent:"center"}}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text)=>setEmail(text)}
        placeholder="info@expo.ru"
        keyboardType='email-address'
        />

        <Image
        style={styles.imgBox}
        source={require('../assets/mail_icon.png')}
      />

      </View>
      
      <Text style={styles.text}>Password</Text>
      <View style={{ flex:1, flexDirection:"row", justifyContent:"center"}}> 
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(e)=>SetPassword(e)}
          placeholder="Enter your password"
          secureTextEntry={securePassword}
          returnKeyType='done'
          onEndEditing={handleLOgin}
        />
        <TouchableOpacity style={{
            right: '45%' ,
            top: 10
          }}
        onPress={()=>SetsecurePassword(!securePassword)}
        >
        <Image
          style={{
            position:"absolute",
            alignSelf:"center", 
            height:"66%",
            resizeMode: 'contain' 
          }}
          source={securePassword ?require('../assets/Pwd_Button(1).png') :require('../assets/Pwd_Button.png')}
        />
        </TouchableOpacity>
        </View>

      <TouchableOpacity onPress={handleLOgin} style={styles.button}>
        <Text style={styles.buttontext}>Login Now</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.text2}>Forgot Password</Text>
    </TouchableOpacity> 
      <Text style={styles.text1}>OR</Text>
      <Text style={styles.text4}>Create An Account :</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.button2}>
        <Text style={styles.buttontext}>Sign Up</Text>
      </TouchableOpacity>           
    </View>
    {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:"90%",
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
  image2: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    left: 165,
    bottom: 52
  },
  text: {
    marginLeft: 20,
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
    marginTop:10
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
  text2: {
    marginLeft: 250,
    fontWeight: '400',
    fontSize: 15,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  text3: {
    marginLeft: 12,
    fontWeight: '400',
    fontSize: 15,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  text4: {
    marginLeft: 14,
    fontWeight: '400',
    fontSize: 15,
    marginTop: 10,
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
  imgBox:{
     position:"absolute",
     alignSelf:"center", 
     left:"84%",
     height:"66%",
     resizeMode: 'contain'
    }
});

export default Login;
