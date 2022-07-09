import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from '@codemirror/theme-one-dark';



interface ICodeBox  {
    code: string,
    width: string
}

const CodeBox = ({code, width}: ICodeBox) => {
  return (
   <>
    <CodeMirror
        theme={oneDark}
          value={code}
          width={width}
          extensions={[javascript({ jsx: true })]}
        />
   </> 
  );
}

export default CodeBox