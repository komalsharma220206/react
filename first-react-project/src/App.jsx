import Hello from "./hello";
import Random from "./random";
function App(){

  let myname="komal";
  let fullname=()=>{
    return "komal sharma";
  }
  return <div>
    <h1>
      Hello My name is {fullname()}
    </h1>
    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </div>
}
export default App;
