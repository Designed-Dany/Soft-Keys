import Form from './Form' 
import {useDispatch} from "react-redux"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {setUser} from '../redux/slices/userSlice'
import app from '../firebase'
function Login() {

	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
			const auth = getAuth(app);
			signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
					const user = userCredential.user;
					console.log(user);
					dispatch(setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					}));
						navigate('/'); // Используем navigate вместо push
					})
					.catch((error) => {
						console.error(error);
					});
		}

	return (
		<Form 
		title="login"
		handleClick={handleLogin}
		/>
	)
}

export default Login;