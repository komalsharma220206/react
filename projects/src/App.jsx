import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Add } from './buttons'
import { Delete } from './buttons'

function App() {
  

  return (
    <div>
      <center class='cont'>
        <h2>
        TODO APP
        </h2>
        <div class="row">
          <div class="col-6"><input type="text" placeholder='ENTER TODO HERE'/></div>
          <div class="col-4"><input type="date" /></div>
          <div class="col-2"><Add></Add></div>
        </div>
        <div class="row">
          <div class="col-6">BUY MILK</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2"><Delete></Delete></div>
        </div>
        <div class="row">
          <div class="col-6">Go to College</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2"><Delete></Delete></div>
        </div>
      </center>
    </div>
  )
}

export default App
