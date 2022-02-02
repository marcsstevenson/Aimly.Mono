import React from "react";
import Loading from "./Loading";
import { useAuth0, User, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0<User>();

  console.log(user);

  return (
    <div className="mb-5">
      <div className="align-items-center profile-header mb-5 text-center text-md-left">
        <div>
          <img
            src={user?.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div>
          <h2>{user?.name}</h2>
          <p className="lead text-muted">{user?.email}</p>
        </div>
      </div>
      <div>
        {JSON.stringify(user, null, 2)}
      </div>
    </div>
  );
};

//export default ProfileComponent;

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
