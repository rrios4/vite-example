import { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from '@chakra-ui/react';
import { Layout } from './components';

interface Props {
  Component: JSX.Element,
  pageProps: JSX.ElementAttributesProperty
}

function App({Component, pageProps} : Props) {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hello Vite + React!</p>
    //     <p>
    //       <Button type='button' onClick={() => setCount((count) => count + 1)}>
    //           count is: {count}
    //       </Button>
    //       {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
    //         count is: {count}
    //       </button> */}
    //     </p>
    //     <p>
    //       Edit <code>App.tsx</code> and save to test HMR updates.
    //     </p>
    //     <p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //       {' | '}
    //       <a
    //         className="App-link"
    //         href="https://vitejs.dev/guide/features.html"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Vite Docs
    //       </a>
    //     </p>
    //   </header>
    // </div>
    <Layout>
      <Component {...pageProps}/>
      <Button type='button' onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
    </Layout>
  )
}

export default App
