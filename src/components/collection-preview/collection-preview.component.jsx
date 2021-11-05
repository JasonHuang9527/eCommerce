import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';
const CollectionPreview = ( {collection} )=> {
    //collection.filter( ()=> )
    console.log('debug',collection);
    let items = collection.items.slice(0,4);
    return  <div className="collection-preview" >
                <h2 className="title">{collection.title}</h2>
                {
                    items.map( (item,idx) => <CollectionItem key={idx} item={item}/> )
                }
            </div>
}
export default CollectionPreview;