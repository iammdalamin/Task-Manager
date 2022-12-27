import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProfilePage;
