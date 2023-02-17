import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
/* 
import { Padre } from './07-tarea-memo/Padre'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook' 
import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import SimpleForm from './02-useEffect/SimpleForm'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import { HooksApp } from './HooksApp'
 */



import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoApp/>
)

/* <React.StrictMode> */

/*<CounterWithCustomHook />
<SimpleForm/>
<FormWithCustomHook/>
<MultiplesCustomHooks />
<FocusScreen/>
<Layout />
<Memorize />
<MemoHook />
<CallbackHook />
<Padre />
*/

/* </React.StrictMode>, */
