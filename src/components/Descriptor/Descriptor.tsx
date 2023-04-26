import s from './Descriptor.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  popUpFromBottomForText, popUpFromBottomWithRotate
} from '@/utils/framerMotionVariants';
import sereja from '@/images/sereja/sereja6.png';
import Link from 'next/link';
import { GiNinjaHead } from 'react-icons/gi';

export default function Descriptor() {
  const [isSerejaImageActive, setIsSerejaImageActive] = useState(false);

  return (
    <motion.div initial='hidden'
                whileInView='visible'
                variants={popUpFromBottomForText}
                viewport={{ once: true }} className={`${s.descriptor} container`}>
      <div className={s.contentWrapper}>
        <h1 className={s.title}>
          <svg
            className={s.bgBlob}
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 500 500'
            width='100%'
            id='blobSvg'
            // transform="rotate(qs18)"
            style={{ opacity: .6 }}
            filter='url(#f1)'
          >
            {' '}
            <defs>
              {' '}
              <filter id='f1' x='0' y='0'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='8' />
              </filter>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                {' '}
                <stop offset='0%' style={{ stopColor: 'rgb(202, 158, 255)' }} />
                {' '}
                <stop offset='100%' style={{ stopColor: 'rgb(0 87 255 / 0%)' }} />
                {' '}
              </linearGradient>
              {' '}
            </defs>
            {' '}
            <path id='blob' fill='url(#gradient)' style={{ opacity: 1 }}>
              <animate
                attributeName='d'
                dur='5400ms'
                repeatCount='indefinite'
                values='M428.39652,310.63781Q395.12039,371.27562,337.58607,396.3189Q280.05174,421.36219,204.00896,441.94775Q127.96619,462.5333,107.32787,385.81839Q86.68955,309.10348,96.33581,253.18955Q105.98207,197.27562,134.68904,148.26665Q163.396,99.25769,224.43929,74.05174Q285.48258,48.8458,334.83632,93.40548Q384.19006,137.96516,422.93135,193.98258Q461.67264,250,428.39652,310.63781Z;M453.57191,328.53752Q437.08754,407.07503,364.57816,448.74386Q292.06878,490.41269,219.55628,459.1657Q147.04377,427.91871,108.99375,371.46874Q70.94372,315.01876,56.52814,244.52814Q42.11255,174.03752,86.02814,107.96874Q129.94372,41.89995,209.98749,31.84993Q290.03126,21.79991,346.01876,71.89683Q402.00625,121.99375,436.03126,185.99687Q470.05628,250,453.57191,328.53752Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M419.06254,317.79517Q411.11118,385.59033,349.66843,425.59894Q288.22568,465.60755,228.34547,428.45831Q168.46526,391.30906,120.24124,353.19622Q72.01722,315.08338,69.86103,249.40801Q67.70483,183.73263,103.47221,120.73263Q139.23958,57.73263,215.36631,36.75347Q291.49305,15.77432,346.41495,69.35242Q401.33686,122.93051,414.17538,186.46526Q427.0139,250,419.06254,317.79517Z;M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z;M428.39652,310.63781Q395.12039,371.27562,337.58607,396.3189Q280.05174,421.36219,204.00896,441.94775Q127.96619,462.5333,107.32787,385.81839Q86.68955,309.10348,96.33581,253.18955Q105.98207,197.27562,134.68904,148.26665Q163.396,99.25769,224.43929,74.05174Q285.48258,48.8458,334.83632,93.40548Q384.19006,137.96516,422.93135,193.98258Q461.67264,250,428.39652,310.63781Z'
              />
            </path>
          </svg>
          <span className={s.text}>Привет, я</span> <span onMouseOver={() => setIsSerejaImageActive(true)}
                                                          onMouseLeave={() => setIsSerejaImageActive(false)}
                                                          className={s.stroke}> SEREJA

          {isSerejaImageActive &&
            <motion.div animate={isSerejaImageActive ? 'visible' : 'hidden'}
                        variants={popUpFromBottomWithRotate} className={s.serejaImg}>
              <Image src={sereja} alt='Сергей Артемов - веб-разработчик фото' />
            </motion.div>
          }

        </span> <br />
          <span className={s.text}>фронтенд-разработчик</span>
        </h1>
        <motion.p initial='hidden'
                  whileInView='visible'
                  variants={popUpFromBottomForText}
                  viewport={{ once: true }} className={s.description}>👋 Проведу исследование и сделаю современный и быстрый сайт. <br/>
          Затем приведу клиентов с помощью контекстной рекламы и SMM.
        </motion.p>
        <Link className={`${s.btn} btn btn--light`} href={'https://hh.ru/resume/bc6faab9ff0b4ddbed0039ed1f697661364845'}
              target='_blank'>
          <GiNinjaHead className={s.resumeIcon} />
          Посмотреть резюме
        </Link>
      </div>
    </motion.div>
  );
}
