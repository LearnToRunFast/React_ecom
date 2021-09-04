import { useHistory,useRouteMatch } from 'react-router-dom';
import './Menu-item.styles.scss'

interface ImageProps {
	title: string,
	imageUrl: string
	key: number,
	linkUrl: string,
	size?: string
}
const MenuItem:React.FC<ImageProps> = (props:ImageProps) => {
	const { title, imageUrl, size, linkUrl } = props;
	const history = useHistory();
	const match = useRouteMatch();
	return (
		<div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div className={"background-image"}
				style={{backgroundImage: `url(${imageUrl})`}}
			/>
			<div className="content">
				<h1 className="title">
					{title.toUpperCase()}
				</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	)
	
}

export default MenuItem;