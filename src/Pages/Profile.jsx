import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      Profile
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        IR A LA PAGINA DE ABOUT
      </button>
    </div>
  );
};

export default Profile;
