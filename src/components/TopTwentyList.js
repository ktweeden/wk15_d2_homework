import React, {Component} from 'react'

const TopTwentyList = ({topTwenty}) => {
  const songNodes = topTwenty.map(song => {
    return <li>{song["im:name"].label} by {song["im:artist"].label}</li>
  })

  return (
    <ol>
      {songNodes}
    </ol>
  )
}

export default TopTwentyList
