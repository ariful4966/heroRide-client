import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../UserProfile/Profile';

const Home = () => {
  
    const user = useSelector(state=>state.user);
    return (
        <div>
           

               {
                   user && user.email=== 'admin@admin.com' ? <Dashboard/>: <Profile/>
               }
                
        </div>
    );
};

export default Home;