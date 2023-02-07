import {v1} from "uuid";

export type NavigationDataType = {
    nameFriend: NameFriendType[]
}
export type NameFriendType = {
    id: string
    name: string
}

let initialState: NavigationDataType = {
    nameFriend: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Valya'},
        {id: v1(), name: 'Alina'},
    ]
}


export const SiteBarReducer = (state = initialState, action: any) => {
    return state
}