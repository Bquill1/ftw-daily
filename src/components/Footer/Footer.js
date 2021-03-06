import classNames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import {
    ExternalLink, IconSocialMediaFacebook,
    IconSocialMediaInstagram,
    IconSocialMediaTwitter,
    Logo,

    NamedLink
} from '../../components';
import config from '../../config';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { twitterPageURL } from '../../util/urlHelpers';
import css from './Footer.css';


const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink
    key="linkToFacebook"
    href={siteFacebookPage}
    className={css.icon}
    title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <span className={css.logo}>
                  <Logo format="desktop" />
                </span>
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
            <div className={css.infoLinksWrapper}>
              <div className={css.infoLinks}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <b> <FormattedMessage id="Footer.aboutHeading" /> </b>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="AboutPage" className={css.link}>
                      <FormattedMessage id="Footer.toAboutPage" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="ContactUsPage" className={css.link}>
                      <FormattedMessage id="Footer.toContactPage" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="BlogPage" className={css.link}>
                      <FormattedMessage id="Footer.toBlogPage" />
                    </NamedLink>
                  </li>
                  {/* <li className={css.listItem}>
                  <NamedLink name="HostPage" className={css.link}>
                  <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                  </li>
                  <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                  <FormattedMessage id="Footer.toHelpPage" />
                  </NamedLink>
                  </li>
                  <li className={css.listItem}>
                  <NamedLink name="AboutPage" to={{ hash: '#contact' }} className={css.link}>
                  <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink>
                </li> */}
                </ul>
              </div>
              <div className={css.infoLinks}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <b> <FormattedMessage id="Footer.communityHeading" /> </b>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="HostPage" className={css.link}>
                      <FormattedMessage id="Footer.toFAQPage" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="LandingPage" className={css.link}>
                      <FormattedMessage id="Footer.toHelpPage" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="PartnershipPage"  className={css.link}>
                      <FormattedMessage id="Footer.toPartnerPage" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
              <div className={css.infoLinks}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <b> <FormattedMessage id="Footer.legalHeading" /> </b>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="TermsOfServicePage" className={css.link}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="PrivacyPolicyPage" className={css.link}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                {/*  <li className={css.listItem}>
                    <NamedLink name="PrivacyPolicyPage" className={css.link}>
                      <FormattedMessage id="Footer.bookingTerms" />
                    </NamedLink>
                  </li> */}
                </ul>
              </div>
              <div className={css.extraLinks}>
              {socialMediaLinks}
              </div>
            </div>
            <div className={css.copyrightAndTermsMobile}>
              <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
                <FormattedMessage id="Footer.copyright" />
              </NamedLink>
              <div className={css.tosAndPrivacyMobile}>
                <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                  <FormattedMessage id="Footer.privacy" />
                </NamedLink>
                <NamedLink name="TermsOfServicePage" className={css.terms}>
                  <FormattedMessage id="Footer.terms" />
                </NamedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
