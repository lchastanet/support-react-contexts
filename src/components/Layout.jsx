import Header from "./Header"
import Footer from "./Footer"
import HouseList from "./HouseList"

function Layout({ housesToRent, setHousesToRent }) {
  return (
    <main>
      <Header setHousesToRent={setHousesToRent} />
      <HouseList housesToRent={housesToRent} />
      <Footer />
    </main>
  )
}

export default Layout
