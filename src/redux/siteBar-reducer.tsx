import {AllActionType, NavigationDataType} from "./store";
import {v1} from "uuid";

let initialState: NavigationDataType = {
    nameFriend: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Valya'},
        {id: v1(), name: 'Alina'},
    ]
}


export const SiteBarReducer = (state = initialState, action: AllActionType) => {
    return state
}