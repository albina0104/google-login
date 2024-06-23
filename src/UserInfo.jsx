import PropTypes from 'prop-types';

export function UserInfo ({userInfo}) {
  return (
    <>
      <h1>Your name: {userInfo?.name}</h1>
      <p>Your email: {userInfo?.email}</p>
      <img src={userInfo?.picture} />
    </>
  )
}
UserInfo.propTypes = {
  userInfo: PropTypes.object
}
