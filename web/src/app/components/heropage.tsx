"use client";
import { useEffect, useRef } from "react";

export default function Heropage() {
  const svgRef = useRef(null);

  useEffect(() => {
    // After the component mounts, access the SVG element and trigger the animation.
    if (svgRef.current) {
      // Find all elements with animation classes (e.g., using SMIL animations)
      const animatableElements = svgRef.current.querySelectorAll(
        "animate, animateTransform, animateMotion"
      );

      // Start the animations by setting the begin attribute to 0s (or removing it)
      animatableElements.forEach((element) => {
        // Check if the element has a begin attribute, if so, set it to 0s
        if (element.hasAttribute("begin")) {
          element.setAttribute("begin", "0s");
        } else {
          // If there's no 'begin' attribute, you might need to trigger the animation differently
          // For example, by adding/removing a class or style that starts the animation

          // Example (using a class):
          // element.classList.add('start-animation');

          // If the animation is CSS-based, you may need to trigger a reflow:
          // void element.offsetWidth;  // Trigger a reflow
        }
      });
    }
  }, []);

  return (
    <div>
      <svg
        ref={svgRef}
        version="1.1"
        id="ezh40FSqd2D1"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 2138 1305"
        style={{ enableBackground: "new 0 0 2138 1305" }}
        xmlSpace="preserve"
      >
        <style type="text/css">
          {`.st0{fill:url(#SVGID_1_);}
          .st1{fill:#FFFFFF;}
          .st2{fill:#FBB03B;}
          .st3{fill:#E4834C;}
          .st4{fill:#F2F2F2;}
          .st5{fill:#CED5E0;}`}
        </style>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="1068.3503"
          y1="88.9018"
          x2="1068.3503"
          y2="1185.2319"
          gradientTransform="matrix(1.1388 0 0 -1.2726 -138.762 1484.0966)"
        >
          <stop offset="0" style={{ stopColor: "#2E3192" }} />
          <stop offset="1" style={{ stopColor: "#001336" }} />
        </linearGradient>
        <rect x="-15.4" y="-49" className="st0" width="2186.5" height="1374.4" />
        <g>
          <g id="ezh40FSqd2D4" transform="translate(.000003-562.04657)">
            <circle className="st1" cx="1748.2" cy="668.6" r="3" />
            <circle className="st1" cx="1080.9" cy="570.6" r="3" />
            <circle className="st1" cx="1277.8" cy="376.5" r="3" />
            <circle className="st1" cx="1631.7" cy="109.9" r="3" />
            <circle className="st1" cx="1898.2" cy="208.6" r="3" />
            <circle className="st1" cx="1748.2" cy="668.6" r="3" />
            <circle className="st1" cx="1946.3" cy="501.1" r="3" />
            <circle className="st1" cx="1946.3" cy="501.1" r="3" />
            <circle className="st1" cx="276" cy="84" r="3" />
            <circle className="st1" cx="417" cy="276" r="3" />
            <circle className="st1" cx="512" cy="514" r="3" />
            <circle className="st1" cx="173" cy="293" r="3" />
            <circle className="st1" cx="834.9" cy="568.4" r="3" />
            <circle className="st1" cx="862.7" cy="167.2" r="3" />
            <circle className="st1" cx="1120.9" cy="80.6" r="3" />
            <circle className="st1" cx="728" cy="359" r="3" />
            <circle className="st1" cx="1631.7" cy="109.9" r="3" />
            <circle className="st1" cx="1898.2" cy="208.6" r="3" />
          </g>
          <g id="ezh40FSqd2D23" transform="translate(.000001 180.921485)">
            <circle className="st1" cx="1748.2" cy="668.6" r="3" />
            <circle className="st1" cx="1080.9" cy="570.6" r="3" />
            <circle className="st1" cx="1277.8" cy="376.5" r="3" />
            <circle className="st1" cx="1631.7" cy="109.9" r="3" />
            <circle className="st1" cx="1898.2" cy="208.6" r="3" />
            <circle className="st1" cx="1748.2" cy="668.6" r="3" />
            <circle className="st1" cx="1946.3" cy="501.1" r="3" />
            <circle className="st1" cx="1946.3" cy="501.1" r="3" />
            <circle className="st1" cx="276" cy="84" r="3" />
            <circle className="st1" cx="417" cy="276" r="3" />
            <circle className="st1" cx="512" cy="514" r="3" />
            <circle className="st1" cx="173" cy="293" r="3" />
            <circle className="st1" cx="834.9" cy="568.4" r="3" />
            <circle className="st1" cx="862.7" cy="167.2" r="3" />
            <circle className="st1" cx="1120.9" cy="80.6" r="3" />
            <circle className="st1" cx="728" cy="359" r="3" />
            <circle className="st1" cx="1631.7" cy="109.9" r="3" />
            <circle className="st1" cx="1898.2" cy="208.6" r="3" />
          </g>
        </g>
        <g id="ezh40FSqd2D42" transform="translate(-67.867404 108.577609)">
          <path className="st2" d="M1417.1,420.6L1417.1,420.6z" />
          <path className="st2" d="M1477,403.3L1477,403.3z M1417.1,403.3L1417.1,403.3z M1451.2,403.3L1451.2,403.3z" />
          <path className="st2" d="M1417.1,423.2L1417.1,423.2z M1477,423.2L1477,423.2z M1451.2,423.2L1451.2,423.2z M1417.1,440.4L1417.1,440.4
		z M1562.3,289.9c-0.6-47.6-32.6-89-78.5-101.6s-94.6,6.7-119.4,47.3s-19.8,92.7,12.4,127.8c15,16.5,23.3,38.1,23.1,60.5v16.5l0,0
		v14.2c0,13.3,10.8,24.1,24.1,24.1h63c13.3,0,24.1-10.8,24.1-24.1v-31.3c0.1-22.2,8.4-43.6,23.3-60.1c18-19.7,28-45.4,27.9-72
		C1562.3,290.9,1562.3,290.4,1562.3,289.9L1562.3,289.9z M1451.3,423.2l-0.4-90h9.3l-0.4,90H1451.3z M1493.9,454.6
		c0,3.8-3.1,6.8-6.8,6.8H1424c-3.8,0-6.8-3.1-6.8-6.8v-14.2h76.7L1493.9,454.6L1493.9,454.6z M1521.7,351.6
		c-17.8,19.6-27.6,45.1-27.8,71.5H1477l0.4-90h11.5c15.8,0,28.6-12.8,28.7-28.6s-12.7-28.7-28.6-28.7s-28.7,12.7-28.8,28.5v0.1v11.5... h-9.4v-11.5c0-0.1,0-0.1,0-0.2c-0.1-15.8-13-28.5-28.8-28.5s-28.6,12.9-28.5,28.7s12.9,28.6,28.7,28.6h11.5l0.4,90h-16.8
		c0-26.4-9.9-51.9-27.7-71.4c-24-26.2-30.2-64-15.9-96.5s46.4-53.5,81.9-53.5h1.3c23.3,0.3,45.6,9.8,62,26.4
		c8.2,8.2,14.7,17.9,19.2,28.5C1551.7,288.8,1545.3,325.9,1521.7,351.6L1521.7,351.6L1521.7,351.6z M1477.5,315.9v-11.2v-0.2
		c0-6.3,5.1-11.4,11.4-11.4s11.4,5.1,11.4,11.4s-5.1,11.4-11.4,11.5L1477.5,315.9L1477.5,315.9z M1433.5,315.9h-11.5
		c-6.3,0-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4s11.4,5.1,11.4,11.4v0.2L1433.5,315.9L1433.5,315.9z" />
          <g id="ezh40FSqd2D46" transform="translate(.000013 45.604726)">
            <path className="st3" d="M1456.6,621.3c-10.5-9.3-73.5-66.9-52.5-131.7c2.7-8.2,6.5-16.1,11.2-23.3h82.9c4.5,7.6,7.9,15.7,10.3,24.1
			C1526.6,554.9,1468.8,610.1,1456.6,621.3L1456.6,621.3z" />
            <path className="st2" d="M1456.2,547.3c-4.6-4.9-32.1-35-23-68.8c1.2-4.2,2.8-8.3,4.9-12.2h36.3c2,4,3.5,8.3,4.5,12.6
			C1486.8,512.6,1461.5,541.4,1456.2,547.3L1456.2,547.3z" />
          </g>
        </g>
        <g id="ezh40FSqd2D49" transform="matrix(1.410651 0 0 1.410651-707.660507-275.139485)">
          <path className="st4" d="M483,815v36.1c-3.3-11.4-5-23.2-5-35.1c0-0.3,0-0.7,0-1H483z" />
          <path className="st4" d="M2165.8,678v479H64.8V588l0,0c0-0.2,0-0.3,0-0.5c0-54.4,38.3-101.4,91.7-112.2s107,17.4,128.2,67.5
		c20.2-12.8,44.7-17.2,67.1-10.8c23.6,6.8,43,25.3,52.9,49.3c23.6-20.1,56.2-25.7,85.1-14.8c29,10.9,49.7,36.8,54.1,67.4
		c35.4-15,75.7-12.9,109.4,5.7c33.6,18.6,56.8,51.7,62.9,89.7c35.2-25.6,83.1-41.4,135.9-41.4c82.4,0,152.9,38.4,181.6,92.7
		c4.6-0.5,9.2-0.7,13.8-0.7c48,0,88.1,25.5,97.6,59.6c13.2-17.3,35.3-25.3,56.4-20.4s37.5,21.8,41.6,43.2c2.8-0.2,5.7-0.3,8.6-0.3
		c27.1,0,53.4,8.7,75,25c0.4-46.9,27-89.7,69-110.8s92.2-16.8,130,11c6.2-25.6,26.1-45.7,51.6-52.1s52.6,1.8,70.2,21.4
		c35.8-37.5,85.4-58.6,137.2-58.6c4,0,8,0.1,12,0.4V698c0-21.7,9.4-42.3,25.8-56.6s38.1-20.7,59.6-17.7c26-65.6,95-103.5,164.3-90.2
		C2115.8,546.8,2165.9,607.4,2165.8,678z" />
          <path className="st4" d="M483,815v36.1c-3.3-11.4-5-23.2-5-35.1c0-0.3,0-0.7,0-1H483z" />
          <path className="st4" d="M478,815h5v36.1c-3.3-11.4-5-23.2-5-35.1C478,815.7,478,815.3,478,815z" />
          <path className="st4" d="M728,815v1C728,815.7,728,815.3,728,815z" />
        </g>
        <g id="ezh40FSqd2D55" transform="matrix(1.294959 0 0 1.294959-392.156498-415.542338)">
          <path className="st5" d="M2161.9,1081.1c0-50.2-41.1-91.2-90.5-91.2c-58,0-90.5,56.5-90.5,91.6c0,1.7,0,3.4,0.1,5
		c-18.2,5-35.1,14-49.4,26.3c-12.2-14.2-30-22.4-48.7-22.5c-35.7,0-64.7,29.3-64.7,65.4c0,2,0.1,4,0.3,6c-13.7-3.7-27.8-5.5-42-5.5
		c-62.6,0-117,35.8-144.2,88.4c-24.4-12.3-53.4-11.9-77.4,1.1c-12-41.9-50.1-72.6-95.4-72.6c-30.2,0-58.7,13.9-77.4,37.6
		c-14.7-14-35.3-20-55.2-16.1s-36.7,17.2-45.1,35.7c-14.2-23.5-37.1-52.6-70.1-57.6c-23.5-3.6-38.9,7-63.9,14... c-27.7,7.7-69.7,11.7-129-9c-1.1-22.3-8.8-43.7-22.2-61.5c-20.8-27.3-48.2-36.3-57.5-39.2c0,0-17.7-5.3-35.3-5.3
		c-53,0-99.6,35-114.3,85.9c-28.9-15.4-63.5-15.9-92.8-1.3c-42.4-80.8-135-121.5-223.2-98.1c0.2-2.3,0.3-4.7,0.3-7
		c0-32.3-20.1-61.2-50.3-72.6s-64.4-2.7-85.6,21.7c-17.2-14.6-37.4-25.2-59.2-31.2c0.1-2,0.2-4,0.2-5.9
		c-0.4-59.5-48.7-107.6-108.2-107.8S62.6,903.2,61.9,962.7c0,0.2,0,0.3,0,0.5v450.5h2100C2161.9,1302.8,2161.9,1192,2161.9,1081.1z
		 M328.9,1244.7h-0.7l0.7-0.5V1244.7z M1939.1,1319.2v-0.4c0.2,0.2,0.4,0.3,0.6,0.4H1939.1z" />
          <path className="st5" d="M0,782c0,0.2,0,0.3,0,0.5V782z" />
        </g>
      </svg>
    </div>
  );
}
