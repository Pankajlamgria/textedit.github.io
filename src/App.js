// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Text from "./component/Text.js";
import Alert from "./component/Alert.js";
// import About2 from "./component/About2.js";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


  
function App() {
  // var color="any";
  
  const [thememode,changetheme]= useState("light");
  const [textcolor,changetextcolor]= useState("dark");
  const [alertmsg,changealertmsg]= useState(null);
  const [alerttype,changealerttype]= useState("success");
  const [btncolor,changebtncolor]= useState("light");

  function cyantoogle() {
    if(document.body.style.backgroundColor!=="cyan"){
      changetheme("light");
      changetextcolor("dark");
      allertmsg("Cyan mode on","success");
      document.body.style.backgroundColor="cyan";
      document.body.style.color="white";
      changetextcolor("dark");
      changetheme("light");
      changebtncolor("info");
      document.title="TextEditor/CyanMode"
      setTimeout(() => {
        document.title="TextEditor";
      }, 3000);
    }
    else{
      document.body.style.color="black";
      allertmsg("Pink mode off ","success");
      document.body.style.backgroundColor="white"; 
      changetextcolor("dark");
      changetheme("light");
      changebtncolor("light");
    }
  }

  function toogle() {
    if(thememode==="dark"){
      console.log("white")
        document.body.style.color="black";
        allertmsg("Light mode On ","success");
        document.body.style.backgroundColor="white"; 
        changetextcolor("dark");
        changetheme("light");
        changebtncolor("light");
    }
    else{
      console.log("dark")
        document.body.style.color="white";
        allertmsg("Dark mode On ","success");
        document.body.style.backgroundColor="black"; 
        changetextcolor("light");
        changetheme("dark");
        changebtncolor("dark");
      }
  }
      function allertmsg(msg,type) {
    changealertmsg(msg);
    changealerttype (type);
    setTimeout(() => {
      changealertmsg(null);
    }, 3000);
  }
  return ( 
    // <Router>
    <>
    <Navbar logo="Text Editor" first="Home" mode={thememode} tooglefunc={toogle} textcolor={textcolor} cyantoogle={cyantoogle}/>
    <Alert message={alertmsg} type={alerttype}/>
      <div className="container">
            <Text heading="Enter the text here:"  mode={thememode} allertfunc={allertmsg} btncolor={btncolor}/>
      </div>
    {/* <Switch>
          <Route exact path="/about">
            <About2/>
          </Route>
          <Route exact path="/">
          </Route>
    </Switch> */}
    </>
    // {/* </Router> */}
  );
}

export default App;
