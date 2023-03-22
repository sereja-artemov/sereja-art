import s from './Footer.module.scss';
import { navigationRoutes } from '@/data/navigationRoutes';
import Link from 'next/link';
import {useRouter} from "next/router";
import { activeLink } from '@/utils/utils';
import React from 'react';
import { router } from 'next/client';
import { BsTelegram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
  const router = useRouter();

  return (
    <footer className={s.footer}>
      <div className={s.contacts}>
        <div className={s.contactsLinkWrapper}>
          <MdEmail />
          <Link href='mailto:artemov46@gmail.com' target='_blank' className={s.email}>artemov46@gmail.com</Link>
        </div>
        <div className={s.contactsLinkWrapper}>
          <BsTelegram />
          <Link href='https://t.me/sereja_art' target='_blank' className={s.telegram}>@sereja_art</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
