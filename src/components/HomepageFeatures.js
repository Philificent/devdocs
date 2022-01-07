import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Highly Opinionated',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        When StackOverflow just isn't working, this is how we get to winning. Not for everyone, and may only work for a specific set of devs
      </>
    ),
  },
  {
    title: 'No fluff or faff',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        You have enough to worry about getting your project up and running, the last thing you need is to be slowed down trying to get stood up
      </>
    ),
  },
  {
    title: 'Powered by Science 🔬',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This statement is hilarious; anything that has been theorized, tried, and done again with the same result is literally done via Science 🤣
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
