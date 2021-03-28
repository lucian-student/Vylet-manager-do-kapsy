import { jwtTransport } from '../../axios/refreshTokenAxios';
import { getAcessToken, setAccessToken } from '../../utils/accessToken';
import firebase from '../../config/firebase';

export const logoutFunction = async (setCurrentUser, source) => {
    return await jwtTransport
        .delete('/apis/users/logout', {
            headers: {
                'Authorization': 'Bearer ' + getAcessToken(),
                'Content-Type': 'application/json'
            },
            cancelToken: source.token
        })
        .then(res => {
            setAccessToken('');
            setCurrentUser(null);
            firebase.auth().signOut().catch(function (error) {
                console.error(error.message);
            });
            console.log(res.data);
        })
        .catch(err => console.error(err));
}