import React from "react";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <div className="mb-5">
      <div className="align-items-center profile-header mb-5 text-center text-md-left">
        <div md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </div>
      </div>
      <div>
        {JSON.stringify(user, null, 2)}
      </div>
    </div>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
