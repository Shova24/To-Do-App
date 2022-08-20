import React from "react";
import Base from "../Shared/Base";
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
          </>
        }
      />
    </>
  );
}
