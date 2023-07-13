import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import eigenLayerPng from '@site/static/img/eigenlayer.png'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    //<header className={clsx('hero hero--primary', styles.heroBanner)}>
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className={clsx(styles.featurePng)} src={eigenLayerPng} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles["button--eigen"])}
            to="/docs/introduction">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This document specifies the packaging, installation, updating, and monitoring of Eigen Layer nodes.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
