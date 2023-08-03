import { createContext, useRef, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("monthly");

  const signUpRef = useRef(null);

  const authinfo = {
    user,
    setUser,
    email,
    setEmail,
    signUpRef,
    duration,
    setDuration,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
