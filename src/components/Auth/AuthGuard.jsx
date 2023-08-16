import React, { useState, useEffect } from "react";
import { useStateValue } from "../../store";
import { redirect, useNavigate } from "react-router-dom";
import { profile } from "../../services/auth";
import * as actionType from "../../store/actionTypes";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";

function AuthGuard({ children }) {
  const [state, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // navigate("/", { replace: true });
    } else {
      getUser();
    }
    setLoading(false);
  }, []);

  const getUser = async () => {
    try {
      const res = await profile();
      dispatch({
        type: actionType.SET_USER_DATA,
        payload: res.data.user,
      });
    } catch (error) {
      console.log("error fetching session");
      // toast.error("Error fetching user session!");
    }
  };

  if (loading) {
    return (
      <div className="h-screen grid place-items-center bg-yellow">
        <BiLoaderAlt className="text-8xl animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthGuard;
