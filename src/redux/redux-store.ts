import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SiteBarReducer} from "./siteBar-reducer";
import {UsersReducer} from "./users-reducer";

let reducers = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer,
    siteBarReducer: SiteBarReducer,
    usersReducer: UsersReducer,
})

export type ReducersRootType = ReturnType<typeof reducers>

export let store = createStore(reducers)