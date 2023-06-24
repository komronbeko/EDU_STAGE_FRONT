import React from "react";
import { Typography } from "@material-tailwind/react";
import { SITEMAP, ICONS } from "./data";
import Form from "./Form";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-blue">
      <div className="mx-auto w-full max-w-7xl px-8 container">
        <div className="mx-auto grid w-full grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-6">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography className="mb-4 font-bold font-rubik text-white">
                {title}
              </Typography>
              <ul className="space-y-1 font-roboto text-gray">
                {links.map((link, key) => (
                  <Typography key={key} as="li" className="font-normal">
                    <a
                      href="/"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105">
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col">
            <div className="mb-4 font-bold font-rubik text-white">
              Newsletter
            </div>
            <div className="font-normal">
              <p className="text-gray w-60 sm:w-96">
                You can trust us. we only send promo offers
              </p>
              <Form />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-gray md:mb-0">
            Copyright &copy; {currentYear} All Rights Reserved.| This template
            is made with &#9825; by Umarbek and Komronbek.
          </Typography>
          <nav className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {ICONS.map(({ id, link, svg }) => (
              <a
                key={id}
                href={link}
                className="opacity-80 transition-opacity hover:opacity-100">
                <svg
                  className="h-5 w-5"
                  fill="gray"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path fillRule="evenodd" d={svg} clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
