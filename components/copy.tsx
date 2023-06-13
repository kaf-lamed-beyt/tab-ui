import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import { CopyWrapper } from "../style/playground.styled";

interface clipboardProp {
  text: string;
}

export const CopyToClipboad = ({ text }: clipboardProp) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((error) => console.error(`failed to copy command: ${error}`));
  };

  return (
    <CopyWrapper>
      <div className="container">
        <input type="text" value={text} readOnly />
        <button onClick={handleCopy}>
          {isCopied ? <dialog open={isCopied}>copied</dialog> : null}
          <IoCopyOutline />
        </button>
      </div>
      <button className="get-started">
        <a href="https://github.com/kaf-lamed-beyt/react-tab#readme">
          get started
        </a>
      </button>
    </CopyWrapper>
  );
};
