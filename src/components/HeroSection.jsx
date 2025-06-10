import './styles/_hero.scss';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage:`url(/assets/Element.png)`  }} 
    >
      <div className="hero__content">
        <div className="hero__text">
          <h1>
            Get More Done with
            <br />
            whitepace
          </h1>
          <p>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="hero__cta">Try Whitepace free →</button>
        </div>
        <div className="hero__placeholder"></div>
      </div>
    </section>
  );
};

export default Hero;