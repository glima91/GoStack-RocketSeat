import React from 'react';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  
return(
  <>
  <h1>Dashboad</h1>
  <button  onClick={signOut} type="submit">Sair</button>
  </>
);
};
export default Dashboard;