import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function VerticalTimelineComponent() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <p style={{ margin: 0, padding: 0 }}>V1 release</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default VerticalTimelineComponent;
