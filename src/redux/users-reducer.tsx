const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'


let initialState: UsersDataType = {
    users: [
        {
            id: 111,
            followed: false,
            name: 'Dima',
            status: 'im a boss',
            photos: {
                large: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small/ablack-man-avatar-character-isolated-icon-free-vector.jpg',
                small: ''
            },
            uniqueUrlName: '',
        },
        {
            id: 222,
            followed: true,
            name: 'Valya',
            status: 'im a boss',
            photos: {
                large: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
                small: ''
            },
            uniqueUrlName: '',
        },
        {
            id: 333,
            followed: false,
            name: 'Alina',
            status: 'im a boss',
            photos: {
                large: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                small: ''
            },
            uniqueUrlName: '',
        },
    ]
}

export type UsersDataType = {
    users: UsersType[]
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


export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

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
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UN_FOLLOW, userId} as const)
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS, users} as const)