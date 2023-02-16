import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout} from './05-useLayoutEffect/Layout'
/* 
import FormWithCustomHook from './02-useEffect/FormWithCustomHook' 
import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import SimpleForm from './02-useEffect/SimpleForm'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import { HooksApp } from './HooksApp'
 */

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 /* <React.StrictMode> */
      /*<CounterWithCustomHook /> 
      <SimpleForm/>
      <FormWithCustomHook/>
     <MultiplesCustomHooks />
     <FocusScreen/>
     */
     <Layout />
 /* </React.StrictMode>, */
)
