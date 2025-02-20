import React from 'react';
import Title from '../components/Title';
import { motion } from "framer-motion";

const ShippingDelivery = () => {
  return (
    <div>
      {/* Shipping and Delivery Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start with low opacity and slightly higher position
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position (down to up)
        transition={{ duration: 1, delay: 0.2 }} // Smooth transition
        viewport={{ once: true }} // Animate only the first time the element comes into view 
        className="text-2xl text-center pt-8">
        <Title text1={'SHIPPING &'} text2={'DELIVERY POLICY'} />
      </motion.div>

      <div className="my-10 flex flex-col gap-6 px-6 text-sm text-gray-500">
        <p>
          <strong>PRO-WIN Healthcare Pvt. Ltd</strong> is committed to delivering your orders in a timely and secure manner. Please read the following shipping and delivery policy carefully to understand our process.
        </p>

        <h3 className="text-lg font-semibold">Shipping Timelines</h3>
        <ul className="list-disc ml-6">
          <li>Orders are processed within 1-2 business days after payment confirmation.</li>
          <li>Shipping times vary based on location, product availability, and courier partner efficiency.</li>
          <li>Estimated delivery timelines are as follows:</li>
          <ul className="list-disc ml-6">
            <li><strong>Metro Cities:</strong> 3-7 business days</li>
            <li><strong>Non-Metro Cities:</strong> 5-9 business days</li>
            <li><strong>Remote Areas:</strong> 7-15 business days</li>
          </ul>
          <li>Expedited shipping options may be available at an additional cost.</li>
        </ul>

        <h3 className="text-lg font-semibold">Delivery Process</h3>
        <ul className="list-disc ml-6">
          <li>We partner with reputed courier services to ensure safe and reliable delivery.</li>
          <li>A tracking number will be provided once the order is shipped.</li>
          <li>If the recipient is unavailable at the delivery address, re-attempts will be made as per the courier company’s policy.</li>
        </ul>

        <h3 className="text-lg font-semibold">Delays & Exceptions</h3>
        <ul className="list-disc ml-6">
          <li>Unforeseen circumstances like natural disasters, strikes, or pandemics may cause shipping delays.</li>
          <li>If your order is delayed beyond the expected timeframe, please contact us at <strong>contact@impactpure.com</strong> for assistance.</li>
        </ul>

        <h3 className="text-lg font-semibold">International Shipping</h3>
        <ul className="list-disc ml-6">
          <li>Currently, we do not offer international shipping.</li>
          <li>For bulk export orders, please reach out to our support team.</li>
        </ul>

        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p>
          For any queries related to shipping and delivery, please contact us at:
        </p>
        <p>
          <strong>PRO-WIN Healthcare Pvt. Ltd</strong><br/>
          Address: Enath Ghadi Marg Ambekar Nagar Parel Village G/13 Mumbai, Maharashtra 400012<br/>
          Phone: <strong>7738490103</strong><br/>
          Email: <strong>contact@impactpure.com</strong>
        </p>
      </div>
    </div>
  );
};

export default ShippingDelivery;
