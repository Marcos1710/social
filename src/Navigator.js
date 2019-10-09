import React, { Component } from 'react'
import { 
  createAppContainer,
  createSwitchNavigator
 } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

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

const Navigator = createStackNavigator({
  Feed: {
    name: 'Feed',
    screen: LoginOrProfileRouter,
    navigationOptions: {
      header: null,
      title: 'Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='home' size={30} color={tintColor} />
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: AddPhoto,
    navigationOptions: {
      header: null,
      title: 'Add Picture',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='camera' size={30} color={tintColor} />
    }
  },
  Profile: {
    name: 'Profile',
    screen: Profile,
    navigationOptions: {
      header: null,
      title: 'Profile',
      tabBarIcon: ({ tintColor: color }) =>
        <Icon name='user' size={30} color={color} />
    }
  }   
})
  


export default createAppContainer(Navigator)

// https://www.youtube.com/watch?v=XykhG0dgYIc
