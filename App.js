import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana',
      comment: 'Show'
    },
    {
      nickname: 'Gustavo',
      comment: 'Show papai!'
    }]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    )
  }
}


export default App;
