import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from '@codemirror/theme-one-dark';



const code = `import React from 'react'
import {Button} from "gaulesui_lib"

export const Page = () => {
  return (
    <Button label="Botão">Botão</Button>
  )
}
  `

const CodeBox = () => {
  return (
   <>
    <CodeMirror
        theme={oneDark}
          value={code}
          width="400px"
          extensions={[javascript({ jsx: true })]}
        />
   </> 
  );
}

export default CodeBox