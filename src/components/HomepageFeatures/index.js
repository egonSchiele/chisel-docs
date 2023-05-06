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
      image: useBaseUrl("/img/ask-question.png"),
      title: "Talk to your text",
      text: "Ask questions and get answers from your text.",
    },
    {
      image: useBaseUrl("/img/folds.png"),
      title: "Folds",
      text: "Got a lot of text? Hide the parts you are not working on.",
    },

    /*   {
      image: useBaseUrl("/img/gridmode.png"),
      title: "Grid mode",
      text: "Organize your chapters by act or by beat using grid mode.",
    }, */
    {
      image: useBaseUrl("/img/diff.png"),
      title: "Diff mode",
      text: "Compare two versions of your writing side-by-side.",
    },

    {
      image: useBaseUrl("/img/launcher.png"),
      title: "Quick-launch",
      text: "Navigate the UI, go to a chapter, or run an AI prompt, all without touching the mouse.",
    },
    {
      image: useBaseUrl("/img/done.png"),
      title: "Chapter statuses",
      text: "Easily see what's in progress and what's done.",
    },
    {
      image: useBaseUrl("/img/character-sheet.png"),
      title: "Character sheets",
      text: "Keep track of your characters and their relationships.",
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
