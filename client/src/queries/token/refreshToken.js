import { transport } from '../../axios/cookieAxios';
import { setAccessToken } from '../../utils/accessToken';
export const refreshTokenQuery = async () => {
    await transport({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: '/apis/token/refresh_token'
    })
        .then(res => {
            setAccessToken(res.data.accessToken);
        })
        .catch(err => {
            console.error(err.message);
        });
}
