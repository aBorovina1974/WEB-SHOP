import React from "react";
import styles from "./Footer.module.scss";
import FooterItem from "./FooterItem/FooterItem";
import Newsletter from "./Newsletter/Newsletter";
import FacebookIcon from "../UI/icons/FacebookIcon";
import TwitterIcon from "../UI/icons/TwitterIcon";
import InstagramIcon from "../UI/icons/InstagramIcon";
import LogoIcon from "../UI/icons/LogoIcon";
import FooterItems from "../../data/footer.json";

const Footer = () => {
  const icons = {
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
  };

  return (
    <footer className={styles.footer}>
      <ul className={styles.items}>
        {FooterItems &&
          FooterItems.map((footerItem) => (
            <li key={footerItem.id}>
              <FooterItem
                items={{
                  type: footerItem.type,
                  main: footerItem.main,
                  list: footerItem.list,
                }}
                icons={icons}
              />
            </li>
          ))}
        <Newsletter />
      </ul>
      <hr />
      <LogoIcon className={styles.logo} />
    </footer>
  );
};

export default Footer;
