import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
  state ={
    posts: [{
      id: Math.random(),
      nickname: 'Jurema da Silva',
      email: 'j@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'John Bravo',
        comment: 'Sucesso full'
      }, {
        nickname: 'Tereza',
        comment: 'É nós'
      }]
    }, {
      id: Math.random(),
      nickname: 'Fulano de tal',
      email: 'f@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: [],
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default Feed