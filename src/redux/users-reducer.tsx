const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState: UsersDataType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
}

export type UsersDataType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string
    photos: {
        large: string
        small: string
    }
}

export type AllTypesUsersReducer = FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageAC
    | SetTotalUsersCount
    | ToggleIsFetchingAC


export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>
export type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAC>

export const UsersReducer = (state = initialState, action: AllTypesUsersReducer) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(e => e.id === action.userId
                    ? {...e, followed: true}
                    : e)
            }
        }
        case "UN_FOLLOW": {
            return {
                ...state,
                users: state.users.map(e => e.id === action.userId
                    ? {...e, followed: false}
                    : e)
            }
        }
        case "SET_USERS": {
            return {
                ...state, users: action.users
            }
        }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUserCount: action.currentTotalCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UN_FOLLOW, userId} as const)
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (currentTotalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    currentTotalCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)