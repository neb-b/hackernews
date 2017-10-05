import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import {
  loadComments,
  refreshThread,
  loadReplies,
  toggleComment
} from "../redux/action-creators/thread";
import Thread from "../components/thread";

class ThreadView extends Component {
  componentDidMount() {
    const { comments, story: { id, kids }, loadComments } = this.props;
    if (!comments.length || comments[0].parent !== id) {
      loadComments(kids);
    }
  }

  render() {
    return <Thread {...this.props} />;
  }
}

const mapStateToProps = ({ thread }) => ({ ...thread });
export default connect(mapStateToProps, {
  loadComments,
  refreshThread,
  loadReplies,
  toggleComment
})(ThreadView);
