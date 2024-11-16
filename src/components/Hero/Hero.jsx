import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1 className="h1">Design your interior with high quality.</h1>
        <span className="hero-line"></span>
        <ul className="hero-info">
          <li>
            <span className="number">350+</span>
            <span className="text">Project Completed</span>
          </li>
          <li>
            <span className="number">23+</span>
            <span className="text">Professional Teams</span>
          </li>
          <li>
            <span className="number">15+</span>
            <span className="text">Years Experience</span>
          </li>
        </ul>
        <div className="copyright">
          <span>2022</span>
          <span>ALL RIGHT RESERVED</span>
        </div>
      </div>
      <div className="hero-bg"></div>
    </section>
  );
};

export default Hero;
