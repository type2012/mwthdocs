import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'เข้าใจระบบเกม',
    Svg: require('@site/static/img/1000019532.svg').default,
    description: (
      <>
        อธิบายวิธีเล่น, ระบบ Battle Pass, วิธีรับรางวัล, และเทคนิคพื้นฐาน
      </>
    ),
  },
  {
    title: 'แก้ไขปัญหาเบื้องต้น',
    Svg: require('@site/static/img/1000019531.svg').default,
    description: (
      <>
        ให้คำแนะนำเกี่ยวกับปัญหาที่พบบ่อย เช่น การซื้อไอเทมไม่เข้า, การกู้คืนบัญชี, หรือการเชื่อมต่อเกม
      </>
    ),
  },
  {
    title: 'กฎและข้อกำหนด',
    Svg: require('@site/static/img/1000019533.svg').default,
    description: (
      <>
        อธิบายกฎของเกม, บทลงโทษสำหรับการโกง, และวิธีรักษาความปลอดภัยบัญชี
      </>
      ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
