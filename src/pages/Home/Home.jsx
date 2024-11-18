import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Service from "../../components/Service/Service";

import "./Home.scss";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Service />
    </main>
  )
}

export default Home