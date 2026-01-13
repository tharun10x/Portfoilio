import { Suspense, lazy } from 'react';

// lazy-load the profile card from the blocks folder (relative to src/Components)
const ProfileCardComponent = lazy(() => import('../blocks/Components/ProfileCard/ProfileCard'));

function About() {
  return (
    <>
      {/* <div className="h-full"> */}
        <div className="mt-1 h-10">
          <div className="title w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl">About me</h1>
            <div className="w-1/3 h-1 bg-[#FF00C8] my-3 rounded-sm" />
          </div>
          <Suspense fallback={<div aria-busy="true" aria-label="Loading profile card" />}>
            <ProfileCardComponent className="mt-20 absolute left-80" />
          </Suspense>
        </div>
      {/* </div> */}
    </>
  );
}

export default About;
