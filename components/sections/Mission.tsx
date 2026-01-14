import React from 'react';
import { Section } from '../ui';
import styles from './Mission.module.css';

export const Mission: React.FC = () => {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.visual}>
          <div className={styles.vessel}></div>
        </div>
        <div className={styles.text}>
          <h2>Land Heals People.<br/>People Heal Land.</h2>
          <p>
            Unified Sanctuaries is a regenerative, land-based community committed to meeting
            our basic needs of food, housing, and belonging within a supportive,
            earth-centered environment.
          </p>
          <p>
            We&apos;re in the pre-land phase, actively searching for property in Southern Vermont
            and forming the legal structures to hold it in trust—protected from speculation and
            stewarded for generations to come.
          </p>
        </div>
      </div>
    </Section>
  );
};
