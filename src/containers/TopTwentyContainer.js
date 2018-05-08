import React, {Component} from 'react'
import TopTwentyList from '../components/TopTwentyList'
import Request from '../helpers/request'


class TopTwentyContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topTwenty: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const songRequest = new Request(url)
    songRequest.get((response) => {
      console.log(response.feed.entry);
      this.setState({topTwenty:response.feed.entry})
    })
  }

  render() {
    return (
      <TopTwentyList topTwenty={this.state.topTwenty}/>
    )
  }
}

export default TopTwentyContainer
