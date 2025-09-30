import React from 'react'
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'

const ADNFormulars = () => {
    return (
        <div className='w-full h-full flex flex-col items-start'>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>១. ដេីម្បីរកប្រវែងម៉ូលេគុល ADN</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>ដោយពីនុយក្លេអូទីតមួយ ទៅនុយក្លេអូទីតមួយទៀតមានប្រវែង 0.34 nm</p>
                    <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
                    <p>_ <InlineMath math="l" /> ប្រវែងម៉ូលេគុល ADN គិតជា nm</p>
                    <p>_ <InlineMath math="M" /> ចំនួននុយក្លេអូទីតទាំងអស់របស់ម៉ូលេគុល ADN</p>
                </div>
            </div>

            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>២. ដេីម្បីរកចំនួនជំហាន ឬរង្វេលនៃម៉ូលេគុល ADN</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>ដោយមួយជំហានឬរង្វេលមានប្រវែង 0.34 nm</p>
                    <p><InlineMath math="\Rightarrow " /> ចំនួនជំហានឬរង្វេល = <InlineMath math="\frac{l}{3.4}" /></p>
                    <p>ដោយ1ជំហានឬ1រង្វេលស្មេីនឹង20នុយក្លេអូទីត</p>
                    <p><InlineMath math="\Rightarrow " /> ចំនួនជំហានឬរង្វេល = <InlineMath math="\frac{M}{20}" /></p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៣. ដេីម្បីរកM</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>
                    <InlineMath math="\Rightarrow M = A + T + C + G" />
                    <InlineMath math="M = 2A + 2C = 2T + 2G = 2A + 2G = 2T + 2C" />
                </div>
            </div>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៤. ដេីម្បីរកM</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>បេីគេប្រាប់ចំនួននុយក្លេអូទីតប្រភេទនីមួយៗ និងប្រាប់សមាមាត្រភាគរយនុយក្លេអូទីតនីមួយៗ</p>
                    <InlineMath math="\Rightarrow M = \frac{A \times 100}{\%A} = \frac{T \times 100}{\%T}" />
                    <InlineMath math="\Rightarrow M = \frac{C \times 100}{\%C} = \frac{G \times 100}{\%G}" />
                </div>
            </div>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៥. ដេីម្បីរកចំនួនសម្ព័ន្ធអុីដ្រូសែនសរុប</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>A ភ្ជាប់ T ដោយសម្ព័ន្ធអុីដ្រូសែន 2</p>
                    <p>C ភ្ជាប់ G ដោយសម្ព័ន្ធអុីដ្រូសែន 3</p>
                    <InlineMath math="\Rightarrow L = 2A + 3C = 2A + 3G = 2T + 3G = 2T + 3C" />
                    <p>_ <InlineMath math="L" /> ចំនួនសម្ព័ន្ធអុីដ្រូសែនសរុបក្នុងម៉ូលេគុល ADN</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៦. ដេីម្បីរកចំនួនសម្ព័ន្ធគីមីក្នុងម៉ូលេគុល ADN</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>ដោយនុយក្លេអូទីត 2 ចងភ្ជាប់គ្នាដោយសម្ព័ន្ធគីមី 1ក្នុងច្រវ៉ាក់ម្ខាងៗរបស់ ADN</p>
                    <p><InlineMath math="\Rightarrow " /> ចំនួនសម្ព័ន្ធគីមី = <InlineMath math="M - 2 " /></p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៧. ដេីម្បីរកម៉ាសម៉ូលេគុល ADN</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>ដោយនុយក្លេអូទីត 1មានម៉ាសម៉ូលេគុលជាមធ្យម 300ខ្នាតកាបូន</p>
                    <p><InlineMath math="\Rightarrow " /> ចំនួនម៉ាសម៉ូលេគុលADN = <InlineMath math="M \times 300" /></p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៨. ដេីម្បីរកនុយក្លេអូទីតសេរី</h2>
                <ul className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full list-disc'>
                    <li>បេីម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ 1ដង <InlineMath math="\Rightarrow " /> ចំនួន ADN កេីតថ្មី= <InlineMath math="2^{1} - 1 = 1 " /> ដូចនេះចំនួននុយក្លេអូទីតសេរីចាំបាច់សម្រាប់ស្វ័យដំឡេីងទ្វេគឺស្មេីចំនួននុយក្លេអូទីតរបស់ម៉ូលេគុល ADNមេ</li>
                    <InlineMath math="\Rightarrow M' = M" />
                    <li>បេីម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ nដង</li>
                    <p>_ រកចំនួននុយក្លេអូទីតសេរីទាំងអស់</p>
                    <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
                    <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
                    <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
                    <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
                    <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
                    <p>ដោយម៉ូលេគុលADN ស្វ័យដំឡេីងទ្វេ n ដង បង្កេីតបានADNកូន = <InlineMath math="2^{n}" /> ដែលក្នុងនោះមានADNមេ1</p>
                    <p><InlineMath math="\Rightarrow " /> ចំនួនADNកេីតថ្មី = <InlineMath math="2^{n} - 1" /></p>
                    <InlineMath math="\Rightarrow M' = M_{ADN} \cdot (2^{n} - 1)" />
                    <li>រកចំនួននុយក្លេអូទីតសេរីប្រភេទនីមួយៗ</li>
                    <InlineMath math="\Rightarrow A' = T' = A(2^{n} - 1) = T(2^{n} - 1)" />
                    <InlineMath math="\Rightarrow C' = G' = C(2^{n} - 1) = G(2^{n} - 1)" />
                    <p>_ ដេីម្បីរកចំនួននុយក្លេអូទីតសរុបក្នុងម៉ូលេគុល ADN កូនដែលកេីតពេលស្វ័យដំឡេីងទ្វេ n ដង</p>
                    <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
                    <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
                    <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
                    <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
                    <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
                    <p>ដោយម៉ូលេគុល ADNស្វ័យដំឡេីងទ្វេnដង បង្កេីតបានADNកូន = <InlineMath math="2^{n} " /></p>
                    <InlineMath math="\Rightarrow M_{សរុបADNកូន} = M \times 2^{n}" />
                </ul>
                <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                    <h2 className='font-bold text-xl'>៩. ដេីម្បីរកភាគរយនុយក្លេអូទីតប្រភេទនីមួយៗ</h2>
                    <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                        <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>
                        <InlineMath math="\Rightarrow \%A + \%T + \%C + \%G = 100\%" />
                        <InlineMath math="\Rightarrow \%2A + \%2C = 100\%" />
                        <InlineMath math="\Rightarrow \%A = \%T = 50\% - \%C = 50\% - \%G" />
                        <InlineMath math="\Rightarrow \%C = \%G = 50\% - \%A = 50\% - \%T" />
                    </div>
                </div>

                <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                    <h2 className='font-bold text-xl'>១០. ដេីម្បីរកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗ នៅលេីច្រវ៉ាក់ម្ខាងៗ</h2>
                    <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                        <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>
                        <InlineMath math={`ADN \\begin{cases} 
                        A_{1}\\quad T_{1}\\quad C_{1}\\quad G_{1} \\\\ 
                        A_{2}\\quad T_{2}\\quad C_{2}\\quad G_{2}
                        \\end{cases}`}
                        />
                        <InlineMath math="\Rightarrow A_{1} = T_{2}" />
                        <InlineMath math="T_{1} = A_{2}" />
                        <InlineMath math="C_{1} = G_{2}" />
                        <InlineMath math="G_{1} = C_{2}" />


                        <InlineMath math="\Rightarrow A_{ADN} = T_{ADN} = A_{1} + A_{2} = T_{1} + T_{2} = A_{1} + T_{1}" />
                        <InlineMath math="\Rightarrow C_{ADN} = G_{ADN} = C_{1} + C_{2} = G_{1} + G_{2} = C_{1} + G_{1}" />



                    </div>
                </div>

                <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                    <h2 className='font-bold text-xl'>១១. ដេីម្បីរកភាគរយនុយក្លេអូទីតប្រភេទនីមួយៗ នៅលេីច្រវ៉ាក់ម្ខាងៗ</h2>
                    <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                        <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>
                        <InlineMath math={`ADN \\begin{cases} 
                    \\%A_{1}\\quad \\%T_{1}\\quad \\%C_{1}\\quad \\%G_{1} \\\\ 
                    \\%A_{2}\\quad \\%T_{2}\\quad \\%C_{2}\\quad \\%G_{2}
                    \\end{cases}`}
                        />

                        <InlineMath math="\Rightarrow \%A_{1} = \%T_{2}" />
                        <InlineMath math="\%T_{1} = \%A_{2}" />
                        <InlineMath math="\%C_{1} = \%G_{2}" />
                        <InlineMath math="\%G_{1} = \%C_{2}" />


                        <InlineMath math="\Rightarrow \%A_{ADN} = \%T_{ADN} = \frac{\%A_{1} + \%A_{2}}{2} = \frac{\%T_{1} + \%T_{2}}{2} = \frac{\%A_{1} + \%T_{1}}{2}" />
                        <InlineMath math="\Rightarrow \%C_{ADN} = \%G_{ADN} = \frac{\%C_{1} + \%C_{2}}{2} = \frac{\%G_{1} + \%G_{2}}{2} = \frac{\%C_{1} + \%G_{1}}{2}" />
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-xl'>ខ្នាតប្រេីក្នុងជីវៈវិទ្យា</h2>
            <ul className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full list-disc text-[14px]'>
                <div className='flex items-center gap-20'>
                    <li><InlineMath math="1A^{0} = 10^{-1} nm" /></li>
                    <li><InlineMath math="1nm = 10^{1} A^{0}" /></li>
                </div>
                <div className='flex items-center gap-20'>
                    <li><InlineMath math="1A^{0} = 10^{-4} um" /></li>
                    <li><InlineMath math="1nm = 10^{-3} um" /></li>
                </div>
                <div className='flex items-center gap-20'>
                    <li><InlineMath math="1A^{0} = 10^{-7} mm" /></li>
                    <li><InlineMath math="1nm = 10^{-6} mm" /></li>
                </div>
                <div className='flex items-center gap-20'>
                    <li><InlineMath math="1A^{0} = 10^{-8} cm" /></li>
                    <li><InlineMath math="1nm = 10^{-7} cm" /></li>
                </div>
                <div className='flex items-center gap-20'>
                    <li><InlineMath math="1A^{0} = 10^{-9} dm" /></li>
                    <li><InlineMath math="1nm = 10^{-8} dm" /></li>
                </div>
                <div className='flex items-center gap-20'>
                    <li><InlineMath math="1A^{0} = 10^{-10} m" /></li>
                    <li><InlineMath math="1nm = 10^{-9} m" /></li>
                </div>
            </ul>
        </div>
    )
}

export default ADNFormulars
