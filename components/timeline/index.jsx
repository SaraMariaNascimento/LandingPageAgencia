import React from 'react';
import { useInView } from 'react-intersection-observer';
import Styles from './Timeline.module.scss';

const generateTimelineEntry = (year, text, alignRight) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className={`${Styles.timelineEntry} ${alignRight ? Styles.alignRight : ''}`}
      ref={ref}
      style={{ opacity: inView ? 1 : 0 }}
      key={year}
    >
      <span className={Styles.year}>{year}</span>
      <p>{text}</p>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.container_title}>
        <h2>Nossa trajetória</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      <div className={Styles.timeline}>
        <div className={Styles.leftText}>
          {generateTimelineEntry("2019", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", true)}
        </div>
        {generateTimelineEntry("2020", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false)}
        <div className={Styles.leftText}>
          {generateTimelineEntry("2021", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", true)}
        </div>
        {generateTimelineEntry("2022", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", false)}
        <div className={Styles.leftText}>
          {generateTimelineEntry("2023", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", true)}
        </div>
      </div>
    </div>

  );
};

export default Timeline;
