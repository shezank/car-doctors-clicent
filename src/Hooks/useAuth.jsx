import React, { useContext } from 'react';
import { AuthContext } from '../Shard/AuthProviders/AuthProviders';

const useAuth = () => {
   const auth = useContext(AuthContext);
   return auth
};

export default useAuth;