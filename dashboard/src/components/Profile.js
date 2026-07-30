import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3002/profile",
                    {
                        withCredentials: true,
                    }
                );

                setUser(response.data.user);

            } catch (error) {
                console.log("Profile error:", error);

                // No valid login session
                window.location.href = "http://localhost:3000/auth?mode=login";
            }
        };

        getProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:3002/logout",
                {},
                {
                    withCredentials: true,
                }
            );

            window.location.href = "http://localhost:3000/auth";

        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    if (!user) {
        return <p>Loading profile...</p>;
    }

    return (
  <div className="profile-page">

    <div className="profile-card">

      <div className="profile-header">

        <div className="avatar">

          {user.fullName
            .split(" ")
            .map(name => name[0])
            .join("")
            .toUpperCase()}

        </div>

        <h2>{user.fullName}</h2>

        <p className="designation">
          Investor Dashboard User
        </p>

      </div>

      <div className="profile-details">

        <div className="detail-box">

          <span className="label">
            Full Name
          </span>

          <span className="value">
            {user.fullName}
          </span>

        </div>

        <div className="detail-box">

          <span className="label">
            Email Address
          </span>

          <span className="value">
            {user.email}
          </span>

        </div>

        <div className="detail-box">

          <span className="label">
            Account Status
          </span>

          <span className="status active">
            Active
          </span>

        </div>

      </div>

      <div className="profile-buttons">

        <button
    className="edit-btn"
    onClick={() => alert("Edit Profile clicked")}
>
    Edit Profile
</button>

                   <button
  className="logout-btn"
  onClick={() => {
    console.log("Logout clicked");
    handleLogout();
  }}
>
  Logout
</button>

      </div>

    </div>

  </div>
);
}

export default Profile;