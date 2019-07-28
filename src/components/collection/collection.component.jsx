import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionItem } from '../collection-item/collection-item.component';
import { CollectionContainer, CollectionItems, CollectionTitle } from './collection.styles';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state)
});


export const Collection = connect(
  mapStateToProps
)(
  ({ collection: { title, items } }) => (
    <CollectionContainer>
      <CollectionTitle as='h2'>{title}</CollectionTitle>
      <CollectionItems>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItems>
    </CollectionContainer>
  ));