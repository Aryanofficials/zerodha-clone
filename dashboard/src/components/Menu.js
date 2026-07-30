import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Person,
  PencilSquare,
  Gear,
  Moon,
  BoxArrowRight,
  ChevronDown,
  CircleFill,
} from "react-bootstrap-icons";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  // Get logged-in user
 useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () =>
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
}, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodha-clone-wz77.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );

      // After logout go to login page
      window.location.href =
  "https://zerodha-frontend-ae5z.onrender.com/auth?mode=login";
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  // Generate initials
  const getInitials = () => {
    if (!user?.fullName) {
      return "U";
    }

    const names = user.fullName.trim().split(" ");

    if (names.length === 1) {
      return names[0][0].toUpperCase();
    }

    return (
      names[0][0] + names[names.length - 1][0]
    ).toUpperCase();
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">

      <img
        src="logo.png"
        alt="Logo"
        style={{ width: "50px" }}
      />

      <div className="menus">

        <ul>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={
                  selectedMenu === 0
                    ? activeMenuClass
                    : menuClass
                }
              >
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={
                  selectedMenu === 1
                    ? activeMenuClass
                    : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={
                  selectedMenu === 2
                    ? activeMenuClass
                    : menuClass
                }
              >
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={
                  selectedMenu === 3
                    ? activeMenuClass
                    : menuClass
                }
              >
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={
                  selectedMenu === 4
                    ? activeMenuClass
                    : menuClass
                }
              >
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p
                className={
                  selectedMenu === 5
                    ? activeMenuClass
                    : menuClass
                }
              >
                Apps
              </p>
            </Link>
          </li>

        </ul>

        <hr />

        {/* USER PROFILE */}

<div
  className="profile-wrapper"
  ref={dropdownRef}
>
  <div
    className="profile"
    onClick={handleProfileClick}
  >
    <div className="avatar-container">
      <div className="avatar">
        {getInitials()}
      </div>

      <CircleFill
        className="online-dot"
        size={10}
      />
    </div>

    <div className="user-details">
      <p className="username">
        {user ? user.fullName : "Loading..."}
      </p>

      <small>Verified User</small>
    </div>

    <ChevronDown
      className={
        isProfileDropdownOpen
          ? "rotate-arrow"
          : ""
      }
    />
  </div>

  {/* Profile Dropdown */}
  {isProfileDropdownOpen && (
    <div className="profile-dropdown show">

      <div className="profile-info">
        <div className="big-avatar">
          {getInitials()}
        </div>

        <strong>{user?.fullName}</strong>
        <p>{user?.email}</p>
      </div>

      <hr />

      <Link
        to="/profile"
        className="profile-menu-item"
      >
        <Person size={18} />
        <span>My Profile</span>
      </Link>

      <Link
        to="/edit-profile"
        className="profile-menu-item"
      >
        <PencilSquare size={18} />
        <span>Edit Profile</span>
      </Link>

      <Link
        to="/settings"
        className="profile-menu-item"
      >
        <Gear size={18} />
        <span>Settings</span>
      </Link>

      <div className="profile-menu-item">
        <Moon size={18} />
        <span>Dark Mode</span>
      </div>

      <hr />

      <button
        className="logout-button"
        onClick={handleLogout}
      >
        <BoxArrowRight size={18} />
        Logout
      </button>

    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default Menu;