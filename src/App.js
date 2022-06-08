import { useState } from "react"

import "./styles/App.css"

import housesToRentData from "./data/housesToRent"

import Layout from "./components/Layout"

function App() {
  const [housesToRent, setHousesToRent] = useState(housesToRentData)

  return (
    <div className="App">
      <Layout
        housesToRent={housesToRent}
        setHousesToRent={setHousesToRent}
        housesToRentData={housesToRentData}
      />
    </div>
  )
}

export default App
