/* eslint-disable no-var, prefer-const */
export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  // On your own §3.2.1: one more let and one more const
  let myName = "Ruchira";
  const greeting = "Hello, " + myName + "!";
  // With AI §3.2.1
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      myName = {myName}                 <br />
      greeting = {greeting}             <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}