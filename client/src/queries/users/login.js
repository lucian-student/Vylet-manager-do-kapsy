import { transport } from '../../axios/cookieAxios';
import { setAccessToken } from '../../utils/accessToken';
import firebase from '../../config/firebase';

export const loginFunction = async (btnRef, setLoginErrors, loginUser, email, password, source) => {

    return await transport({
        method: 'post',
        data: { email, password },
        headers: { 'Content-Type': 'application/json' },
        cancelToken: source.token,
        url: '/apis/users/login/'
    })
        .then(res => {
            firebase.auth().signInWithCustomToken(res.data.firebaseToken)
                .then(() => {
                    setAccessToken(res.data.accessToken);
                    loginUser();
                })
                .catch((error) => {
                    console.log(error.message)
                });
        })
        .catch(err => {
            if (err.response) {
                setLoginErrors(err.response.data);
            }
            if (btnRef.current) {
                btnRef.current.removeAttribute("disabled");
            }
            console.error(err.message)
        });
}
