import React from "react";
import FooterList from "./FooterList/FooterList";
import Newsletter from "./Newsletter/Newsletter";
import FacebookIcon from "../UI/icons/FacebookIcon";
import TwitterIcon from "../UI/icons/TwitterIcon";
import InstagramIcon from "../UI/icons/InstagramIcon";
import LogoIcon from "../UI/icons/LogoIcon";
import FooterItems from "../../data/footer.json";
import FooterItem from "./FooterItem/FooterItem";
import styles from "./Footer.module.scss";

const Footer = () => {
  const icons = {
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
  };

  return (
    <footer className={styles.footer}>
      <LogoIcon className={styles.logo} />
      <ul className={styles.items}>
        {FooterItems &&
          FooterItems.map((footerItem) => (
            <li key={footerItem.id}>
              <FooterItem title={footerItem.title} toggle={true}>
                <FooterList
                  items={{
                    type: footerItem.type,
                    list: footerItem.list,
                  }}
                  icons={icons}
                />
              </FooterItem>
            </li>
          ))}
        <FooterItem title="JOIN US" toggle={false}>
          <Newsletter />
        </FooterItem>
      </ul>
      <hr />
    </footer>
  );
};

export default Footer;
