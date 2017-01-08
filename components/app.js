import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import async from 'async'
const ROOT_URL = 'https://hacker-news.firebaseio.com/v0'

class App extends Component {
  constructor() {
    super()

    state = {
      error: false,
      stories: []
    }

    this.getStories = this.getStories.bind(this)
  }

  componentDidMount() {
    fetch(`${ROOT_URL}/beststories.json`)
      .then((res) => res.json())
      .then((stories) => {
        console.log('STORIES', stories);
        this.getStories(stories)
          .then((res) => {
            console.log('res', res);
          })
          .catch((err) => this.setState({err}))
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  getStories(ids) {
    return Promise.all(ids.map((id) => fetch(`${ROOT_URL}/item/${id}.json`)))
      .then((responses) => (
        Promise.all(responses.map(res => res.text()))
      ))
    .then((values) => {
      console.log('worked?', values);
    })
    .catch((err) => this.setState({err}))
}

  render() {
    console.log('STATE', this.state);
    return (
      <View><Text>App</Text></View>
    )
  }
}

export default App
