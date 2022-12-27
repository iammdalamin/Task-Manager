import React, { Suspense } from "react";
import Create from "../components/Create/Create";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const CreatePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Create />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CreatePage;
