'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleContact = () => {
    if (selectedOption === 'whatsapp') {
      window.open('', '_blank');
    } else if (selectedOption === 'email') {
      window.open('', '_blank');
    }
  };

  return (
    <motion.footer
      id="contact"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="md:text-[64px] text-[44px]">
            <span className="font-extrabold text-sky-300">
              Franco Soluções TI
            </span>
          </h4>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="flex items-center h-fit py-4 px-6 bg-slate-200 rounded-[32px] gap-[12px] cursor-pointer
            hover:scale-110 hover:bg-gradient-to-r from-slate-300 from-sky-400 transition ease-in-out duration-500"
          >
            <option value="">Escolha um contato...</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
          {selectedOption && (
            <button
              type="button"
              onClick={handleContact}
              className="flex items-center h-fit py-4 px-6 bg-slate-200 rounded-[32px] gap-[12px] 
              hover:scale-110 hover:bg-gradient-to-r from-slate-300 from-sky-400 transition ease-in-out duration-500"
            >
              <span className="font-normal text-[16px] text-black">
                Entrar em Contato
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <h4 className="font-extrabold text-[24px] text-white">
              Franco Soluções TI
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2024 Franco Soluções TI. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
