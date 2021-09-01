import { ACTION_TYPE } from "./actionTypes";
import { ShopCollection, ShopCollections } from "../../Models/model";
import {AnyAction} from "redux";
import {getCollectionsFromFirestore} from "../../firebase/firebase.utils";
import { COLLECTION_DATA } from "../../firebase/collections";
import {AppDispatch} from "../../redux/store";
export const fetchCollectionsStart = (): AnyAction => ({
	type: ACTION_TYPE.FETCH_SHOP_COLLECTION_START
});

export const fetchCollectionsSuccess = (collections: ShopCollections): AnyAction => ({
	type: ACTION_TYPE.FETCH_SHOP_COLLECTION_SUCCESS,
	payload: collections
});

export const fetchCollectionsFailure = (errorMessage: string): AnyAction => ({
	type: ACTION_TYPE.FETCH_SHOP_COLLECTION_FAILURE,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch:AppDispatch) : void => {
		dispatch(fetchCollectionsStart());
		if (process.env.NODE_ENV === 'development') {
			dispatch(fetchCollectionsSuccess(COLLECTION_DATA));
		} else {
			getCollectionsFromFirestore()
				.then(res => {
					dispatch(fetchCollectionsSuccess(res));
				}).catch((err) => {
					dispatch(fetchCollectionsFailure(err.message));
				});
		}
	}
};
export const updateCollections:(shopCategory: ShopCollection) => AnyAction = (data) => ({
		type: ACTION_TYPE.UPDATE_SHOP_COLLECTION,
		payload: data
});
