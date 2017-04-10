import React from 'react'
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  View
} from 'react-native'


const List = ({data, renderItem}) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={renderItem} />
  )
}

export default List
