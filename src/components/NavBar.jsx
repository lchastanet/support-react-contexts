import SelectHouseType from "./SelectHouseType"

function NavBar({ setHousesToRent }) {
  return (
    <nav>
      <h1>NavBar</h1>
      <SelectHouseType setHousesToRent={setHousesToRent} />
    </nav>
  )
}

export default NavBar
