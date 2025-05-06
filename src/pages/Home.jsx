/* eslint-disable no-unused-vars */

import React from "react";
import Banner from "../components/Home/Banner";
import FeaturedEvents from "../components/Home/FeaturedEvents";
import HoChiMinhTimeline from "../components/Home/HoChiMinhTimeLine";
import Events from "../components/Event/Events";
const Home = () => {
  return (
    <div>
      <Banner />
      <Events />

      <HoChiMinhTimeline />
      <FeaturedEvents />
    </div>
  );
};

export default Home;
