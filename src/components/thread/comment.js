import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import moment from 'moment'
import Button from '../generic/button'
import LoadReplies from './load-replies'
import { fromNow } from '../../helpers/story-helpers'
import Collapsible from 'react-native-collapsible';

class Comment extends Component  {
  constructor (props) {
    super(props)

    this.state = {
      expanded: true
     }
  }

  _toggleComment () {
    this.setState({
        expanded : !this.state.expanded
    })
  }

  render () {
    const {
      text,
      by,
      id,
      time,
      deleted,
      kids,
      showComment,
      loadComments,
      fetchingReplies,
      fetchingRepliesFor,
      loadReplies,
      commentChain,
      reply,
      openSafari
    } = this.props
    return (
      <View>
        {!deleted && (
            <Button onPress={this._toggleComment.bind(this)} underlayColor='#f1f1f1'>
              <View style={[!reply && styles.comment, reply && styles.reply]}>
              <Collapsible collapsed={!this.state.expanded}>

                <View style={styles.commentBody}>
                  <HTMLView
                    value={text}
                    onLinkPress={(url) => openSafari(url)}
                    stylesheet={htmlStyles}
                  />

                  <View style={styles.paddingTop}>
                    <Text style={[styles.commentInfo]}>
                      {`${by} `}
                      {moment(time * 1000).fromNow()}
                    </Text>
                  </View>

                  {kids && kids.length && typeof kids[0] === 'number' && (
                    <LoadReplies
                      isLoading={fetchingRepliesFor === id}
                      loadReplies={loadReplies}
                      kids={kids}
                      commentChain={commentChain}
                      id={id} />
                  )}

                  {kids && kids.length && typeof kids[0] === 'object' && (
                    kids.map((comment) => (
                      <Comment
                        key={comment.id}
                        reply
                        {...comment}
                        loadReplies={loadReplies}
                        fetchingRepliesFor={fetchingRepliesFor} />
                    ))
                  )}
                </View>
            </Collapsible>

              {!this.state.expanded && (
                <Text style={styles.commentInfo}>
                  {`${by} `}
                  {moment(time * 1000).fromNow()}
                </Text>
              )}

          </View>
        </Button>
        )}
        { deleted && (
          <View style={[!reply && styles.comment, reply && styles.reply]}>
            <Text>deleted</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  comment: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  commentBody: {
    // flex: 1
  },
  reply: {
    marginTop: 20,
    marginLeft: 5,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#d5d5d5',
  },
  commentInfo: {
    color: '#999999'
  },
  paddingTop: {
    paddingTop: 5
  }
})

const htmlStyles = StyleSheet.create({

})

export default Comment
