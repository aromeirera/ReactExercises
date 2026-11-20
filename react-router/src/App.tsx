import { BrowserRouter, Routes, Route, Link, Outlet, NavLink, useParams } from 'react-router-dom';
import type { CSSProperties } from 'react';
// Style function for active links
const navLinkStyles = ({ isActive}: { isActive: boolean }): CSSProperties => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});
function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}
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
          
        </NavLink>|{" "}
        <NavLink to="/products/customers" style={navLinkStyles}>Customers</NavLink>
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
function Customers() {
  return (
    
    <div>
      <h2>Customers</h2>
      <nav>
        <Link to="/products/customers/Rukundo">Rukundo</Link> | 
        <Link to="/products/customers/Tobias">Kamali</Link> |
        <Link to="/products/customers/Linus">Mugisha</Link>
      </nav>
      <Outlet />
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
            <Route path="customers" element={<Customers/>} >
              <Route path=":firstname" element={<Info />} />
            </Route>
            </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}