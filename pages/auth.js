import { firebaseAuth, GoogleAuthProvider } from '../utils/firebase'

function auth() {

    const authenticate = () => {
        firebaseAuth.
            signInWithPopup(GoogleAuthProvider)
            .then(res => {
                var { uid } = res.user
                sessionStorage.setItem('uid', uid)
            }).catch(err => console.log(err))
    }

    return (
        <div>
            <a onClick={authenticate}>Login with google</a>
        </div>
    )
}

export default auth
