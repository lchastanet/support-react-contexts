import HouseCard from "./HouseCard"

function HouseList({ housesToRent }) {
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
