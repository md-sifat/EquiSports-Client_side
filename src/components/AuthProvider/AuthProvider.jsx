import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        fetch('https://equi-sports-server-side-beryl.vercel.app/equipments')
            .then(res => res.json())
            .then(data => setEquipment(data))
            .catch(error => console.error('Error fetching equipment:', error));
    }, []);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const SignOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(() => {
        const connection = onAuthStateChanged(auth, user => {
            if (user) {
                setLoading(false);
                setUser(user);
            }
        });

        return () => {
            connection();
        }


    }, []);



    const authData = {
        user,
        createUser,
        loginUser,
        SignOut,
        loading,
        setLoading,
        setUser,
        equipment,
        setEquipment

    }

    return (
        <authContext.Provider value={authData}>
            {children}
        </authContext.Provider>
    );


};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;