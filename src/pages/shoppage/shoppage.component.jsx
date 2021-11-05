import React from 'react';
import SHOP_DATA from '../../data/shop.data.js';
import './shoppage.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
class Shoppage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
        console.log(SHOP_DATA)
    }
    render(){
        return <div className='shoppage'>
                <h1>Collections</h1>
                {
                    this.state.collections.map( (collection,idx) =>  <CollectionPreview key={idx} collection={collection}/> )
                }
        </div>
    }

}
export default Shoppage;