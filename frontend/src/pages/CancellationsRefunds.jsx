import React from 'react';
import Title from '../components/Title';
import { motion } from "framer-motion";


const CancellationsRefunds = () => {
  return (
    <div>
      {/* Cancellations and Refunds Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Start with low opacity and slightly higher position
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position (down to up)
        transition={{ duration: 1, delay: 0.2 }} // Smooth transition
        viewport={{ once: true }} // Animate only the first time the element comes into view 
        className="text-2xl text-center pt-8">
        <Title text1={'CANCELLATIONS'} text2={'AND REFUNDS'} />
      </motion.div>

      <div className="my-10 flex flex-col gap-6 px-6 text-sm text-gray-500">
        <p>
          <strong>PRO-WIN Healthcare Pvt. Ltd</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
        </p>

        <ul className="list-disc ml-6">
          <li>Cancellations will be considered only if the request is made within 1-2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
          <li>PRO-WIN Healthcare Pvt. Ltd does not accept cancellation requests for perishable items like flowers, eatables, etc.</li>
          <li>However, refund/replacement can be made if the customer establishes that the quality of the product delivered is not good.</li>
          <li>In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 1-2 days of receipt of the products.</li>
          <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 1-2 days of receiving the product. The Customer Service Team, after looking into your complaint, will take an appropriate decision.</li>
          <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer to the issue to them.</li>
        </ul>

        <p>
          In case any refunds are approved by <strong>PRO-WIN Healthcare Pvt. Ltd</strong>, it’ll take 9-15 days for the refund to be processed to the end customer.
        </p>
      </div>
    </div>
  );
};

export default CancellationsRefunds;
