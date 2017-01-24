import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'
import { Col, Grid } from "react-native-easy-grid";


const Nav = ({ title, navigator, viewIndex, settings, outside  }) => {
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
          <Text style={[styles.text, outside && styles.title]}>{title}</Text>
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
    backgroundColor: '#125580'
  },
  text: {
    color: '#f2f2f2',
    fontSize: 22
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5
  }
})

export default Nav
