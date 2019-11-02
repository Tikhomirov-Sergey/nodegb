import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'

class Gallery extends Component {

    render() {
        const { items, defaultPhoto } = this.props
        return <ImageGallery items={items && items.length ? items : [{ original: defaultPhoto }]} lazyLoad={true} showThumbnails={false} showPlayButton={false} />
    }
}

export default Gallery

Gallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            original: PropTypes.string.isRequired,
            thumbnail: PropTypes.string
        })),
    defaultPhoto: PropTypes.string
}