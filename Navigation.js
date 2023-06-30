import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Screen/Dashboard'
import Login from './Screen/Login'
import DetailsScreen from './Screen/DetailsScreen';
import Forgot from './Screen/Forgot';
import SettingScreen from './Screen/SettingScreen';


const Navigation = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyTabs=()=>{
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Dashboard" component={Drawers}   
      options={{
        tabBarIcon:()=>{
          return (<Image source={require('./assets/Home.png')}/>)
        }
      }
      }
      
    />
      <Tab.Screen name="Settings" component={SettingScreen} 
      options={{
        tabBarIcon:()=>{
          return (<Image source={require('./assets/Settings.png')}/>)
        }
      
      }
      } />

    </Tab.Navigator>
  );
}

  const Drawers=()=>{
    return(
      
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" 
        screenOptions={{headerShown:false}}
        component={Dashboard} />
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={DetailsScreen} />
        {/* <Stack.Screen name="SignUp" component={Sign} /> */}
         <Stack.Screen name="Forgot" component={Forgot} /> 
         <Stack.Screen name="Dashboard" component={Drawers} /> 
         <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>

  )


};

export default Navigation