import { jwtTransport } from '../../axios/refreshTokenAxios';
import { getAcessToken } from '../../utils/accessToken';

export const meQuery = async (setCurrentUser, source) => {
    return await jwtTransport
        .get('/apis/users/me', {
            headers: {
                'Authorization': 'Bearer ' + getAcessToken(),
                'Content-Type': 'application/json'
            },
            cancelToken: source.token
        })
        .then(res => {
            setCurrentUser(res);
        })
        .catch(err => console.error(err));
};