import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createStackNavigator } from 'react-navigation-stack'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'


const AuthOrRouter = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      title: 'Login',
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
      title: 'Register',
    }
  }
})

const LoginOrProfileRouter = createSwitchNavigator({
  Profile: Profile,
  Auth: AuthOrRouter
  }, {
    initialRouteName: 'Profile'
})

const myTabNavigator = createBottomTabNavigator(
  {
    Home: Feed,
    AddPhoto: AddPhoto,
    Profile: LoginOrProfileRouter
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ /* focused, horizontal, */ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome5;
        let iconName;

        if (routeName  === 'Home') {
          iconName = 'home'
        } else if (routeName === 'AddPhoto') {
          iconName = 'camera'
        } else if (routeName === 'Profile') {
          iconName = 'user-alt'
        }

        return <IconComponent name={iconName}
          size={23}
          color={tintColor}
          />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#34495e',
      inactiveTintColor: '#bdc3c7',
      style: {
        backgroundColor: 'ecf0f1'
      },
      showLabel: false // não aparece o nome em baixo do icone 
    }
  }
)

export default createAppContainer(myTabNavigator)

// https://www.youtube.com/watch?v=XykhG0dgYIc e sempre ver as dependências que o react-navigations pede