import React from "react";
import CodeHighlight from "./CodeHighlight";
import TypewriterText from './TypewriterText';

import { useState } from 'react'
import fathymLogo from '/thinky.svg'
import tailwindLogo from '/tailwind.svg'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const code = `function sayHello(name) {
    console.log(\`Hello, \${name}\`);
  }`;

  return (
    <>
      <div className="p-4">
        <h1 className="text-lg font-bold mb-4">Code Highlight Demo</h1>
          <CodeHighlight language="javascript" code={code} />
      </div>
      <div className="mx-auto max-w-md">
        <div className="flex h-40 max-w-md items-center justify-center">
          <div className="h-40 w-40">
            <a href="https://fathym.com" target="_blank">
              <img src={fathymLogo} className="logo" alt="Fathym logo" />
            </a>
          </div>
          <div className="h-40 w-40">
            <a href="https://tailwindcss.com" target="_blank">
              <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
            </a>
          </div>
          <div className="h-40 w-40">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="h-40 w-40">
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
        <h2>
          <TypewriterText line={"Fathym + Tailwind + Vite + React"} startDelay={0} letterSpeed={0.07} letterFade={0.07} />
        </h2>
      </div>
    </>
  )
}

export default App