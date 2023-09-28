// components/Timeline.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Styles from './Timeline.module.scss';

const TimelineEntry = ({ year, text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <span className={Styles.year}>{year}</span>
      <p className={inView ? Styles.appear : ''}>{text}</p>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className={Styles.timeline}>
      <TimelineEntry year="2021" text="Lorem" />
      <TimelineEntry year="2022" text="Lorem" />
      <TimelineEntry year="2022" text="Lorem" />
      <TimelineEntry year="2023" text="Lorem" />
    </div>
  );
};

export default Timeline;
