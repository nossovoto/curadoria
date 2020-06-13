import { useContext } from 'react'
import { authContext } from '../authProvider/authContext'
import { IAuthActionType } from '../authProvider/interfaces'

const Index = () => {

	const { auth, dispatch } = useContext(authContext)

	return (
		<>
			{auth.isAuthenticated &&
				<>
					<div onClick={() => {
						dispatch({
							type: IAuthActionType.Logout
						})
					}}>
						CLICK HERE TO LOGOUT {auth.user.username}!!
					</div>
					<div onClick={() => console.log(auth)}>
						CLICK HERE TO PRINT AUTH CONTEXT
            		</div>
				</>
			}
		</>
	)
}

export default Index
