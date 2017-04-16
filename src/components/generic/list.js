import React from 'react'
import {
  FlatList,
  RefreshControl,
  View,
  StyleSheet
} from 'react-native'

const List = ({items, renderItem, refresh, refreshing, header: Header}) => {
  return (
    <View style={styles.list}>
      <FlatList
        onRefresh={refresh}
        refreshing={refreshing}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        data={items}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  list: {
    // flex: 1
  }
})

export default List
