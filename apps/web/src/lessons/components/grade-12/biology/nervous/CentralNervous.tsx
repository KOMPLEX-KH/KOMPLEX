import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
export default function CentralNervous() {
    return (
        <>
             <ThreeDExplanationBox 
                       title="ខួរក្បាល"
                       scale={8}
                       target={[0,0,0]}
                       src="/docs/grade-12/biology/gymnosperms/brain.glb"
                       explanation = {
                        <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-3">និយមន័យ និង ផ្នែកសំខាន់ៗរបស់ណឺរ៉ូន</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p> ខួរក្បាល សរីរាង្គដែលសំខាន់ជាងគេនៃប្រព័ន្ធប្រសាទ ដែលមានអឺរ៉ូនចំនួនប្រហែល១០០ពាន់លាន និងជា
                                            កន្លែងទទួលព័ត៌មាន បកស្រាយ និងបញ្ហាសកម្មភាពទៅគ្រប់ផ្នែកនៃសារពាង្គកាយឲ្យធ្វើចលនា។</p>
                                            
                                        </div>
                                    </div> 
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p> ខួរក្បាលមនុស្សប្រុសទម្ងន់ពី1200gទៅ1350g</p>
                                            
                                        </div>
                                    </div>  
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p>ខួរក្បាលមនុស្សស្រីទម្ងន់ពី1000gទៅ1250g</p>
                                            
                                        </div>
                                    </div>  
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p>ផ្ទៃក្រឡាខួរក្បាលប្រហែលពី2000ទៅ2100cm2</p>
                                            
                                        </div>
                                    </div>  
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p>ខួរក្បាលការពារដោយឆ្អឹងលលាដ៏ក្បាល ស្រោមខួរ និងទឹកខួរ</p>
                                            
                                        </div>
                                    </div>  
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p>ទឹកខួរទាញយកអុកស៊ីសែន ភ្លុយកូស គោលិកាស និងអរម៉ូនពីឈាម ទៅចិញ្ចឹមជាលិកាប្រសាទ។ វាជាកំណល់
                                            សម្រាប់ការពារខួរក្បាលពីការប៉ះទង្គិចផ្សេងៗ។</p>
                                            
                                        </div>
                                    </div>   
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <p>ខួរក្បាលមាន៣ផ្នែកសំខាន់គឺ ខួរធំ ខួរតូច និងខួរកញ្ចឹងក។</p>
                                            
                                        </div>
                                    </div>  
                                   
                                </div>
                            </div>

                       }
                       />
        </>
    )
}