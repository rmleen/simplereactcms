import React from 'react';

import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';
const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'UI/UX design',
    href: '/service/service-details',
  },
  {
    title: 'WP development',
    href: '/service/service-details',
  },
  {
    title: 'Digital marketing',
    href: '/service/service-details',
  },
  {
    title: 'React development',
    href: '/service/service-details',
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text } : any) {
  return (
    <footer className="cs-fooer">
      <div className="cs-fooer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.svg"
                  logoAlt="Logo"
                  text="Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium."
                />
                <SocialWidget />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cs-bottom_footer">
          <div className="cs-bottom_footer_left">
            <div className="cs-copyright">Copyright © 2022 Laralink.</div>
          </div>
          <div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
