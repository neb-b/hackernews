import React from 'react'
import {
  ListView,
  RefreshControl,
  StyleSheet,
  View
} from 'react-native'

const List = ({listItems, renderRow}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  return (
    <ListView
      style={styles.listView}
      dataSource={ds.cloneWithRows(listItems)}
      renderRow={renderRow}>
    </ListView>
  )
}

const styles = StyleSheet.create({

})

export default List
