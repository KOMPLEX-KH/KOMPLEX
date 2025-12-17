// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import { Lightbulb } from "lucide-react";

// export default function TipCard() {
//   const [showTip, setShowTip] = useState(false);

//   const getStudyTip = () => {
//     const tips = [
//       "ព្យាយាមរៀនជារៀងរាល់ថ្ងៃ ២០-៣០នាទី",
//       "ធ្វើកំណត់ត្រាសង្ខេបនៃមេរៀនសំខាន់ៗ",
//       "ស្វែងយល់ពីគំនិតជំនួសការចងចាំ",
//       "សួរសំណួរនៅពេលមិនយល់",
//       "ធ្វើលំហាត់បន្ថែមសម្រាប់មុខវិជ្ជាពិបាក"
//     ];
//     return tips[Math.floor(Math.random() * tips.length)];
//   };

//   return (
//     <>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setShowTip(!showTip)}
//         className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2 mx-auto mt-5 hover:bg-green-600 transition-colors"
//       >
//         <Lightbulb className="w-6 h-6" />
//         មតិយោបល់
//       </motion.button>

//       <AnimatePresence>
//         {showTip && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="mt-6 bg-green-100 rounded-2xl p-6 border-2 border-green-300"
//           >
//             <p className="text-gray-800 text-xl font-medium">{getStudyTip()}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
