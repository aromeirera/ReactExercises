import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/products/car" style={navLinkStyles}>
          Cars
        </NavLink>
        |{" "}
        <NavLink to="/products/bike" style={navLinkStyles}>
          Bikes
        </NavLink>
        <Outlet/>
      </nav>
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>Volvo</li>
        <li>BMW</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}
export function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>
        |{" "}
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>
        |{" "}
        <NavLink to="/products" style={navLinkStyles}>
          Products
        </NavLink>
        |{" "}
        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}