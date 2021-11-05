import React from 'react';
import './menu-item.styles.scss';

export const Menu = (props) => {
    //{title, imageUrl, size, id, linkUrl} = props.section
    return  <div className={`${props.section.size} menu-item`} >
                <div className='background-image' 
                     style={{ backgroundImage: `url(${props.section.imageUrl})` }}>
                </div>
                <div className='content'>
                    <div className='title'>
                        {props.section.title.toUpperCase()}
                    </div>
                    <div className='subtitle'>
                        SHOP NOW
                    </div>
                </div>
            </div>;
}