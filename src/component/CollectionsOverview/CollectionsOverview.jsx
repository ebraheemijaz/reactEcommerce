import React from 'react'
import { connect } from 'react-redux'

import CollectionPreview from '../CollectionPreview/CollectionPreview'

import './collections.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    collections: Object.keys(state.shop.collections).map(
        (key) => state.shop.collections[key]
    ),
})

export default connect(mapStateToProps)(CollectionsOverview)
