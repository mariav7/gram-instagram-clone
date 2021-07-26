import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

const Sidebar = () => {
  const { user: { docId = '', fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);
  /* console.log(
    `Fullname: ${fullName}, Username: ${username}, UserId: ${userId}, Following: ${following}`
  ); */
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
};

export default Sidebar;
