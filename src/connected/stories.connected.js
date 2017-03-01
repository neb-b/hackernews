import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View
} from 'react-native'
import { loadStories, refreshStories } from '../redux/action-creators/stories'
import Stories from '../components/stories'
import Error from '../components/global/error'
import SafariView from 'react-native-safari-view'

class StoriesView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { filterSelected } = this.props
    this.props.loadStories(filterSelected.endpoint)
  }

  _openSafari(url) {
    SafariView.isAvailable()
      .then(SafariView.show({ url }))
      .catch((err) => console.log('err', err))
  }

  render() {
    const { error, filterSelected, loadStories, settings } = this.props
    const isDark = settings[0].active //darkmode
    return (
      <View>
        {error && <Error refresh={() => loadStories(filterSelected.endpoint)}/>}
        <Stories {...this.props} openSafari={this._openSafari} isDark={isDark}/>
      </View>
    )
  }
}

const mapStateToProps = (s) => {
  return {
    ...s.stories,
    filterSelected: s.statusBar.filterSelected,
    settings: s.settings.settings
  }
}

export default connect(mapStateToProps, { loadStories, refreshStories })(StoriesView)
