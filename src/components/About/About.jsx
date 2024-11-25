import './About.scss';
import imgUrl from './../../assets/images/ceo_of_dananz.png';

const About = () => {
  return (
    <section id='about'>
      <h2 className="h2 about-h2">ABOUT</h2>
      <span className="about-line"></span>
      <h3 className="h3">
      “We&apos;re one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”
      </h3>
      <div className="about-content">
        <div className="about-bg"></div>
        <div className="about-ceo">
          <img src={imgUrl} alt="ceo_of_dananz" />
          <div className="about-ceo-info">
            <h4>Argo Danaan</h4>
            <p>CEO of Dananz</p>
          </div>
        </div>
        <div className="about-learn">
          <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default About