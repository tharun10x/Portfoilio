import React from 'react';
import ProfileCardComponent from '../blocks/Components/ProfileCard/ProfileCard'

function About(props) {
  // Optional: hooks, logic, etc.

  return (
    <>

    <div className='h-full '>
      <div className='mt-25 h-10'>
        <h1 className='text-3xl'>About me <br /><div className='w-full h-1 bg-[#FF00C8] my-3 rounded-sm'></div></h1>
        
      <ProfileCardComponent className='mt-20 absolute left-80' />
      </div>
      
    </div>
    
    </>
  );
}

export default About;
