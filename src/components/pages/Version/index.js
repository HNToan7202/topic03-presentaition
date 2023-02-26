import React from "react";
import GitAndGitHub from "./GitAndGitHub";
import GitTag from "./GitTag";
import GitRelease from "./GitRelease";
import Stepbystep from "./Stepbystep";
import Examplate from "./Examplate";

export default function Version() {
  return (
    <>
      <GitAndGitHub />
      <GitTag />
      <GitRelease />
      <Stepbystep />
      <Examplate />
    </>
  );
}
