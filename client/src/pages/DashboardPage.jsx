import React, { Suspense } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const DashboardPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Dashboard />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default DashboardPage;
