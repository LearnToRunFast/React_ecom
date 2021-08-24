
import {ReduxStateModel} from "../../Models/Redux-state.model";
import {createSelector} from 'reselect';



const selector = (state: ReduxStateModel) => state.user;

export const getUser = createSelector(selector, (user) => user?.user);