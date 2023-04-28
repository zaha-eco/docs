import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import FeaturesBanner from "@site/static/img/features-banner.svg";
import * as foo from "@site/static/img/supply-burndown.gif";

const FeatureList = [
  {
    title: "Remote Technician™",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Img: () => <img src={"img/remote-technician-start.gif"} />,
    description: (
      <>
        Save your technician a trip to your customer’s office by securely and
        remotely accessing any connected device’s embedded web page as if you
        were on site.
      </>
    ),
  },
  {
    title: "Advanced Reporting",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Img: () => <img src={"img/supply-burndown.gif"} />,
    description: (
      <>
        Get the data you need to make informed decisions about your fleet. Our
        advanced reporting tools allow you to see the big picture and drill down
        to the details.
      </>
    ),
  },
  {
    title: "Power Users",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Img: () => <img src={"img/custom-reports-creating-report.gif"} />,
    description: (
      <>
        Are you a power user? Harness the power of SQL to dig deep into your
        data. Create custom reports and schedule them to run automatically.
      </>
    ),
  },
  {
    title: "Find Everything",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Img: () => <img src={"img/managing-supplies-filter-sort.gif"} />,
    description: (
      <>
        Trying to track down a device, supply or an alert? Search, sort and
        export your data to find what you need.
      </>
    ),
  },
  // {
  //   title: "Focus on What Matters",
  //   Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: "Powered by React",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ Img, title, description, className }) {
  return (
    <div className={className ?? clsx("col col--6")}>
      <div className="text--center">{Img && <Img />}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <FeaturesBanner />
        <div style={{ height: "50px" }} />

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div style={{ height: "50px" }} />
        {/*<img src={"img/insights-banner.png"} />*/}
        {/*<div style={{ height: "50px" }} />*/}
        {/*<Feature*/}
        {/*  title="Estimate Supply Depletion"*/}
        {/*  description={*/}
        {/*    "Do you want to be proactive about supply management? Print Tracker automatically analyzes historical printing behaviors to estimate when supplies are low."*/}
        {/*  }*/}
        {/*  className={clsx("col col--12")}*/}
        {/*  // Img={() => <img src={"img/custom-reports-creating-report.gif"} />}*/}
        {/*/>*/}
      </div>
    </section>
  );
}
