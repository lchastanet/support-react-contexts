import { useContext } from "react"

import HouseCard from "./HouseCard"

import CurrentHousesContext from "../contexts/housesContext"

function HouseList() {
  const { housesToRent } = useContext(CurrentHousesContext)

  return (
    <>
      <h2>HouseList</h2>
      {housesToRent.map((house) => (
        <HouseCard key={house.name} house={house} />
      ))}
    </>
  )
}

export default HouseList
