import { createContext, useEffect, useState } from "react";
import { app } from "../../configs/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAuth,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { AuthContextType, AuthProviderProps, User } from "./types";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthContext = createContext<AuthContextType>({
  user: null,
  accessToken: "",
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        setAccessToken(token as string);
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        if (error instanceof FirebaseError) {
          //   const errorCode = error.code;
          //   const errorMessage = error.message;
          // The email of the user's account used.
          //   const email = error.customData?.email;
          // The AuthCredential type that was used.
          //   const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }
      });
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setLoading(true);
      if (user) {
        const token = await user.getIdToken();
        setAccessToken(token);
        setUser({
          name: user.displayName as string,
          avatar: user.photoURL as string,
        });
      } else {
        setAccessToken("");
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return !loading ? (
    <AuthContext.Provider
      value={{
        user: user,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  ) : (
    <></>
  );
};

export default AuthProvider;
export { AuthContext };
