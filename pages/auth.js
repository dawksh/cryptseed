import { fireAuth, googleProvider } from '../utils/firebase';
import { useRouter } from 'next/router';

function auth() {
    const router = useRouter();
    const login = () => {
        fireAuth.signInWithPopup(googleProvider).then(res => {
            var { uid } = res.user
            sessionStorage.setItem('uid', uid)
            router.push("/app")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={login}>Login with google</button>
        </div>
    )
}

export default auth
