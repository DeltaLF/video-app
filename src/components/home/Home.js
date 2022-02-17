import React from "react";

const Home = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container" style={{ height: "100vw" }}>
        <h1 className="ui inverted header">React practice project</h1>

        <a href="https://github.com/DeltaLF" className="ui huge primary button">
          Go to my github page
          <i className="github icon" style={{ marginLeft: "10px" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
