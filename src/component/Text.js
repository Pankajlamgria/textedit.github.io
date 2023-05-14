import React, { useState } from "react";

export default function Text(props) {
  const [text, settext] = useState("");
  function wordscount(text) {
    var size=text.length;
    var count=0;
    for(var i=0;i<size;i++){
      if(text[i]===" "){
        count++;
      }
    } 
    if(text[size-1]===' ')count--;
    if(size===0)count--;
    return count+1;
  }
  function change(event) {
    // to reflect the changes in a textbox
    settext(event.target.value);
  }
  function upper() {
    props.allertfunc("Converted to Upper case","success");
    let val = text;
    val = val.toUpperCase();
    settext(val);
  }
  function copy() {
    props.allertfunc("Text copied","success")
    // let val=text;
    // navigator.clipboard.writeText(val);

    var copyText = document.getElementById("textarea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
  function lower() {
    props.allertfunc("Converted to Lower case","success")
    let val = text;
    val = val.toLowerCase();
    settext(val);
  }
  function removespace() {
    props.allertfunc("All the unnecessary spaces has been removed","success")
    let val = text.split(/[ ]+/);
    settext(val.join(" "));
    
  }
  function clear() {
    props.allertfunc("text cleared","success")
    let val = text;
    val = "";
    settext(val);
  }
  function letterupper() {
    props.allertfunc("First letter of every word is coverted to Upper case","success")
    let val = text;
    val = val.toLowerCase();
    const arr = val.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    val = arr.join(" ");
    // console.log(str2);

    settext(val);
  }
  return (
    <>
      <div className="container">
        <div className="my-3">
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">
              <h2>{props.heading}</h2>
            </label>
            <textarea
              style={{backgroundColor:`${(props.mode==="light")?("white"):("grey")}`, color:(props.mode==="light")?("black"):("white")}}
              className="form-control"
              value={text}
              onChange={change}
              id="textarea"
              rows="8"
            ></textarea>
          </div>
          <button type="button" className={`btn btn-${props.btncolor} mx-1 my-1`} onClick={upper}>
            Change into Upper
          </button>
          <button
            type="button"
            className={`btn btn-${props.btncolor} mx-1 my-1`}
            onClick={lower}
          >
            Change into Lower
          </button>
          <button
            type="button"
            className={`btn btn-${props.btncolor} mx-1 my-1`}
            onClick={letterupper}
          >
            Change first letter to upper
          </button>
          <button
            type="button"
            className={`btn btn-${props.btncolor} mx-1 my-1`}
            onClick={clear}
          >
            Clear
          </button>
          <button type="button" className={`btn btn-${props.btncolor} mx-1 my-1`} onClick={copy}>
            Copy
          </button>
          <button type="button" className={`btn btn-${props.btncolor} mx-1 my-1`} onClick={removespace}>
            Remove Extra spaces
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Text Deatails</h2>
        <h6>
          {/* Number of letters {text.length}. Number of Words{" "}{text.split(" ").length} */}
          Number of letters {text.length}. Number of Words {wordscount(text)}
        </h6>
      </div>
      <div className="container my-4 border border-light-subtle">
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
