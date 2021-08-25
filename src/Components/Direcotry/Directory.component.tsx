import './Directory.styles.scss'
import MenuItem from '../Menu-item/Menu-item.component'
import { getDirectories } from '../../redux/selector';
import {useSelector} from 'react-redux';

const Directory:React.FC = () => {
    const directories = useSelector(getDirectories);
    return (
        <div className="directory-menu">
            {
                directories.map(({id, ...imageProps}) => (
                    <MenuItem key={id} {...imageProps} />
                )) 
            }
        </div>
    )
}
export default Directory;
