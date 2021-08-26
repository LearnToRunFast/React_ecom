import {ACTION_TYPE} from "../action/actionTypes";
import { AnyAction } from 'redux'
import {DirecotryModel} from '../../Models/model';
const INIT_STATE:DirecotryModel = {
	sections: [
		{
			title: 'hats',
			// imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			imageUrl: 'images/hats.png', // local file in public/images/
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'sneakers',
			// imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			imageUrl: 'images/sneakers.png', // local file in public/images/
			id: 2,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'jackets',
			// imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			imageUrl: 'images/jackets.png', // local file in public/images/
			id: 3,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'womens',
			// imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			imageUrl: 'images/womens.png', // local file in public/images/
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			// imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			imageUrl: 'images/men.png', // local file in public/images/
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
		}
	]
}


export const directoryReducer:(state: DirecotryModel,action: AnyAction) => DirecotryModel = (state= INIT_STATE, action:AnyAction) => {
	switch(action.type) {
		case ACTION_TYPE.ADD_DIRECTORY:
			return {
				...state,
				sections: [...state.sections, action.payload]
			}
		default:
			return state
	}
}


