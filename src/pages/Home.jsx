import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-subtitle">I am a Web Developer & Designer</p>
      <div className="home-buttons">
        <a href="#projects">View Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
