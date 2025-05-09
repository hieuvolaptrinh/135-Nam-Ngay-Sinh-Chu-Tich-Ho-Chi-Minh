import FeaturedEvents from "../components/Event/FeaturedEvents";
import Events from "../components/Events";

import { hcmEvents, giaiPhongEvents } from "../data/Events";

function EventPage() {
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

      <FeaturedEvents />
    </>
  );
}
export default EventPage;
