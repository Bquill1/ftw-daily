import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import css from './TermsOfService.css';


const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: October 26, 2020</p>

      <p>These terms and conditions (&quot;Agreement&quot;) sets forth the general terms and conditions of your use of the <a target="_blank" rel="nofollow" href="https://www.mybubblelink.com">mybubblelink.com</a> website (&quot;Website&quot; or &quot;Service&quot;) and any of its related products and services (collectively, &quot;Services&quot;). This Agreement is legally binding between you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) and BubbleLink Limited (&quot;BubbleLink&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). <br/>
      <br/>
      By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. <br/>
      <br/>
      If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms &quot;User&quot;, &quot;you&quot; or &quot;your&quot; shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services.<br/>
      <br/>
      You acknowledge that this Agreement is a contract between you and BubbleLink, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.</p>
      <h2>Accounts and membership</h2>
      <p>You must be at least 18 years of age to use the Website and Services. By using the Website and Services and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age.<br/>
       <br/>
       If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.<br/>
        <br/>
        We may monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.<br/>
         <br/>
         We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</p>
      <h2>User content</h2>
      <p>We do not own any data, information or material (collectively, &quot;Content&quot;) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.<br/>
       <br/>
       We may monitor and review the Content on the Website submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you.<br/>
        <br/>
        Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. You also grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose.</p>
      <h2>Billing and payments</h2>
      <p>You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable.<br/>
       <br/>
       If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase.<br/>
        <br/>
        We reserve the right to change products and product pricing at any time. We also reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.<br/>
         <br/>
         In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.</p>
      <h2>Accuracy of information</h2>
      <p>Occasionally there may be information on the Website that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, availability, promotions and offers. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information on the Website or Services is inaccurate at any time without prior notice (including after you have submitted your order).<br/>
       <br/>
       We undertake no obligation to update, amend or clarify information on the Website including, without limitation, pricing information, except as required by law. No specified update or refresh date applied on the Website should be taken to indicate that all information on the Website or Services has been modified or updated.</p>
      <h2>Third party services</h2>
      <p>If you decide to enable, access or use third party services, be advised that your access and use of such other services are governed solely by the terms and conditions of such other services, and we do not endorse, are not responsible or liable for, and make no representations as to any aspect of such other services, including, without limitation, their content or the manner in which they handle data (including your data) or any interaction between you and the provider of such other services.<br/>
       <br/>
       You irrevocably waive any claim against BubbleLink with respect to such other services. BubbleLink is not liable for any damage or loss caused or alleged to be caused by or in connection with your enablement, access or use of any such other services, or your reliance on the privacy practices, data security processes or other policies of such other services.<br/>
        <br/>
        You may be required to register for or log into such other services on their respective platforms. By enabling any other services, you are expressly permitting BubbleLink to disclose your data as necessary to facilitate the use or enablement of such other service.</p>
      <h2>Backups</h2>
      <p>We perform regular backups of the Website and its Content, however, these backups are for our own administrative purposes only and are in no way guaranteed. You are responsible for maintaining your own backups of your data.<br/>
       <br/>
       We do not provide any sort of compensation for lost or incomplete data in the event that backups do not function properly. We will do our best to ensure complete and accurate backups, but assume no responsibility for this duty.</p>
      <h2>Advertisements</h2>
      <p>During your use of the Website and Services, you may enter into correspondence with or participate in promotions of advertisers or sponsors showing their goods or services through the Website and Services. Any such activity, and any terms, conditions, warranties or representations associated with such activity, is solely between you and the applicable third party.<br/>
       <br/>
       We shall have no liability, obligation or responsibility for any such correspondence, purchase or promotion between you and any such third party.</p>
      <h2>Links to other resources</h2>
      <p>Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein.<br/>
       <br/>
       Some of the links on the Website may be &quot;affiliate links&quot;. This means if you click on the link and purchase an item, BubbleLink will receive an affiliate commission. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties.<br/>
        <br/>
        You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website and Services. Your linking to any other off-site resources is at your own risk.</p>
      <h2>Prohibited uses</h2>
      <p>In addition to other terms as set forth in the Agreement, you are prohibited from using the Website and Services or Content:<br/>
      <br/>
      (a) for any unlawful purpose;<br/>
       (b) to solicit others to perform or participate in any unlawful acts;<br/>
       (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;<br/>
       (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others;<br/>
       (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;<br/>
       (f) to submit false or misleading information;<br/>
       (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Website and Services, third party products and services, or the Internet;<br/>
       (h) to spam, phish, pharm, pretext, spider, crawl, or scrape;<br/>
       (i) for any obscene or immoral purpose;<br/>
       (j) to interfere with or circumvent the security features of the Website and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Website and Services for violating any of the prohibited uses.</p>
      <h2>Intellectual property rights</h2>
      <p>&quot;Intellectual Property Rights&quot; means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world.<br/>
      <br/>
      This Agreement does not transfer to you any intellectual property owned by BubbleLink or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with BubbleLink.<br/>
      <br/>
      All trademarks, service marks, graphics and logos used in connection with the Website and Services, are trademarks or registered trademarks of BubbleLink or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Website and Services may be the trademarks of other third parties.<br/>
       <br/>
      Your use of the Website and Services grants you no right or license to reproduce or otherwise use any of BubbleLink or third party trademarks.</p>
      <h2>Disclaimer of warranty</h2>
      <p>You agree that such Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis and that your use of the Website and Services is solely at your own risk. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.<br/>
      <br/>
      We make no warranty that the Services will meet your requirements, or that the Service will be uninterrupted, timely, secure, or error-free; nor do we make any warranty as to the results that may be obtained from the use of the Service or as to the accuracy or reliability of any information obtained through the Service or that defects in the Service will be corrected.<br/>
      <br/>
      You understand and agree that any material and/or data downloaded or otherwise obtained through the use of Service is done at your own discretion and risk and that you will be solely responsible for any damage or loss of data that results from the download of such material and/or data.<br/>
      <br/>
      We make no warranty regarding any goods or services purchased or obtained through the Service or any transactions entered into through the Service unless stated otherwise. No advice or information, whether oral or written, obtained by you from us or through the Service shall create any warranty not expressly made herein.</p>
      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by applicable law, in no event will BubbleLink, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages.<br/>
      <br/>
      To the maximum extent permitted by applicable law, the aggregate liability of BubbleLink and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to BubbleLink for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</p>
      <h2>Indemnification</h2>
      <p>You agree to indemnify and hold BubbleLink and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website and Services or any willful misconduct on your part.</p>
      <h2>Severability</h2>
      <p>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable.<br/>
       <br/>
       If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</p>
      <h2>Dispute resolution</h2>
      <p>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Ireland without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of Ireland.<br/>
       <br/>
       The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Ireland, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement.<br/>
        <br/>
       The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</p>
      <h2>Assignment</h2>
      <p>You may not assign, resell, sub-license or otherwise transfer or delegate any of your rights or obligations hereunder, in whole or in part, without our prior written consent, which consent shall be at our own sole discretion and without obligation; any such assignment or transfer shall be null and void.<br/>
       <br/>
       We are free to assign any of its rights or obligations hereunder, in whole or in part, to any third party as part of the sale of all or substantially all of its assets or stock or as part of a merger.</p>
      <h2>Changes and amendments</h2>
      <p>We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the top of this page. Continued use of the Website and Services after any such changes shall constitute your consent to such changes.</p>
      <h2>Acceptance of these terms</h2>
      <p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services.</p>
      <h2>Contacting us</h2>
      <p>If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to <a href="mailto:support@mybubblelink.com">support@mybubblelink.com</a></p>

    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
