import React, { useEffect, useState } from "react";
import { AuthContext, User } from "../context/AuthContext";
import { auth, createUserProfileDocument} from '../firebase/firebase.utils'


export const AuthProvider: React.FC<React.PropsWithChildren<void>> = ({ children }:React.PropsWithChildren<void>) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
		if (!userAuth) {
			// logout
			setUser(userAuth);
			return;
		}
		const userRef = await createUserProfileDocument(userAuth);
		if (!userRef) {
			console.log("ERR: get back null userRef")
			return;
		}
		userRef.onSnapshot((snapShot) => {
			const data = snapShot.data();
			if (!data) {
				console.log("ERR: get back null data on snapshot")
				return;
			}
			setUser({
				id: snapShot.id,
				displayName: data.displayName,
				email: data.email,
				createdAt: data.createdAt,
			})
		});
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};