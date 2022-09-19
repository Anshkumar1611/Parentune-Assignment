import FeaturedWork from "./components/FeaturedWork"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Posts from "./components/Posts"

function App() {
  return (
    <div className="font-heebo">
      <Header />
      <Hero />
      <Posts />
      <FeaturedWork />
      <Footer />

    </div>
  );
}

export default App;
