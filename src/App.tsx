import {Navbar} from "./components/Navbar.tsx";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {About} from "./pages/About.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";


function App() {


  return (
    <ShoppingCartProvider>

        <Navbar/>
        <Container>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Container>
    </ShoppingCartProvider>
  )
}

export default App
