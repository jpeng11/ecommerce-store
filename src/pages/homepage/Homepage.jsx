import React from "react";

import Directory from "../../components/directory/directory";
import "./HomePage.scss";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  );
};

export default HomePage;
