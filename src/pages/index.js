import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary bg-gray-300 text-black dark:bg-gray-700 dark:text-white",
        styles.heroBanner
      )}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--lg bg-black mr-4 dark:text-white border-0"
            href="https://chiseleditor.com/login.html"
          >
            Log in
          </a>
          <Link
            className="button button--secondary button--lg bg-white dark:bg-gray-200 border-0"
            to="/docs/introduction"
          >
            Read docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Chisel Editor" description="An open source writing app">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
