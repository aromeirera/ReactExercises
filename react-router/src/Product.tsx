// App.jsx
import {BrowserRouter,Routes,Route,Link,useParams,useNavigate,} from "react-router-dom";

import type { FormEvent } from "react";
const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Headphones", price: 120 },
  { id: 4, name: "Keyboard", price: 80 },
  { id: 5, name: "Monitor", price: 250 },
];

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome!</p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

// 6. Fake contact form that redirects Home on submit
function Contact() {
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();   // stop the page from reloading
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <input type="text" placeholder="Your name" required />
      <br />
      <textarea placeholder="Your message" required />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

// 7. Challenge: two params
function UserPost() {
  const { userId, postId } = useParams();
  return (
    <div>
      <h1>User Post</h1>
      <p>User ID: {userId}</p>
      <p>Post ID: {postId}</p>
    </div>
  );
}

export default function Product() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/users/7/posts/42">Sample user post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:userId/posts/:postId" element={<UserPost />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}