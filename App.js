import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Pressable, Text, View } from 'react-native';
import {  RootNavigator } from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import {MapScreen, OrderList, ReviewScreen, HomeScreen, LoginScreen, RegisterScreen, RestaurantScreen } from './src/screens';

import FavouriteOrders from './src/screens/FavouriteOrders';
import LikedRestaurantsScreen from './src/screens/LikedRestaurantsScreen';

import { Entypo } from '@expo/vector-icons';
import UserProfile from './src/screens/UserProfile';

const Stack = createNativeStackNavigator()


export default function App() {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('./assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={RootNavigator}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="SignUp" component={RegisterScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} 
            options={{
              header:({navigation, route}) => {
                // console.log(route, navigation)
                return(
                    <View style={{
                    backgroundColor:"#1c1c27",
                    borderBottomWidth:0,
                    paddingHorizontal:20,
                    paddingTop:20,
                    flexDirection:"row",
                    justifyContent:"flex-start",
                    alignItems:"center",
                    gap:6,
                    }}>
                        <Pressable
                        onPress={() => navigation.goBack()}
                        ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                        <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.params.item.restaurant_name}</Text>
                    </View>
                )
              }
            }} 
          />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="OrderHistoryScreen" component={OrderList} 
          options={{
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                  </View>
              )
            }
          }} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen}
          options={{
            headerShown: true,
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                  </View>
              )
            }
          }}
           />
           <Stack.Screen name="FavouriteOrders" component={FavouriteOrders} 
            options={{
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>{route.name}</Text>
                  </View>
              )
            }
            }} 
           />
           <Stack.Screen name="LikedRestaurantsScreen" component={LikedRestaurantsScreen}
            options={{
            header:({navigation, route}) => {
              // console.log(route, navigation)
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>Liked</Text>
                  </View>
              )
            }
            }} 
           />
          <Stack.Screen name="UserProfile" component={UserProfile}
          options={{
            headerShown: true,
            header:({navigation, route}) => {
              return(
                  <View style={{
                  backgroundColor:"#1c1c27",
                  borderBottomWidth:0,
                  paddingHorizontal:20,
                  paddingTop:20,
                  flexDirection:"row",
                  justifyContent:"flex-start",
                  alignItems:"center",
                  gap:6,
                  }}>
                      <Pressable
                      onPress={() => navigation.goBack()}
                      ><Entypo name="chevron-left" size={24} color="#e5e1d8" /></Pressable>
                      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:18,color:"#e5e1d8", paddingTop:5}}>Profile</Text>
                  </View>
              )
            }
          }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}



