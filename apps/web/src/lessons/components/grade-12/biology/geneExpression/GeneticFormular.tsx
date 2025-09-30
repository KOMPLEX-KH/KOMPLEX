import React from 'react'
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'

const GeneticFormular = () => {
  return (
    <div className='w-full h-full flex flex-col items-start'>
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១. ដេីម្បីរកប្រវែងម៉ូលេគុល ADN</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយពីនុយក្លេអូទីតមួយ ទៅនុយក្លេអូទីតមួយទៀតមានប្រវែង 0.34 nm</p>
                <InlineMath math="\Rightarrow l = \frac{M_{សែន}}{2} \times 0.34 nm" />
                <p>_ <InlineMath math="l_{សែន}" /> ប្រវែងរបស់សែន គិតជា nm</p>
                <p>_ <InlineMath math="M_{សែន}" /> ចំនួននុយក្លេអូទីតទាំងអស់របស់សែន</p>
            </div>
            
       </div> 

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២. ដេីម្បីរកចំនួនជំហាន ឬរង្វេលនៃសែន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយមួយជំហានឬរង្វេលមានប្រវែង 3.4nm</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនជំហានឬរង្វេល = <InlineMath math="\frac{l_{សែន}}{3.4}" /></p>
                <p>ដោយ1ជំហានឬ1រង្វេលស្មេីនឹង20នុយក្លេអូទីត</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនជំហានឬរង្វេល = <InlineMath math="\frac{M_{សែន}}{20}" /></p>
            </div>           
       </div> 
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>៣. ដេីម្បីរក <InlineMath math="M_{សែន}" /></h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>
                <InlineMath math="\Rightarrow M_{សែន} = A + T + C + G" />
                <InlineMath math="M_{សែន} = 2A_{សែន} + 2C_{សែន} = 2T_{សែន} + 2G_{សែន} = 2A_{សែន} + 2G_{សែន} = 2T_{សែន} + 2C_{សែន}" />
            </div>           
       </div>  
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>៤. ដេីម្បីរក <InlineMath math="M_{សែន}" /></h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>បេីគេប្រាប់ចំនួននុយក្លេអូទីតប្រភេទនីមួយៗ និងប្រាប់សមាមាត្រភាគរយនុយក្លេអូទីតនីមួយៗ</p>
                <InlineMath math="\Rightarrow M_{សែន} = \frac{A_{សែន} \times 100}{\%A} = \frac{T_{សែន} \times 100}{\%T_{សែន}}" />
                <InlineMath math="\Rightarrow M_{សែន} = \frac{C_{សែន} \times 100}{\%C} = \frac{G_{សែន} \times 100}{\%G_{សែន}}" />
            </div>           
       </div> 
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>៥. ដេីម្បីរកចំនួនសម្ព័ន្ធអុីដ្រូសែនសរុប</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>A ភ្ជាប់ T ដោយសម្ព័ន្ធអុីដ្រូសែន 2</p>
                <p>C ភ្ជាប់ G ដោយសម្ព័ន្ធអុីដ្រូសែន 3</p>
                <InlineMath math="\Rightarrow L_{សែន} = 2A_{សែន} + 3C_{សែន} = 2A_{សែន} + 3G_{សែន} = 2T_{សែន} + 3G_{សែន} = 2T_{សែន} + 3C_{សែន}" />
                <p>_ <InlineMath math="L_{សែន}" /> ចំនួនសម្ព័ន្ធអុីដ្រូសែនសរុបក្នុងសែន</p>
            </div>           
       </div>   
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>៦. ដេីម្បីរកចំនួនសម្ព័ន្ធគីមីក្នុងសែន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយនុយក្លេអូទីត 2 ចងភ្ជាប់គ្នាដោយសម្ព័ន្ធគីមី 1ក្នុងច្រវ៉ាក់ម្ខាងៗរបស់សែន</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនសម្ព័ន្ធគីមីក្នុងសែន = <InlineMath math="M_{សែន} - 2 " /></p>
            </div>           
       </div> 
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>៧. ដេីម្បីរកម៉ាសម៉ូលេគុលរបស់សែន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយនុយក្លេអូទីត 1មានម៉ាសម៉ូលេគុលជាមធ្យម 300ខ្នាតកាបូន</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនម៉ាសម៉ូលគុលរបស់សែន = <InlineMath math="M_{សែន} \times 300" /></p>
            </div>           
       </div> 
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>៨. ដេីម្បីរកនុយក្លេអូទីតសេរី</h2>
            <ul className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full list-disc'>
                <li>បេីសែន ស្វ័យដំឡេីងទ្វេ 1ដង <InlineMath math="\Rightarrow " /> ចំនួនសែនកេីតថ្មី= <InlineMath math="2^{1} - 1 = 1 " /> ដូចនេះចំនួននុយក្លេអូទីតសេរីចាំបាច់សម្រាប់ស្វ័យដំឡេីងទ្វេគឺស្មេីចំនួននុយក្លេអូទីតរបស់ម៉ូលេគុល ADNមេ</li>
                <InlineMath math="\Rightarrow M' = M" />
                <li>បេីសែនស្វ័យដំឡេីងទ្វេ nដង</li>
                <p>_ រកចំនួននុយក្លេអូទីតសេរីទាំងអស់</p>
                <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
                <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
                <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
                <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
                <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
                <p>ដោយសែនស្វ័យដំឡេីងទ្វេ n ដង បង្កេីតបានសែនកូន = <InlineMath math="2^{n}" /> ដែលក្នុងនោះមានសែនមេ1</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនសែនកេីតថ្មី = <InlineMath math="2^{n} - 1" /></p>
                <InlineMath math="\Rightarrow M' = M_{សែន} \cdot (2^{n} - 1)" />
                <li>រកចំនួននុយក្លេអូទីតសេរីប្រភេទនីមួយៗ</li>
                <InlineMath math="\Rightarrow A' = T' = A_{សែន}(2^{n} - 1) = T_{សែន}(2^{n} - 1)" />
                <InlineMath math="\Rightarrow C' = G' = C_{សែន}(2^{n} - 1) = G_{សែន}(2^{n} - 1)" />
                <p>_ ដេីម្បីរកចំនួននុយក្លេអូទីតសរុបក្នុងសែនកូនដែលកេីតពេលស្វ័យដំឡេីងទ្វេ n ដង</p>
                <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
                <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
                <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
                <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
                <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
                <p>ដោយសែនស្វ័យដំឡេីងទ្វេnដង បង្កេីតបានសែនទាំងអស់ = <InlineMath math="2^{n} " /></p>
                <InlineMath math="\Rightarrow M_{សរុបរបស់សែន} = M \times 2^{n}" />
            </ul>    
            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>៩. ដេីម្បីរកភាគរយនុយក្លេអូទីតប្រភេទនីមួយៗ</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>    
                    <InlineMath math="\Rightarrow \%A _{សែន} + \%T_{សែន} + \%C_{សែន} + \%G_{សែន} = 100\%" />
                    <InlineMath math="\Rightarrow \%2A_{សែន} + \%2C_{សែន} = 100\%" />
                    <InlineMath math="\Rightarrow \%A_{សែន} = \%T_{សែន} = 50\% - \%C_{សែន} = 50\% - \%G_{សែន}" />
                    <InlineMath math="\Rightarrow \%C_{សែន} = \%G_{សែន} = 50\% - \%A_{សែន} = 50\% - \%T_{សែន}" />
                </div>           
            </div>  

            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>១០. ដេីម្បីរកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗ នៅលេីច្រវ៉ាក់ម្ខាងៗ</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>    
                    <InlineMath math={`សែន \\begin{cases} 
                        A_{1}\\quad T_{1}\\quad C_{1}\\quad G_{1} \\\\ 
                        A_{2}\\quad T_{2}\\quad C_{2}\\quad G_{2}
                        \\end{cases}`} 
                    />
                    <InlineMath math="\Rightarrow A_{1} = T_{2}" />
                    <InlineMath math="T_{1} = A_{2}" />
                    <InlineMath math="C_{1} = G_{2}" />
                    <InlineMath math="G_{1} = C_{2}" />


                    <InlineMath math="\Rightarrow A_{សែន} = T_{សែន} = A_{1} + A_{2} = T_{1} + T_{2} = A_{1} + T_{1}" />
                    <InlineMath math="\Rightarrow C_{សែន} = G_{សែន} = C_{1} + C_{2} = G_{1} + G_{2} = C_{1} + G_{1}" />



                </div>           
            </div>

            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
                <h2 className='font-bold text-xl'>១១. ដេីម្បីរកភាគរយនុយក្លេអូទីតប្រភេទនីមួយៗ នៅលេីច្រវ៉ាក់ម្ខាងៗ</h2>
                <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G  " /></p>    
                    <InlineMath math={`សែន \\begin{cases} 
                    \\%A_{1}\\quad \\%T_{1}\\quad \\%C_{1}\\quad \\%G_{1} \\\\ 
                    \\%A_{2}\\quad \\%T_{2}\\quad \\%C_{2}\\quad \\%G_{2}
                    \\end{cases}`} 
                    />

                    <InlineMath math="\Rightarrow \%A_{1} = \%T_{2}" />
                    <InlineMath math="\%T_{1} = \%A_{2}" />
                    <InlineMath math="\%C_{1} = \%G_{2}" />
                    <InlineMath math="\%G_{1} = \%C_{2}" />


                    <InlineMath math="\Rightarrow \%A_{សែន} = \%T_{សែន} = \frac{\%A_{1} + \%A_{2}}{2} = \frac{\%T_{1} + \%T_{2}}{2} = \frac{\%A_{1} + \%T_{1}}{2}" />
                    <InlineMath math="\Rightarrow \%C_{សែន} = \%G_{សែន} = \frac{\%C_{1} + \%C_{2}}{2} = \frac{\%G_{1} + \%G_{2}}{2} = \frac{\%C_{1} + \%G_{1}}{2}" />
                </div>           
            </div> 

            <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១២. ដេីម្បីរកចំនួនរីបូនុយក្លេអូទីតទាំងអស់ m</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>បេីគេប្រាប់ចំនួនរីបូនុយក្លេអូទីតប្រភេទនីមួយៗ និងប្រាប់សមាមាត្រភាគរយរីបូនុយក្លេអូទីតមួយៗ</p>
                <InlineMath math="\Rightarrow m = \frac{A_{ARN_{m}} \times 100 }{\%A_{ARN_{m}}}" />
                <InlineMath math="\Rightarrow m = \frac{U_{ARN_{m}} \times 100 }{\%U_{ARN_{m}}}" />
                <InlineMath math="\Rightarrow m = \frac{C_{ARN_{m}} \times 100 }{\%C_{ARN_{m}}}" />
                <InlineMath math="\Rightarrow m = \frac{G_{ARN_{m}} \times 100 }{\%G_{ARN_{m}}}" />

            </div>           
       </div>  

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៣. ដេីម្បីរកចំនួនរីបូនុយក្លេអូទីតទាំងអស់ m និងភាគរយរីបូនុយក្លេអូទីតទាំងអស់</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                    <InlineMath math="\Rightarrow m = A_{ARN_{m}} + U_{ARN_{m}} + C_{ARN_{m}} + G_{ARN_{m}}" />
                    <InlineMath math="\Rightarrow \%A_{ARN_{m}} + \%U_{ARN_{m}} + \%C_{ARN_{m}} + \%G_{ARN_{m}} = 100\%" />

            </div>           
       </div>  
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៤. ដេីម្បីរកចំនួននុយក្លេអូទីតរបស់សែន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>តាមគោលការណ៏ចម្លងក្រម</p>    
                <InlineMath math={`សែន \\begin{cases} 
                A_{1}\\quad T_{1}\\quad C_{1}\\quad G_{1} \\\\ 
                A_{2}\\quad T_{2}\\quad C_{2}\\quad G_{2}
                \\end{cases}`} 
                />
                <InlineMath math="ARN_{m} = U\quad A\quad C\quad G" />
                <InlineMath math="\Rightarrow A_{1} = T_{2} = U_{ARN_{m}}" />
                <InlineMath math="T_{1} = A_{2} = A_{ARN_{m}}" />
                <InlineMath math="C_{1} = G_{2} = G_{ARN_{m}}" />
                <InlineMath math="G_{1} = C_{2} = C_{ARN_{m}}" />
                <InlineMath math="\Rightarrow A_{សែន} = T_{សែន} = (A + U )_{ARN_{m}}" />
                <InlineMath math="\Rightarrow C_{សែន} = G_{សែន} = (C + G)_{ARN_{m}}" />


            </div>           
       </div> 

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៥. ដេីម្បីរកចំនួនភាគរយនុយក្លេអូទីតរបស់សែន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>តាមគោលការណ៏ចម្លងក្រម</p>    
                <InlineMath math={`សែន \\begin{cases} 
                \\%A_{1}\\quad \\%T_{1}\\quad \\%C_{1}\\quad \\%G_{1} \\\\ 
                \\%A_{2}\\quad \\%T_{2}\\quad \\%C_{2}\\quad \\%G_{2}
                \\end{cases}`} 
                />
                <InlineMath math="ARN_{m} = \%U\quad \%A\quad \%C\quad \%G" />
                <InlineMath math="\Rightarrow \%A_{1} = \%T_{2} = \%U_{ARN_{m}}" />
                <InlineMath math=" \%T_{1} = \%A_{2} = \%A_{ARN_{m}}" />
                <InlineMath math=" \%C_{1} = \%G_{2} = \%G_{ARN_{m}}" />
                <InlineMath math=" \%G_{1} = \%C_{2} = \%C_{ARN_{m}}" />

                <InlineMath math="\Rightarrow \%A_{សែន} = \%T_{សែន} = \frac{\%(A + U)}{2}" />
                <InlineMath math="\Rightarrow \%C_{សែន} = \%G_{សែន} = \frac{\%(C + G)}{2}" />
            </div>           
       </div> 

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៦. ដេីម្បីរកចំនួនរីបូនុយក្លេអូទីតទាំងអស់ m</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយ <InlineMath math="ARN_{m}" /> ចម្លងក្រមចេញពីច្រវ៉ាក់ម្ខាងរបស់សែន</p> 
                <InlineMath math="\Rightarrow m = \frac{M_{សែន}}{2} \Rightarrow M_{សែន} = 2m" />
            </div>           
       </div>  

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៧. ដេីម្បីរកប្រវែង<InlineMath math="ARN_{m}" /> </h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយពីរីបូនុយក្លេអូទីតមួយ ទៅរីបូនុយក្លេអូទីតមួយទៀតមានប្រវែង 0.34 nm</p>
                <InlineMath math="\Rightarrow l = m \times 0.34 nm" />
                <p>_ <InlineMath math="l_{ARN_{m}}" /> ប្រវែងរបស់សែន គិតជា nm</p>
                <p>_ <InlineMath math="m" /> ចំនួនរីបូនុយក្លេអូទីតទាំងអស់</p>
            </div>            
       </div> 

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៨. ដេីម្បីរកចំនួនសម្ព័ន្ធគីមីក្នុងម៉ូលេគុល <InlineMath math="ARN_{m}" /> </h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយរីបូនុយក្លេអូទីត2 ចងភ្ជាប់គ្នាដោយសម្ព័ន្ធគីមី1ក្នុងម៉ូលេគុល <InlineMath math="ARN_{m}" /></p> 
                <p><InlineMath math="\Rightarrow " /> ចំនួនសម្ព័ន្ធគីមីក្នុងម៉ូលេគុល <InlineMath math="ARN_{m}" /> =  m - 1</p>
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>១៩. ដេីម្បីរកម៉ាសម៉ូលេគុលរបស់ម៉ូលេគុល <InlineMath math="ARN_{m}" /> </h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយរីបូនុយក្លេអូទីត1មានម៉ាសម៉ូលេគុលជាមធ្យម 330 ខ្នាតកាបូន</p> 
                <p><InlineMath math="\Rightarrow " /> ចំនួនម៉ាសម៉ូលេគុល <InlineMath math="ARN_{m} = m \times 300" /></p>
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២០. ដេីម្បីរករីបូនុយក្លេអូទីតសេរីពេលម៉ូលេគុល <InlineMath math="ARN_{m}" /> សំយោគ nលេីក</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p><InlineMath math="\Rightarrow " /> ចំនួនរីបូនុយក្លេអូទីតសេរីទាំងអស់ <InlineMath math="= m \times n" /></p>
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២១. ដេីម្បីរកចំនួនអាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយនុយក្លេអូទីត ជាក្រមនៃអាស៊ីតអាមីនេមួយនៅលើច្រវាក់ម្ខាងរបស់សែន ហើយនៅលើច្រវាក់ម្ខាងរបស់សែនមានត្រីធាតុមួយត្រូវនឹងកូដុងផ្តើម និងមានត្រីធាតុមួយទៀតត្រូវនឹងកូដុងស្តុប</p> 
                <p><InlineMath math="\Rightarrow " /> ចំនួនអាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីន = <InlineMath math="\frac{M_{សែន}}{6} -2" /></p>
                <p>ដោយរីបូនុយក្លេអូទីត3ជាក្រមនៃអាស៊ីតអាមីនេមួយ នៅលើម៉ូលេគុលARNmហើយនៅលើ <InlineMath math="ARN_{m}" /> មានកូដុងផ្តើមមួយនឹងកូដុងស្តុបមួយ</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនអាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីន = <InlineMath math="\frac{m}{3} -2" /></p>
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២២. ដើម្បីរកចំនួនកូដុង</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយរីបូនុយក្លេអូទីតៗត្រូវនឹងកូដុង1</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនកូដុង = <InlineMath math="\frac{m}{3}" /></p>
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២៣. ដើម្បីរកចំនួនសែន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយសែនមួយកំណត់សំយោគប្រូតេអ៊ីនមួយប្រភេទ</p> 
                <p><InlineMath math="\Rightarrow " /> ចំនួនសែន  = ចំនួនប្រភេទប្រូតេអុីន</p>
                <p>ដោយសែនជាអង្កត់មួយរបស់ADN</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួនសែន = <InlineMath math="\frac{M_{ADN}}{M_{សែន}} = \frac{l_{ADN}}{l_{សែន}}" /></p>
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២៤. ដើម្បីរកចំនួនប្រភេទប្រូតេអ៊ីន</h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p><InlineMath math="\Rightarrow " /> ចំនួនប្រភេទប្រូតេអ៊ីន = <InlineMath math="\frac{ចំនួនអាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីនទាំងអស់}{ចំនួនអាស៊ីតអាមីនេក្នុងមួយម៉ូលេគុលប្រូតេអ៊ីន}" /></p>              
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២៥. ដើម្បីរកចំនួន <InlineMath math="ARN_{t} " /></h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយ <InlineMath math="ARN_{t} " />មួយចូលទៅក្នុងរីបូសូមមួយដងដឹកបានអាស៊ីតអាមីនេមួយ រួមជាមួយ<InlineMath math="ARN_{t} " /> ដឹកមេត្យូនីនផង</p>
                <p><InlineMath math="\Rightarrow " /> ចំនួន <InlineMath math="ARN_{t} " /> = ចំនួនអាសុីតអាមីនេ + 1</p>              
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២៧. ដើម្បីរកចំនួនចំណងប៉ិបទីត </h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយអាស៊ីតអាមីនេ2ចងភ្ជាប់គ្នាដោយចំណងប៉ិបទីត1ក្នុងប្រូតេអ៊ីន</p>
                <p><InlineMath math="\Rightarrow L'" /> = ចំនួនអាសុីតអាមីនេ -1 </p>              
            </div>           
       </div>
       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២៨. ដើម្បីរកម៉ាសម៉ូលេគុលប្រូតេអ៊ីន </h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p>ដោយអាស៊ីតអាមីនេ1មានម៉ាសម៉ូលេគុលជាមធ្យម110ខ្នាតកាបូន</p>
                <p><InlineMath math="\Rightarrow " /> ម៉ាសម៉ូលេគុលប្រូតេអ៊ុន  = ចំនួនអាសុីតអាមីនេ x 110 </p>              
            </div>           
       </div>

       <div className='flex flex-col gap-3 items-start w-full text-[14px]'>
            <h2 className='font-bold text-xl'>២៩. ដើម្បីរកប្រវែងប្រូតេអ៊ីន </h2>
            <div className='flex flex-col items-start gap-3 bg-indigo-50/80 border-l-4 border-indigo-600 p-6 my-6 rounded-r-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm w-full'>
                <p><InlineMath math="\Rightarrow l_{ប្រូតេអុីន}" />  = ចំនួនអាសុីតអាមីនេ x <InlineMath math="\Rightarrow l_{អាសុីតអាមីនេ}" /></p>              
            </div>           
       </div>


       </div> 
       
    </div>
  )
}

export default GeneticFormular
