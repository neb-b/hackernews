import React from 'react'
import {
  FlatList,
  RefreshControl,
  View
} from 'react-native'

const List = ({items, renderItem, header: Header}) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        data={items}
      />
  </View>
  )
}

export default List
