import FeaturedEvents from "../components/Event/FeaturedEvents";
import Events from "../components/Event/Events";

import { hcmEvents, giaiPhongEvents } from "../data/Events";

function EventPage() {
  return (
    <>
      <Events
        events={giaiPhongEvents}
        title="CÁC SỰ KIỆN KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC"
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />
      <Events
        events={hcmEvents}
        title={`CÁC SỰ KIỆN KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH`}
        themeColor="rgb(235, 116, 116)"
        titleColor="#e74c3c"
      />

      {/* <FeaturedEvents /> */}
    </>
  );
}
export default EventPage;
