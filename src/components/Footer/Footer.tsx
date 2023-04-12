import s from './Footer.module.scss';
import Link from 'next/link';
import {useRouter} from "next/router";
import React from 'react';
import { BsTelegram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

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
        <div className={s.contactsLinkWrapper}>
          <IoLogoWhatsapp />
          <Link href='https://wa.me/79513339923' target='_blank' className={s.whatsapp}>whatsapp</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
