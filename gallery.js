import React from 'react'

class Gallery extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
    }
  }

  render() {
    const { index } = this.state
    const { photos } = this.props
    const { texts } = this.props

    return (
      <div>
        <img src={photos[index]} width="200" height="140" />
        <p> {texts[index]} </p>

        <button
          onClick={() => {
            this.setState({ index: (index + 1) % photos.length })
          }}
        >
          Next
        </button>
      </div>
    )
  }
}

export default Gallery
