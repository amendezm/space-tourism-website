import "./Home.css";

const HomeView = () => (
  <div className="home">
    <div className="left">
      <p>So, you want to travel to</p>
      <p>Space</p>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div className="right">
      <div className="explore">
        <div className="outside-circle"></div>
        <div className="text">Explore</div>
      </div>
    </div>
  </div>
);

export { HomeView };
