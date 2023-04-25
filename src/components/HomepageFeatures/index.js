import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Feature({ image, title, text }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={image}
          className={`${styles.featureimage} rounded-lg border-2 border-gray-500`}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const features = [
    {
      image: useBaseUrl("/img/history.png"),
      title: "History",
      text: "Git-like history lets you track every change, so nothing is ever lost.",
    },
    {
      image: useBaseUrl("/img/prompts.png"),
      title: "AI prompts",
      text: "Built-in AI prompts like expand, contract, and rewrite... and it's easy to add your own.",
    },
    {
      image: useBaseUrl("/img/launcher.png"),
      title: "Quick-launch",
      text: "Navigate the UI, go to a chapter, or run an AI prompt, all without touching the mouse.",
    },
    {
      image: useBaseUrl("/img/gridmode.png"),
      title: "Grid mode",
      text: "Organize your chapters by act or by beat using grid mode.",
    },
    {
      image: useBaseUrl("/img/focusmode.png"),
      title: "Focus mode",
      text: "Get feedback on your writing.",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
