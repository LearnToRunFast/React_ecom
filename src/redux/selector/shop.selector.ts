import {ReduxStateModel, ShopCollectionModel } from '../../Models/model';
import {createSelector} from 'reselect';
import {memoize} from 'lodash';
  
const shopSelector :(state: ReduxStateModel) => ShopCollectionModel = (state: ReduxStateModel) => state.shop;

export const getCollections = createSelector(shopSelector, (shop) => (shop.collections));

export const getCollectionsForPreview = createSelector(
	getCollections, 
	(collections) => 
		(collections ? Object.keys(collections).map(key => collections[key]) : []));


export const getCollection = memoize((name:string) => {
	return createSelector(getCollections, (collections) => {
		return collections ? collections[name] : null;
	});
});

export const isFetchingCollections = createSelector(shopSelector, (shop) => (shop.isFetchingCollections));

export const isLoadedCollections = createSelector(shopSelector, (shop) => (!!shop.collections));