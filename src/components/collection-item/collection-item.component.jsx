import React from 'react';
import './collection-item.styles.scss';
const CollectionItem = ( {item} ) => {
    return  <div className="collection-item">
                <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div> 
                <div className="footer">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">${item.price}</div>
                </div>
            </div>
}
export default CollectionItem;