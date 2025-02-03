import React from "react";
import { motion } from "framer-motion";

const LoyaltyPoints = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f0f0f0] p-10">
      <motion.h1
        className="text-4xl font-bold text-[#6996c8] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Loyalty Points Program
      </motion.h1>

      <motion.p
        className="text-xl mb-6 text-center text-[#4B3B2F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Learn more about our Loyalty Points program and how you can earn rewards!
      </motion.p>

      {/* Loyalty Points Info Section */}
      <div className="bg-white p-8 rounded-lg shadow-xl mb-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-[#6996c8] mb-4">
          How It Works
        </h2>
        <p className="text-lg text-[#4B3B2F] mb-4">
          Earn loyalty points with every purchase! Here's how it works:
        </p>
        <ul className="list-disc pl-5 text-[#4B3B2F] text-lg">
          <li>Earn 1 point for every Rp 10,000 spent at Nimbus Coffee.</li>
          <li>Redeem your points for exciting rewards like discounts and freebies.</li>
          <li>Check your points balance anytime in your account dashboard.</li>
          <li>Invite friends and earn bonus points when they join the program!</li>
        </ul>
      </div>

      {/* Rewards Table */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl mb-8 max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold text-[#6996c8] mb-4">Rewards</h2>
        <table className="min-w-full table-auto text-[#4B3B2F]">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Points</th>
              <th className="py-3 px-4 border-b">Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b">100 Points</td>
              <td className="py-3 px-4 border-b">Rp 20,000 Discount</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">250 Points</td>
              <td className="py-3 px-4 border-b">Free Coffee of Your Choice</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">500 Points</td>
              <td className="py-3 px-4 border-b">Nimbus Coffee Tumbler</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Join Program Button */}
      <motion.div
        className="bg-[#6996c8] text-white py-4 px-8 rounded-full cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-center text-2xl font-semibold">Join the Program Now</h3>
      </motion.div>

      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-lg shadow-xl mt-8 mb-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-[#6996c8] mb-4">Frequently Asked Questions</h2>
        <ul className="list-decimal pl-5 text-[#4B3B2F]">
          <li>
            <strong>Q: How do I redeem my points?</strong>
            <p>A: You can redeem your points through the rewards section in your account dashboard.</p>
          </li>
          <li>
            <strong>Q: Can I use my points in combination with other discounts?</strong>
            <p>A: Unfortunately, loyalty points cannot be combined with other offers or discounts.</p>
          </li>
          <li>
            <strong>Q: How do I track my points?</strong>
            <p>A: You can track your points balance in your account or check your receipt after every purchase.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoyaltyPoints;
