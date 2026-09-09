import React from "react";

function Profile({ profile }) {
  return (
    <div className="container">
      <img
        src={profile.profilePicture}
        alt={profile.name}
        className="Profile-picture"
      />
      <h1>{profile.name}</h1>
      <h2>{profile.species}</h2>
      <sub>{profile.socialTag}</sub>
    </div>
  );
}

export default Profile;
