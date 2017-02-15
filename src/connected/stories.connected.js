import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View
} from 'react-native'
import { loadStories, refreshStories } from '../redux/action-creators/stories'
import Stories from '../components/stories'
import Error from '../components/global/error'

class StoriesView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { filterSelected } = this.props
    this.props.loadStories(filterSelected.endpoint)
  }

  render() {
    const { error, filterSelected, loadStories } = this.props
    console.log('stories', this.props);
    return (
      <View>
        {error && <Error refresh={() => {
          console.log('loading', filterSelected)
          loadStories(filterSelected.endpoint)
        }}/>
    }
        <Stories {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = (s) => {
  return {
    ...s.stories,
    filterSelected: s.statusBar.filterSelected
  }
}

export default connect(mapStateToProps, { loadStories, refreshStories })(StoriesView)
