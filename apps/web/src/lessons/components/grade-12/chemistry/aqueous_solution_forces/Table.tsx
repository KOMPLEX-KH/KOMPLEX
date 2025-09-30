import React from "react";
import { InlineMath } from "react-katex";


const ChemisTables = () => {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-max border border-gray-300 rounded-lg text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-300 px-4 py-2 text-left bg-indigo-600  text-white">
              ប្រភេទសារធាតុ
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-indigo-600 text-white">
              និយមន័យប្រេី
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-indigo-600 text-white">
              ភាពរូប
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-indigo-600 text-white">
              ចំណុចរលាយ °C
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left bg-indigo-600 text-white">
              ចំណុចរំពុះ °C
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="KCl" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              អំបិលជំនួស
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              រឹង
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">770</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              1420
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="NaCl" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              អំបិលសម្ល
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              រឹង
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">801</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              1413
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="CaF_{2}" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              ភ្លុយអរកម្មក្នុងទឹក
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              រឹង
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              1423
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              2500
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="CH_{4}" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              ឧស្ម័នធម្មជាតិ
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              ឧស្ម័ន
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              -182
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              -164
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="CH_{3}COOCH_{2}CH_{3}" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              ទឹកលាងក្រចក
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              រាវ
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              -84
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">77</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="H_{2}O" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              ប្រេីច្រេីនមុខ
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              រាវ
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">0</td>
            <td className="border border-gray-300 px-4 py-2 text-center">100</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-xs sm:text-sm">
              <InlineMath math="C_{17}H_{36}" />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              ក្រមួនទៀន
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              រឹង
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">22</td>
            <td className="border border-gray-300 px-4 py-2 text-center">302</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChemisTables;