import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import Progress from "../components/Progress/Progress";

const ProgressPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Progress />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProgressPage;
