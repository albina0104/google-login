import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from './GoogleLogin';
import googleCredentials from './googleCredentials.json';

export function GoogleProvider() {
  return (
    <GoogleOAuthProvider clientId={googleCredentials.web.client_id}>
      <GoogleLogin />
    </GoogleOAuthProvider>
  );
}
