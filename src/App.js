import "./App.css";
import BookShelf from "./components/bookshelf/BookShelf";
import Context from "./components/context/Context";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/HomePage";
import MyBooks from "./components/pages/MyBooks";
import Footer from "./components/footer/footer"; // Ensure the correct import path

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="allbooks" element={<BookShelf />} />
        <Route path="mybooks" element={<MyBooks />} />
      </Route>
    )
  );

  return (
    <Context>
      <div className="app-container">
        <div className="content">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </Context>
  );
}

export default App;
