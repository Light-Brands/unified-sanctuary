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
          <h2>What We&apos;re Building</h2>
          <p>
            Unified Sanctuaries is a regenerative community focused on food, housing, and belonging.
          </p>
          <p>
            We&apos;re searching for land in Southern Vermont to hold in trust—protected from speculation, stewarded for generations.
          </p>
        </div>
      </div>
    </Section>
  );
};
