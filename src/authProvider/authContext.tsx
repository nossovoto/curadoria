import { useReducer, createContext, FC } from 'react'
import { authReducer, authInitialState } from './reducer'
import { IAuthCtx } from './interfaces'

const initialContext: IAuthCtx = {
    auth: {
        user: {
            _id: 0,
            username: 'default',
            email: 'default@auth.com'
        },
        isAuthenticated: false,
        token: ''
    },
    // tslint:disable-next-line:no-empty
    dispatch: () => { }
}

export const authContext = createContext<IAuthCtx>(initialContext)
export const AuthProvider = authContext.Provider

const UserAuthProvider: FC<{ children?: JSX.Element }> = ({ children }) => {

    const [auth, dispatch] = useReducer(authReducer, authInitialState)

    return (
        <AuthProvider value={{ auth, dispatch }}>
            {children}
        </AuthProvider >
    )
}

export default UserAuthProvider
