import { Button } from "./kgbutton";
import { Head } from "./hello";
let fire=()=>{
  return "hari bol";
}
function App(){
  let name="SHREE SHREE"
  return <div style={{'color':'plum'}}>
    <Button>
      </Button>
    <span>
      {name}</span><Head></Head>
      <div>
        {fire()}
      </div>
  </div>
}
export default App;