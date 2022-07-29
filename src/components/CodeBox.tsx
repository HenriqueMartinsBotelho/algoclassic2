import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

interface ICodeBox {
  code: string;
  width?: string;
  style?: any;
  minWidth?: string;
}

const CodeBox = ({ code, width, style, minWidth }: ICodeBox) => {
  return (
    <div style={{ overflow: "auto", maxHeight: "470px", width: "100%" }}>
      <CodeMirror
        theme={oneDark}
        value={code}
        width={width}
        style={style}
        minWidth={minWidth}
        extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
};

export default CodeBox;
