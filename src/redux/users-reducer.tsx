import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: UsersDataType = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
            followed: false,
            fullName: 'Dima',
            status: 'im a boss',
            location: {city: 'Volgograd', country: 'Russia'}
        },
        {
            id: v1(),
            photoUrl: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
            followed: true,
            fullName: 'Valya',
            status: 'im a boss',
            location: {city: 'Ukraine', country: 'Kiev'}
        },
        {
            id: v1(),
            photoUrl: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000',
            followed: false,
            fullName: 'Alina',
            status: 'im a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ]
}

export type UsersDataType = {
    users: UsersType[]
}
export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type AllTypesUsersReducer = FollowActionType
    | UnFollowActionType
    | SetUsersActionType

export type FollowActionType = ReturnType<typeof followAC>
export type UnFollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const UsersReducer = (state = initialState, action: AllTypesUsersReducer): UsersDataType => {
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

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: string) => ({type: UN_FOLLOW, userId} as const)
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS, users} as const)