import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const GoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = () => {
      setLoading(false);
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    };

    return () => {
      unsubscribe();
    };
  }, []);
  const AllContent = { GoogleSignIn, setUser, user, loading, setLoading };
  return (
    <AuthContext.Provider value={AllContent}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
