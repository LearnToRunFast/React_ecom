import { withRouter, RouteComponentProps } from 'react-router-dom';
import './Menu-item.styles.scss'

interface ImageProps {
	title: string,
	imageUrl: string
	key: number,
	linkUrl: string,
	size?: string
}
const MenuItem:React.FC<ImageProps & RouteComponentProps> = (props:ImageProps & RouteComponentProps) => {
	const { title, imageUrl, size,history, linkUrl, match } = props;
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

export default withRouter(MenuItem);