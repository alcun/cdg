import "./Hero.scss";

const Hero = () => {
  return (
    <section id="hero-wrapper">
      <div id="hero-content-box">
        <div id="hero-logo-box">
          <img id="hero-logo" src="/cgd_logo.png" />
        </div>
        <div id="hero-title-box">
          <div id="hero-title-header-wrapper">
            <h1>
              Cyber
              <br /> Geist
              <br /> Designs
            </h1>
          </div>
          <div id="hero-title-subheader-wrapper">
            <h2>Scary good websites...</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
