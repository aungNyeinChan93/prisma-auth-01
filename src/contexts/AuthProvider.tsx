"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useContext, useState } from "react";

export type AuthContextType = {
  authUser: null | undefined;
  setAuthUser?: React.Dispatch<React.SetStateAction<any>> | any;
};

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: null,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState();

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
