import Sidebar from "../../Components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";
import { useState } from "react";

const Home = ({ sidebar }) => {
  // useState to Create Category Variable
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} setCategory={setCategory} />
      </div>
    </>
  );
};

Home.propTypes = {
  sidebar: PropTypes.bool.isRequired,
};

export default Home;
