import React, { Suspense } from "react";
import Completed from "../components/Completed/Completed";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const CompletedPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Completed />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CompletedPage;
