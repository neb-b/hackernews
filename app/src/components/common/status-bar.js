import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'
import { Col, Grid } from "react-native-easy-grid";


const Nav = ({ title, navigator, viewIndex, settings  }) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle='light-content' />
      <Grid>
        <Col>
          {
            viewIndex !== 0 && (
              <Text
                style={styles.text}
                onPress={() => navigator.pop()}>
                Back
              </Text>
            )
          }
        </Col>
        <Col>
          <Text style={[styles.text, styles.center]}>{title}</Text>
        </Col>
        <Col>
          {
            settings && (
              <Text>Settings</Text>
            )
          }
        </Col>
      </Grid>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    height: 64,
    paddingTop: 25,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: '#0C6A5A'
  },
  text: {
    color: '#f2f2f2',
    fontSize: 22
  },
  center: {
    textAlign: 'center'
  }
})

export default Nav
