import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation"; // Import SlideUp animation
import { SlideLeft } from "../../utility/animation"; // Import SlideUp animation


const Banner3 = ({ image, title, subtitle, link }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-14 gap-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }} // Start with low opacity and smaller scale
            whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }} // Smooth spring transition
            src={image}
            alt="Banner"
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] pl-2">
          {/* Title Animation (Up to Down) */}
          <motion.p
            variants={SlideLeft(0.5)} // Title should slide in from up to down
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-[#023047]"
            style={{ lineHeight: "1.8" }}
          >
            {title}
          </motion.p>

          {/* Subtitle Animation (Up to Down) */}
          <motion.p
            variants={SlideLeft(0.7)} // Subtitle should slide in from up to down
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600"
            style={{ lineHeight: "1.8" }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          {/* Button Animation */}
          <motion.div
            variants={SlideLeft(0.9)} // Button should slide in from up to down
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className="exp-btn">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
