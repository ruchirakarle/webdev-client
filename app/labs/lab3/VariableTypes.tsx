/* eslint-disable no-var, prefer-const */
export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  // On your own §3.2.2: a second string and a second number
  let courseName = "Web Development";
  let courseCredits = 4;
  // With AI §3.2.2
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      courseName = {courseName}                   <br />
      typeof courseName = {typeof courseName}     <br />
      courseCredits = {courseCredits}             <br />
      typeof courseCredits = {typeof courseCredits} <br />
      sampleCount = {sampleCount}                 <br />
      typeof sampleCount = {typeof sampleCount}   <br />
      sampleLabel = {sampleLabel}                 <br />
      typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}