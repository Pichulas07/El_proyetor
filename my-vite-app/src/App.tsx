import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Home } from "./features/home/Home";
import NotFound from "./shared/NotFound";
import Movies from "./features/movies/Movies";
import { MovieDetails } from "./features/movies/MovieDetails";
import User from "./features/profile/user";

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal con la imagen de fondo */}
      <div
        className="flex flex-col min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://revistavisioncr.com/wp-content/uploads/2025/10/a1-42.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/profile" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
