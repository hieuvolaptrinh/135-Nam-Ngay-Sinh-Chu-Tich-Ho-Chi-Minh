/* eslint-disable no-unused-vars */

import React from "react";
import Banner from "../components/Home/Banner";
import FeaturedEvents from "../components/Event/FeaturedEvents";
import HoChiMinhTimeline from "../components/Home/HoChiMinhTimeLine";
import Events from "../components/Event/Events";
import { giaiPhongEvents, hcmEvents } from "../data/Events";

const Home = () => {
  return (
    <>
      <Events
        events={giaiPhongEvents}
        title="CÁC SỰ KIỆN KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025)"
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />
      <Events
        events={hcmEvents}
        title="CÁC SỰ KIỆN KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 – 19/5/2025)"
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />
      <HoChiMinhTimeline />
      {/* <FeaturedEvents /> */}
    </>
  );
};

export default Home;
