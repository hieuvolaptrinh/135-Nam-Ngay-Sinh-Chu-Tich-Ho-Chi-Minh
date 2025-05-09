/* eslint-disable no-unused-vars */

import React from "react";
import Banner from "../components/Home/Banner";
import FeaturedEvents from "../components/Event/FeaturedEvents";
import HoChiMinhTimeline from "../components/Home/HoChiMinhTimeLine";
import Events from "../components/Events";
import { giaiPhongEvents, hcmEvents } from "../data/Events";

const Home = () => {
  return (
    <>
      <Events
        events={giaiPhongEvents}
        title="Các sự kiện kỷ niệm 50 năm ngày giải phóng miền Nam"
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />
      <Events
        events={hcmEvents}
        title="Các sự kiện kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh"
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />
      <HoChiMinhTimeline />
      {/* <FeaturedEvents /> */}
    </>
  );
};

export default Home;
