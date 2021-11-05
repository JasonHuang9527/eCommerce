import React from 'react';
import './directory.styles.scss';
import {Menu} from '../menu-item/menu-item.component.jsx';
import SECTIONS_DATA from '../../data/sections.data.js'; 
export class Dir extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections: SECTIONS_DATA
        }
    }
    render(){
        return  <div className='directory-menu'>
            {this.state.sections.map( section =>  <Menu key={section.id} section={section}/>    )}
        </div>
    }
}

export default Dir
