import {ReduxStateModel,DirecotryModel } from '../../Models/model';
import {createSelector} from 'reselect';


const selector:(state: ReduxStateModel) => DirecotryModel = (state: ReduxStateModel) => state.directory;


export const getDirectories = createSelector(selector, (directory) => directory.sections);
