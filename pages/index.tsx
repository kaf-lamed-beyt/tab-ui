import React from "react";
import { data } from "../data";
import { Tab } from "react-tab-state";
import { PlaygroundWrapper, Components } from "../style/playground.styled";
import { CopyToClipboad } from "../components/copy";

export default function PlayGround() {
  const command = "yarn add react-tab-state";
  return (
    <>
      <PlaygroundWrapper>
        <div className="playground-main">
          <h1>
            Hello <span>@react-tab</span> playground
          </h1>
          <p>state-aware tab components in react</p>
          <div className="command-area">
            <CopyToClipboad text={command} />
          </div>
        </div>
        <Components>
          <div className="react-tab">
            <Tab tabItems={data} theme="gray" />
          </div>
        </Components>
      </PlaygroundWrapper>
    </>
  );
}
