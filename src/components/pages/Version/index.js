import React from "react";
import GitAndGitHub from "./GitAndGitHub";
import GitTag from "./GitTag";
import GitRelease from "./GitRelease";
import "./styles.css";
export default function Version() {
  return (
    <div className="bg">
      <GitAndGitHub />
      <GitTag />
      <GitRelease />
    </div>
  );
}
