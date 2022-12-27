import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Registration from "../components/Registration/Registration";

const RegistrationPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </>
  );
};

export default RegistrationPage;
