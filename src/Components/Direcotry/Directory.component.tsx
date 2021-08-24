import  { Component } from 'react'
import './Directory.styles.scss'
import MenuItem from '../Menu-item/Menu-item.component'
import SECTIONS_DATA from './sections.data';


export default class Directory extends Component {
    state = {
        sections: SECTIONS_DATA
    };
    render():React.ReactNode {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...imageProps}) => (
                        <MenuItem key={id} {...imageProps} />
                    )) 
                }
            </div>
        )
    }
}
