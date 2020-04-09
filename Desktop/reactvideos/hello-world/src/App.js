import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifecycleE from './components/Lifecycle';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css' 
import styles from "./appStyles.module.css";
import Form from './components/Form';
import AddunitForm from './components/AddunitForm';

class App extends Component{
  render(){
    return (
      <div className="App">
{/* <h1 className="error">Error</h1>s
<h1  className={styles.success}>Success</h1> */}
        {/* <Greet></Greet>
        <Welcome />
   <LifecycleE></LifecycleE>
  */}
   {/* <Hello></Hello> */}
  {/* <Greet name="dayanand" heroname="man">
    <p>this is childern props</p>
  </Greet>
   <Greet name="bruce" heroname="salman "></Greet>
  <button>say</button>
  <Greet name="mark" heroname="khan"></Greet> */}
   
   {/* <Welcome  name="bruce" heroname="salman "></Welcome>
   <Welcome  name="mark" heroname="khan"></Welcome>
  */}
 {/* <Message /> */}
 {/* <Counter /> */}

{/* <FunctionClick />

<ClassClick /> */}
{/* 
<EventBind/> */}

{/* <ParentComponent/> */}

{/* 
<UserGreeting/> */}

{/* <NameList/> */}

 {/* <Stylesheet primary={true}/> */}
{/* 
<Inline/> */}
{/* <Form/> */}

<AddunitForm></AddunitForm>
      </div>
    );
  }

}

export default App;
