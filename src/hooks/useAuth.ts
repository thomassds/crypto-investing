import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';

export function useAuth() {
    const value = useContext(AuthContext);

    return value;
}