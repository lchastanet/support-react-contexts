import { useContext } from "react"

import CurrentHousesContext from "../contexts/housesContext"

function SelectHouseType() {
  const { housesToRentData, setHousesToRent } = useContext(CurrentHousesContext)

  const handleChange = (e) => {
    const newList = housesToRentData.filter(
      (house) => house.type === e.target.value || e.target.value === "All"
    )
    setHousesToRent(newList)
  }
  return (
    <select name="home" onChange={handleChange}>
      <option value="All">All</option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  )
}

export default SelectHouseType
