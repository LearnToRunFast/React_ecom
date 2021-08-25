
import {ReduxStateModel, UserModel} from "../../Models/model";
import {createSelector} from 'reselect';

const selector:(state:ReduxStateModel) => UserModel = (state: ReduxStateModel) => state.user;

export const getUser = createSelector(selector, (user) => user?.user);