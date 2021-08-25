import {ReduxStateModel, ShopCategoryModel } from '../../Models/model';
import {createSelector} from 'reselect';


const selector:(state: ReduxStateModel) => ShopCategoryModel = (state: ReduxStateModel) => state.shop;

export const getCategories = createSelector(selector, (shop) => shop.categories);
