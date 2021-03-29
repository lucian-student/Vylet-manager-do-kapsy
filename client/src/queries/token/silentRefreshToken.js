import { transport } from '../../axios/cookieAxios';
import { setAccessToken } from '../../utils/accessToken';
import firebase from '../../config/firebase';
export const silentLoginQuery = async (setLoading, loginUser,source) => {
    await transport({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cancelToken: source.token,
        url: '/apis/token/refresh_token'
    })
        .then(res => {
            setAccessToken(res.data.accessToken);
            loginUser().then(() => {
                setLoading(false);
            });
        })
        .catch(err => {
            console.error(err.message);
            if (err.message === 'Request failed with status code 403') {
                firebase.auth().signOut()
                    .catch(function (error) {
                        console.error(error.message);
                    }).finally(function () {
                        setLoading(false);
                    });
            }
        });
}