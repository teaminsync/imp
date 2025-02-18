import React from 'react';
import Title from '../components/Title';
import { motion } from "framer-motion";

const PP = () => {
  return (
    <div>
      {/* Privacy Policy Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start with low opacity and slightly higher position
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position (down to up)
        transition={{ duration: 1, delay: 0.2 }} // Smooth transition
        viewport={{ once: true }} // Animate only the first time the element comes into view 
        className="text-2xl text-center pt-8">
        <Title text1={'PRIVACY'} text2={'POLICY'} />
      </motion.div>

      <div className="my-10 flex flex-col gap-6 px-6 text-sm text-gray-500">
        <p>
          This privacy policy sets out how <strong>PRO-WIN Healthcare Pvt. Ltd</strong> uses and protects any information that you give PRO-WIN Healthcare Pvt. Ltd when you visit their website and/or agree to purchase from them. PRO-WIN Healthcare Pvt. Ltd is committed to ensuring that your privacy is protected.
        </p>

        <p>
          Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement. PRO-WIN Healthcare Pvt. Ltd may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
        </p>

        <p>
          We may collect the following information:
        </p>
        <ul className="list-disc ml-6">
          <li>Name</li>
          <li>Contact information including email address</li>
          <li>Demographic information such as postcode, preferences and interests, if required</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <p>
          What we do with the information we gather:
        </p>
        <ul className="list-disc ml-6">
          <li>Internal record keeping.</li>
          <li>We may use the information to improve our products and services.</li>
          <li>We may periodically send promotional emails about new products, special offers, or other information which we think you may find interesting using the email address which you have provided.</li>
          <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax, or mail.</li>
          <li>We may use the information to customise the website according to your interests.</li>
        </ul>

        <p>
          We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in suitable measures.
        </p>

        <p>
          How we use cookies:
        </p>
        <p>
          A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences. 
        </p>

        <p>
          We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not.
        </p>

        <p>
          A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
        </p>

        <p>
          Controlling your personal information:
        </p>
        <p>
          You may choose to restrict the collection or use of your personal information in the following ways:
        </p>
        <ul className="list-disc ml-6">
          <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
          <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <strong>contact@impactpure.com</strong></li>
        </ul>

        <p>
          We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
        </p>

        <p>
          If you believe that any information we are holding on you is incorrect or incomplete, please write to <strong>Enath Ghadi Marg Ambekar Nagar Parel Village G/13 Mumbai MAHARASHTRA 400012</strong> or contact us at <strong>7738490103</strong> or <strong>contact@impactpure.com</strong> as soon as possible. We will promptly correct any information found to be incorrect.
        </p>
      </div>
    </div>
  );
};

export default PP;
