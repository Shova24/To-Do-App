import React from "react";
import Base from "../Shared/Base";
import BreadCrumbComp from "../Shared/BreadCrumb";
import ProfileCard from "./ProfileComp";

export default function HomePage() {
  return (
    <>
      <Base
        content={
          <>
            <ProfileCard />
            <BreadCrumbComp />
            {/* I wanna Add slider and percentage  */}
          </>
        }
      />
    </>
  );
}
