import React from "react";
import Base from "../Shared/Base";
import BreadCrumbComp from "../Shared/BreadCrumb";
import HeaderComponent from "../Shared/HeaderComponent";
import ProfileCard from "./ProfileComp";

export default function HomePage() {
  return (
    <>
      <Base
        header={<HeaderComponent />}
        content={
          <>
            <ProfileCard />
            <BreadCrumbComp />
          </>
        }
      />
    </>
  );
}
