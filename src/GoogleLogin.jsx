import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { UserInfo } from './UserInfo';

export function GoogleLogin() {
  const [userInfo, setUserInfo] = useState(null);

  async function getUserInfo(token) {
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo',
      {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    );
  
    setUserInfo(await response.json());
  }

  const login = useGoogleLogin({
    onSuccess: tokenResponse => getUserInfo(tokenResponse.access_token),
  });

  return (
    <>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      {userInfo != null && <UserInfo userInfo={userInfo} />}
    </>
  );
}
