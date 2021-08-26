import {ReduxStateModel, ShopCollectionModel } from '../../Models/model';
import {createSelector} from 'reselect';
import {memoize} from 'lodash';

  
const selector:(state: ReduxStateModel) => ShopCollectionModel = (state: ReduxStateModel) => state.shop;

export const getCollections = createSelector(selector, (shop) => shop.collections);

export const getCollection = memoize((name:string) => {
	return createSelector(getCollections, (collections) => {
		return collections[name];
	});
});