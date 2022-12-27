import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import Canceled from "../components/Canceled/Canceled";

const CanceledPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Canceled />
        </Suspense>{" "}
      </MasterLayout>
    </>
  );
};

export default CanceledPage;
