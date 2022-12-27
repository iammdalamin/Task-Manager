import React, { Suspense } from "react";
import Login from "../components/Login/Login";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const LoginPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Login />
    </Suspense>
  );
};

export default LoginPage;
