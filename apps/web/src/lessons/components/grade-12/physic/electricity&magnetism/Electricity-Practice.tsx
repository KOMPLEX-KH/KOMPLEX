import { TopicPracticeBox } from "@/components/pages/docs/boxes/TopicPracticeBox";
import { InlineMath } from "react-katex";

import { SummaryBox } from "@/components/pages/docs/boxes/SummaryBox";
import { LightbulbIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const ElectricityPractice = () => {
  const summary: SummarySection[] = [
    {
      key: "magnetic-field",
      title: "ដែនម៉ាញេទិច",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-4">
          <div>
            <div className="font-bold mb-1">ដែនម៉ាញេទិច</div>
            <div className="ml-2 space-y-2">
              {/* ដែនម៉ាញេទិច */}
              <div><span className="text-indigo-600">•</span> ចរន្តត្រង់: <InlineMath math={String.raw`B = \mu_0\frac{I}{2\pi d}`} /></div>
              <div>
                <div><span className="text-indigo-600">•</span> ចរន្តរាងវង់:</div>
                <div className="ml-4">មួយស្ពៀរ : <InlineMath math={String.raw`B = \mu_0\frac{I}{2R}`} /></div>
                <div className="ml-4 mt-2">N ស្ពៀរ : <InlineMath math={String.raw`B = \mu_0\frac{N I}{2R}`} /></div>
              </div>
              <div><span className="text-indigo-600">•</span>  សូលេណូអុីត : <InlineMath math={String.raw`B = \mu_0 n I = \mu_0 \frac{N}{l} I`} /></div>
              <div><span className="text-indigo-600">•</span> ចំនួនស្ពៀ : <InlineMath math={String.raw`n = \frac{N}{l}`} /></div>
              <div className="ml-4"><InlineMath math={String.raw`n = \frac{l}{d}`} /> , <InlineMath math={String.raw`N = \frac{l}{d}`} /></div>
              <div className="ml-4 mt-2"><InlineMath math={String.raw`n = \frac{1}{d + 2e}`} /> , <InlineMath math={String.raw`N = \frac{l}{d + 2e}`} /></div>
              <div className="ml-4 mt-2"><InlineMath math={String.raw`n = \frac{x}{d + 2e}`} /> , <InlineMath math={String.raw`N = \frac{xl}{d + 2e}`} /></div>
              <div><span className="text-indigo-600">•</span> ប្រវែងខ្សែចម្លង និងរេសុីស្តង់នៃបូប៊ីន:</div>
              <div className="ml-4 mt-2"> <InlineMath math={String.raw`l' = \pi DN = 2\pi RN`} /> , <InlineMath math={String.raw`D = 2R`} /></div>
              <div className="ml-4 mt-2">
                <InlineMath math={String.raw`R = \rho \frac{\ell}{A}`} /> , <InlineMath math={String.raw`A' = \frac{\pi d^2}{4} = \pi r^2 (d = 2r)`} />
              </div>
              <div><span className="text-indigo-600">•</span> ជម្រាបម៉ាញេទិចនៃមជ្ឈដ្ឋានណាមួយ <InlineMath math={String.raw`\mu = \mu_0 \cdot \mu_r`} /></div>
              {/* កម្លាំងម៉ាញេទិច */}
            </div>
            <div className="font-bold mb-1 mt-2">កម្លាំងម៉ាញេទិច</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> លើខ្សែចម្លងមានចរន្ត:
                <div className="ml-4"><InlineMath math={String.raw`\vec{F} = I(\vec{l} \times \vec{B})`} />, <InlineMath math={String.raw`F = IlB\sin\theta`} /></div>
              </div>
              <div><span className="text-indigo-600">•</span> លើបន្ទុកផ្លាស់ទី :
                <div className="ml-4"><InlineMath math={String.raw`\vec{F}_m = q(\vec{v} \times \vec{B})`} />, <InlineMath math={String.raw`F_m = |q|vB\sin\alpha`} /></div>
              </div>
              <div><span className="text-indigo-600">•</span> រវាងខ្សែចម្លងស្របពីរ: <InlineMath math={String.raw`\frac{F}{l} = \frac{\mu_0 I_1 I_2}{2\pi a}`} /></div>
            </div>
            {/* ចលនារបស់បន្ទុកក្នុងដែនម៉ាញេទិច */}
            <div className="font-bold mb-1 mt-2">ចលនារបស់បន្ទុកក្នុងដែនម៉ាញេទិច</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> កាំផ្លូវរង្វង់: <InlineMath math={String.raw`R = \frac{mv}{|q|B}`} /></div>
              <div><span className="text-indigo-600">•</span> ខួបនៃចលនា: <InlineMath math={String.raw`T = \frac{2\pi m}{|q|B}`} /></div>
              <div><span className="text-indigo-600">•</span> សមាមាត្របន្ទុកលើម៉ាស់ : <InlineMath math={String.raw`\frac{m}{|q|} = \frac{R^2 B^2}{2V}`} /></div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "induction",
      title: "អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-4">
          <div>
            <div className="font-bold mb-1">ភ្លុចម៉ាញេទិច ឬភ្លុចអាំងឌុចស្យុង</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`\Phi = BA\cos\theta`} /></div>
              <div><span className="text-indigo-600">•</span> ចំណាំ:
                <div className="ml-4">- បើ <InlineMath math={String.raw`\theta = 0^\circ`} />, <InlineMath math={String.raw`\Phi = BA`} /> (អតិបរមា)</div>
                <div className="ml-4">- បើ <InlineMath math={String.raw`\theta = 90^\circ`} />, <InlineMath math={String.raw`\Phi = 0`} /> (សូន្យ)</div>
                <div className="ml-4">- បើ <InlineMath math={String.raw`\theta = 180^\circ`} />, <InlineMath math={String.raw`\Phi = -BA`} /> (អប្បបរមា)</div>
              </div>
            </div>
            <div className="font-bold mb-1 mt-4">កម្លាំងអគ្គិសនីចលករអាំងឌ្វីមធ្យម </div>
            <div className="ml-2 space-y-2 mt-4">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`E = -N \frac{\Delta\Phi}{\Delta t} = -N \frac{\Phi_f - \Phi_i}{t_f - t_i}`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`|E| = N \frac{|\Delta\Phi|}{\Delta t} = N \frac{| \Phi_f - \Phi_i|}{t_f - t_i}`} /></div>
              <div className="font-bold mb-1 mt-4">កម្លាំងអគ្គិសនីចលករក្នុងរបារចម្លងធ្វើចលនា: </div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`|E| = Blv\sin\alpha`} /> <br />បើ <InlineMath math={String.raw`\alpha = 90^\circ`} />, <InlineMath math={String.raw`E = Blv`} /></div>
              <div><span className="text-indigo-600">•</span> ចរន្តអាំងឌ្វី: <InlineMath math={String.raw`I = \frac{|E|}{R}`} /> </div>
              <div className="font-bold mb-1 mt-4">កម្លាំងអគ្គិសនីចលករអាំងឌ្វីខណ​: </div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw` e = -N \frac{d \Phi}{dt} `} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`\Phi = BA cos\theta = BA\cos(\omega t)`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`e = NBA\omega\sin(\omega t)`} /></div>
              <div><span className="text-indigo-600">•</span> តម្លៃអតិបរមា: <br /><InlineMath math={String.raw`E_m = NBA\omega = N\Phi_{max}\omega`} /></div>
              <div><span className="text-indigo-600">•</span> តម្លៃប្រសិទ្ធ: <InlineMath math={String.raw`E = \frac{E_m}{\sqrt{2}}`} /></div>
              <div><span className="text-indigo-600">•</span> កម្លាំងអគ្គិសនីចលករអាំងឌ្វីខណ:
                <div className="ml-2 space-y-2">
                  <div><InlineMath math={String.raw` e = -N \frac{d \Phi}{dt} `} /></div>
                  <div><InlineMath math={String.raw`\Phi = BA cos\theta = BA cos(\omega t) `} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "auto-induction-and-RL-LC-circuits",
      title: "អូតូអាំងឌុចស្យុង និង សៀគ្វី RL/LC",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-4">
          <div>
            <div className="font-bold mb-1">អូតូអាំងឌុចស្យុង</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`\Phi = Li`} />
                <div className="ml-4">សូ.អុីតគ្មានស្នូលដែក: <InlineMath math={String.raw`L = \mu_0 n^2 Al = \mu_0 \frac{N^2A}{l}`} /></div>
                <div className="ml-4">សូ.អុីតមានស្នូលដែក: <InlineMath math={String.raw`L = \mu_0 \mu_r \frac{N^2A}{l} = \mu \frac{N^2A}{l}`} /></div>
              </div>
              <div><span className="text-indigo-600">•</span> កម្លាំងអគ្គិសនីចលករអូតូអាំងឌ្វី​​</div>
              <div><span className="text-indigo-600"></span> <InlineMath math={String.raw`e = -L \frac{d\Phi}{dt} = -L \frac{di}{dt}`} /> ឬ
                <div><InlineMath math={String.raw`e = -L \frac{\Delta i}{\Delta t} = -L \frac{i_f - i_i}{t_f - t_i}`} /></div>
              </div>
            </div>
            <div className="font-bold mb-1 mt-2">សៀគ្វី RL</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> តង់ស្យុងឌីប៉ូល: <br /><InlineMath math={String.raw`V_{AB} = V_{AC} + V_{CB} = r i + L \frac{di}{dt}`} /></div>
              <div><span className="text-indigo-600">•</span> ថេរពេលវេលា: <InlineMath math={String.raw`\tau = \frac{L}{R}`} /></div>
              <div><span className="text-indigo-600">•</span> នៅពេលកុងតាក់បិទ: <InlineMath math={String.raw`i(t) = I_p (1 - e^{-t/\tau})`} /></div>
              <div><span className="text-indigo-600">•</span> នៅពេលកុងតាក់បើក: <InlineMath math={String.raw`i(t) = I_p e^{-t/\tau}`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`I_p = \frac{E}{R}`} /></div>
            </div>
            <div className="font-bold mb-1 mt-2">សៀគ្វី LC</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> ថាមពលរបស់កុងដង់ស្យាទ័រ: <InlineMath math={String.raw`E_C = \frac{1}{2} C V^2`} /></div>
              <div><span className="text-indigo-600">•</span> ថាមពលម៉ាញេទិច: <InlineMath math={String.raw`E_L = \frac{1}{2} L i^2`} /></div>
              <div><span className="text-indigo-600">•</span> ថាមពលសរុបនៃសៀគ្វី (បើក្នុងសៀគ្វីអុីដេអាល់ ថេរ):<br /> <InlineMath math={String.raw`E_{LC} = E_L + E_C = \frac{1}{2} L i^2 + \frac{1}{2} C V^2`} /></div>
              <div><span className="text-indigo-600">•</span> ច្បាប់រក្សាថាមពល: <InlineMath math={String.raw`E_{LC} = \frac{1}{2} C V_m^2 = \frac{1}{2} L i_m^2`} /></div>
              <div><span className="text-indigo-600">•</span> ទំនាក់ទំនងរវាងខួប និងប្រេកង់:</div>
              <div><span className="text-indigo-600"></span> <InlineMath math={String.raw`T = \frac {1}{f} = 2\pi \sqrt{LC}`} /></div>
              <div><span className="text-indigo-600"></span> <InlineMath math={String.raw`f = \frac {1}{T} = \frac{1}{2\pi \sqrt{LC}}`} /></div>
              <div><span className="text-indigo-600"></span> <InlineMath math={String.raw`\omega = 2\pi f = \frac {2\pi}{T} = \frac{1}{\sqrt{LC}}`} /></div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "alternating-current-circuits",
      title: "សៀគ្វីចរន្តឆ្លាស់",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-4">
          <div>
            <div className="font-bold mb-1 mt-4">កម្លាំងអគ្គិសនីចលករអាំងឌុចទីវ</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`e = E_m \sin(\omega t + \phi)`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`i = I_m \sin(\omega t + \phi)`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`v = V_m \sin(\omega t + \phi)`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`E_m = NBA\omega`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`I_m = I \sqrt 2 `} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`V_m = V \sqrt 2 `} /></div>
            </div>
            <div className="font-bold mb-1 mt-2">រេស៊ីស្តង់ចំពោះចរន្តឆ្លាស់ </div>
            <div className="ml-2 space-y-2 ">
              <div><span className="text-indigo-600">•</span> ច្បាប់អូម: <InlineMath math={String.raw`V = ZI`} /> ឬ <InlineMath math={String.raw`V_m = Z I_m`} /></div>
              <div><span className="text-indigo-600">•</span> អង្គធាតុចម្លងអូម (R): <InlineMath math={String.raw`Z_R = R`} /></div>
              <div className="ml-4"><InlineMath math={String.raw`V = Z_R I`} /></div>
              <div><span className="text-indigo-600">•</span> អាំងឌុចតង់សុទ្ធ (L): <InlineMath math={String.raw`Z_L = \omega L`} /></div>
              <div className="ml-4"><InlineMath math={String.raw`V = Z_L I`} /></div>
              <div><span className="text-indigo-600">•</span> កុងដង់ស្យាទ័រ (C): <InlineMath math={String.raw`Z_C = \frac{1}{\omega C}`} /></div>
              <div className="ml-4"><InlineMath math={String.raw`V = Z_C I`} /></div>
            </div>
            <div className="font-bold mb-1 mt-2">សៀគ្វី RLC តាមស៊េរី</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`Z = \sqrt{R^2 + (Z_L - Z_C)^2}`} /></div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`\tan \phi = \frac{Z_L - Z_C}{R}`} /> ឬ <InlineMath math={String.raw`\cos \phi = \frac{R}{Z}`} /></div>
            </div>
            <div className="font-bold mb-1 mt-4">បាតុភូតរេសូណង់</div>
            <div className="ml-2 space-y-2">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`Z_L = Z_C`} /></div>
              <div className="ml-2">
                <InlineMath math={String.raw`\omega_o = \frac{1}{\sqrt{LC}}`} /> , <InlineMath math={String.raw`f_o = \frac{1}{2\pi \sqrt{LC}}`} />
              </div>
            </div>
            <div className="font-bold mb-1 mt-4">ត្រង់ស្វូ</div>
            <div className="ml-2 space-y-2 mt-2">
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`\frac{V_1}{V_2} = \frac{N_1}{N_2} = K`} /></div>
              <div><span className="text-indigo-600">•</span> ត្រង់ស្វូអុីដេអាល់:
                <div><InlineMath math={String.raw`P_{e_1} = P_{e_2} \implies V_1 I_1 = V_2 I_2`} /></div>
              </div>
              <div><span className="text-indigo-600">•</span> <InlineMath math={String.raw`\frac{I_2}{I_1} = \frac{V_1}{V_2} = \frac{N_1}{N_2}`} /></div>
            </div>
            <div className="ml-2 space-y-2 mt-2">
              <div><span className="text-indigo-600">•</span> កំហាតថាមពល: <InlineMath math={String.raw`P_{e_1} = P_{e_2} + P_J`} /></div>
              <div><span className="text-indigo-600">•</span> ទិន្នផល: <InlineMath math={String.raw`Rd = \frac {P_{e_2}} {P_{e_1}}`} /></div>
            </div>
            <div className="ml-2 space-y-2 mt-2">
              <div><span className="text-indigo-600">•</span> អានុភាពមធ្យម: <InlineMath math={String.raw`P = VI cos \phi `} /></div>
            </div>
          </div>
        </div>
      )
    },

    {
      key: "application-tips",
      title: "ខ្នាតអនុវត្ត",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>B:</b> ដែនម៉ាញេទិច ឬអាំងឌុចស្យុងម៉ាញេទិច — តេស្លា (T)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>I:</b> ចរន្តអគ្គិសនី — អំពែរ (A)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>d, l, R, a:</b> ប្រវែង, ចម្ងាយ, កាំ, ប្រវែងខ្សែចម្លង — ម៉ែត្រ (m)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>μ₀:</b> ជ្រាបម៉ាញេទិចនៃសុញ្ញាកាស — T⋅m/A ឬ H/m</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>F ឬ Fₘ:</b> កម្លាំងម៉ាញេទិច — ញូតុន (N)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>q:</b> បន្ទុកអគ្គិសនី — គូឡុំ (C)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>v:</b> ល្បឿន — ម៉ែត្រក្នុងមួយវិនាទី (m/s)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>m:</b> ម៉ាស់ — គីឡូក្រាម (kg)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>T:</b> ខួប — វិនាទី (s)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>ω:</b> ល្បឿនមុំ — រ៉ាដ្យង់ក្នុងមួយវិនាទី (rad/s)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>V:</b> តង់ស្យុង ឬតេនស្យែល — វ៉ុល (V)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>ρ:</b> រេស៊ីស្ទីវីតេ — អូមម៉ែត្រ (Ω⋅m)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>A&apos;:</b> ផ្ទៃមុខកាត់ — ម៉ែត្រការ៉េ (m²)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>Φ:</b> ភ្លុចម៉ាញេទិច — វ៉េប៊ែរ (Wb)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>A:</b> ផ្ទៃក្រឡា — ម៉ែត្រការ៉េ (m²)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>E, e:</b> កម្លាំងអគ្គិសនីចលករ — វ៉ុល (V)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>Δt:</b> រយៈពេល — វិនាទី (s)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>L:</b> អាំងឌុចតង់ — ហង់រី (H)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>di/dt ឬ Δi/Δt:</b> អត្រាបម្រែបម្រួលចរន្ត — អំពែរក្នុងមួយវិនាទី (A/s)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>R:</b> រេស៊ីស្តង់ — អូម (Ω)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>I, Iₘ:</b> ចរន្តអគ្គិសនី — អំពែរ (A)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>V, Vₘ:</b> តង់ស្យុង — វ៉ុល (V)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>ϕ:</b> ផាស — រ៉ាដ្យង់ (rad) ឬ ដឺក្រេ (°)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>P:</b> អានុភាព — វ៉ាត់ (W)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>cosϕ:</b> កត្តាអានុភាព — គ្មានខ្នាត</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>K:</b> ផលធៀបបំលែង — គ្មានខ្នាត</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>μᵣ:</b> ជ្រាបម៉ាញេទិចធៀប — គ្មានខ្នាត</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>θ, α:</b> មុំ — ដឺក្រេ (°) ឬ រ៉ាដ្យង់ (rad)</span></div>
          <div className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span><b>N:</b> ចំនួនស្ពៀរ </span></div>
        </div>
      )
    },
    {
      key: "application-tips",
      title: " គន្លឹះអនុវត្តន៍",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-4 mt-4">
          <div>
            <div className="font-bold mb-2">យល់ដឹងពីទ្រឹស្ដីជាមូលដ្ឋាន</div>
            <div className="ml-2 space-y-2 mb-2">
              <div><span className="text-indigo-600">•</span> រលក: ត្រូវចាំរូបមន្តដូចជា v=λf និង T=1/f។ ត្រូវយល់ពីរបៀបបកស្រាយសមីការរលកដូចជា y=Asin(ωt±kx)។</div>
              <div><span className="text-indigo-600">•</span> ម៉ាញេទិច: ត្រូវស្វែងយល់ពីប្រភពនៃដែនម៉ាញេទិច (ចរន្តត្រង់ វង់ សូលេណូអុីត) និងកម្លាំងដែលដែននោះបង្កើត ។</div>
              <div><span className="text-indigo-600">•</span> សៀគ្វីចរន្តឆ្លាស់: ត្រូវចាំថាធាតុនីមួយៗ (R, L, C) មានរបៀបប្រតិកម្មខុសគ្នាទៅនឹងចរន្តឆ្លាស់ ហើយច្បាប់អូមទូទៅគឺ V=ZI។</div>
            </div>
            <div className="font-bold mb-2 mt-4"> អនុវត្តតាមជំហានជាក់លាក់</div>
            <div className="ml-2 space-y-2 mb-2">
              <div><span className="text-indigo-600">•</span> អាន និងវិភាគប្រធានលំហាត់: កំណត់ឲ្យច្បាស់ថាគេបានផ្ដល់អ្វីខ្លះ (ទិន្នន័យ) និងតម្រូវឲ្យរកអ្វី។</div>
              <div><span className="text-indigo-600">•</span> គូររូប (បើអាច): ការគូររូបអាចជួយអ្នកឲ្យមើលឃើញបាតុភូត និងទិសដៅបានច្បាស់ជាងមុន។</div>
              <div><span className="text-indigo-600">•</span> បំប្លែងខ្នាត: ត្រូវប្រាកដថាខ្នាតទាំងអស់ត្រូវគ្នា។ ឧទាហរណ៍ ផ្លាស់ប្ដូរពីសង់ទីម៉ែត្រទៅម៉ែត្រ ឬមីលីវិនាទីទៅវិនាទី។</div>
              <div><span className="text-indigo-600">•</span> ជ្រើសរើសរូបមន្ត: យករូបមន្តដែលត្រឹមត្រូវសម្រាប់ស្ថានភាពជាក់ស្ដែងនៅក្នុងលំហាត់។</div>
              <div><span className="text-indigo-600">•</span> ដោះស្រាយ និងផ្ទៀងផ្ទាត់: ធ្វើការគណនាយ៉ាងយកចិត្តទុកដាក់។ បន្ទាប់ពីទទួលបានលទ្ធផល គួរតែពិនិត្យមើលវាឡើងវិញដើម្បីប្រាកដថាចម្លើយសមស្រប។</div>
            </div>
            <div className="font-bold mb-2 mt-4"> ចំណាំ : </div>
            <div className="ml-2 space-y-2 ">
              <div><span className="text-indigo-600"></span> K គឺជាផលធៀបបម្លែងរបស់ត្រង់ស្វូម៉ាទ័រ </div>
              <div><span className="text-indigo-600">•</span> បើ​ K &gt; 1 ត្រង់ស្វូម៉ាទ័រនោះជាប្រដាប់ដំឡើងតង់ស្យុងហៅថា សួកវ៉ុលទ័រ ។</div>
              <div><span className="text-indigo-600">•</span> បើ K &lt; 1 ត្រង់ស្វូម៉ាទ័រនោះជាប្រដាប់បន្ថយតង់ស្យុងហៅថា ស៊ូវ៉ុលទ័រ ។</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="Pe_2" /> ជាអានុភាពច្រកចេញនៃត្រង់ស្វូ(នៅរប៊ុំមធ្យម) </div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="Pe_1" /> ជាអានុភាពច្រកចេញនៃត្រង់ស្វូ (នៅរប៊ុំបឋម) </div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="P_J" /> ជាអានុភាពខាតបង់​</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="V_1" /> ជាតង់ស្យុងប្រសិទ្ធនៅរប៊ុំបឋម</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="V_2" /> ជាតង់ស្យុងប្រសិទ្ធនៅរប៊ុំមធ្យម</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="I_1" /> ជាអាំងតង់សុីតេចរន្តប្រសិទ្ធនៅរប៊ុំបឋម</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="I_2" /> ជាអាំងតង់សុីតេចរន្តប្រសិទ្ធនៅរប៊ុំមធ្យម</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="n_1" /> ជាចំនួនស្ពៀនៅរប៊ុំបឋម</div>
              <div><span className="text-indigo-600">•</span> <InlineMath math="n_2" /> ជាចំនួនស្ពៀនៅរប៊ុំមធ្យម</div>
            </div>
          </div>
        </div>
      )
    },
  ];
  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "ដំណោះស្រាយលំហាត់ដែនម៉ាញេទិច",
      problemType: "Solutions to thermodynamics exercises",
      problems: [
        <div key="ex1">
          <span>
            ខ្សែចម្លងត្រង់បប្រវែងអនន្តឆ្លងកាត់ដោយចរន្ត I = 0.50A ដែល
            មជ្ឈដ្ឋានជុំវិញជាខ្យល់។
            <br />ក- គណនាអាំងឌុចសុ្យងម៉ាញេទិចត្រង់ចំណុច M ចម្ងាយ 2.0cm  ពីខ្សែចម្លង។
            <br />ខ- ដឹងថាត្រង់ចំណុច N មានអាំងឌុចសុ្យង <InlineMath math="10^{-8}T" /> ។ <br />
            ចូរគណនាចម្ងាយពីចំណុច N ដល់ខ្សែចម្លង។ គេឱ្យ μ₀ = 4π×10⁻⁷ Tm/A
          </span>
        </div>,
        <div key="ex2">
          <span>
            ខ្សែចម្លងវង់មួយមានកាំ R = 10cm ឆ្លងកាត់ដោយចរន្តដែលមានអាំងតង់សុីតេ 10A ។<br />
            គណនាតម្លៃអាំ​ងឌុចស្យុងម៉ាញេទិចត្រង់ផ្ចិត O បង្កើតដោយចរន្តក្នុងខ្សែចម្លងដែលមជ្ឈដ្ឋានជុំវិញជាខ្យល់ <br />គេឱ្យ μ₀ = 4π×10⁻⁷ Tm/A
          </span>
        </div>,
        <div key="ex3">
          <span>
            សូលេណូអុីតគ្មានស្នូលមួយត្រូវបានរុំចំនួន 2000 ស្ពៀ ហើយមានអង្កត់ផ្ចិត 2.0cm និងប្រវែង 60cm ។
            ត្រង់សូលេណូអុីតឆ្លងកាត់ដោយចរន្តអគ្គិសនី 5.0A ។
            <br />ក- គណនា​ដែនម៉ាញេទិចឆ្លងកាត់សូលេណូអុីត។
            <br />ខ- គណនាប្រវែងខ្សែចម្លង​ដែលរុំជាសូលេណូអុីត។
          </span>
        </div>,
        <div key="ex4">
          <span>
            បូប៊ីនសំប៉ែតមួយមានចំនួនស្ពៀ N = 100 ឆ្លងកាត់ដោយចរន្តមានអាំងតង់សុីតេ I = 10A ដោយស្ពៀមានកាមធ្យម R = 20cm។<br />
            គណនាតម្លៃអាំ​ងឌុចស្យុងម៉ាញេទិចត្រង់ផ្ចិតបូប៊ីន។ បើស្នូលបូប៊ីន​ជាលោហ:មានើជម្រាបម៉ាញេទិចធៀប μᵣ = 1000
          </span>
        </div>,
        <div key="ex5">
          <span>
            ខ្សែចម្លងមួយមានប្រវែង 25cm ឆ្លងកាត់ដោយចរន្ត I = 4.0A ស្ថិតក្នុងដែនម៉ាញេទិចឯកសណ្ឋានដែលមានអាំងឌុចស្យុង B = 2.0T ។<br />
            គណនាកម្លាំងអេឡិចត្រូម៉ាញេទិចដែលមានអំពើលើរបារក្នុងករណីខ្សែចម្លងផ្គុំបានមុំ θ₁ = 30°, θ₂ = 60°, θ₃ = 90° ជាមួយអាំ​ងឌុចស្យុងម៉ាញេទិច។
          </span>
        </div>,
        <div key="ex6">
          <span>
            គណនាកម្លាំង​ឡូរិនដែលមានអំពើលើប្រូតុងកំពុងផ្លាស់ទីដោយល្បឿន v = 4.0×10⁶ m/s។<br />
            ចូលក្នុងដែនម៉ាញេទិចដែលមានទិសដៅកែងនឹងអាំ​ងឌុចស្យុងម៉ាញេទិច B = 2.0T ​។
          </span>
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2 ml-2">
          <span>ក- គណនាអាំងតង់សុីតេដែនម៉ាញេទិចត្រង់ M</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`B = \frac{\mu_0 I}{2\pi d}`} /></div>
          <div>ដោយ: <InlineMath math={String.raw`\mu_0 = 4\pi \times 10^{-7} \ \text{Tm/A}`} />
            <div className="ml-4"><InlineMath math={String.raw`I = 0.50 \ \text{A}`} /></div>
            <div className="ml-4"><InlineMath math={String.raw`d = 2.0 \ \text{cm} = 0.02 \ \text{m}`} /></div>
          </div>
          <div>យើងបាន៖<InlineMath math={String.raw`B = \frac{4\pi \times 10^{-7} \times 0.50}{2\pi \times 0.02}`} /></div>
          <div className="ml-4"> = <InlineMath math={String.raw`5.0 \times 10^{-8} \ \text{T}`} /></div>
          <div>ដូចនេះ​​ អាំងតង់សុីតេដែនម៉ាញេទិចត្រង់ M គឺ <InlineMath math={String.raw`5.0 \times 10^{-8} \ \text{T}`} /></div>
          <span>ខ- គណនាចម្ងាយពី N ដល់ខ្សែចម្លង:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`B = \frac{\mu_0 I}{2\pi d}`} /></div>
          <div>នាំឲ៖​ <InlineMath math={String.raw`d = \frac{\mu_0 I}{2\pi B}`} /></div>
          <div>ដោយ: <InlineMath math={String.raw`B = 10^{-8} \ \text{T}`} /> , <InlineMath math={String.raw`I = 0.50 \ \text{A}`} /></div>
          <div>យើងបាន៖<InlineMath math={String.raw`d = \frac{4\pi \times 10^{-7} \times 0.50}{2\pi \times 10^{-8}}`} /> = <InlineMath math={String.raw`10 \ \text{m}`} /></div>
          <div>ដូចនេះ ចម្ងាយពី N ដល់ខ្សែចម្លងគឺ <InlineMath math={String.raw`10 \ \text{m}`} /></div>
        </div>,
        <div key="a2" className="space-y-2 ml-2">
          <span>គណនាអាំងតង់សុីតេដែនម៉ាញេទិចត្រង់ O:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`B = \frac{\mu_0 I}{2R}`} /></div>
          <div>ដោយ <InlineMath math={String.raw`\mu_0 = 4\pi \times 10^{-7} \ \text{Tm/A}`} />
            <div className="ml-4"><InlineMath math={String.raw`I = 10 \ \text{A}`} /></div>
            <div className="ml-4"><InlineMath math={String.raw`R = 10 \ \text{cm} = 0.10 \ \text{m}`} /></div>
          </div>
          <div>យើងបាន៖<InlineMath math={String.raw`B = \frac{4\pi \times 10^{-7} \times 10}{2 \times 0.10}`} /></div>
          <div>ដូចនេះ អាំងតង់សុីតេដែនម៉ាញេទិចត្រង់ O គឺ <InlineMath math={String.raw`6.3 \times 10^{-5} \ \text{T}`} /></div>
        </div>,
        <div key="a3" className="space-y-2 ml-2">
          <span>ក- គណនាអាំងតង់សុីតេដែនម៉ាញេទិចសូលេណូអុីត:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`B = \mu_0 n I = \mu_0 \frac{N}{l} I`} /></div>
          <div>ដោយ <InlineMath math={String.raw`\mu_0 = 4\pi \times 10^{-7} \ \text{Tm/A}`} /> </div>
          <div className="ml-4"><InlineMath math={String.raw`N = 2000`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`l = 60 \ \text{cm} = 0.60 \ \text{m}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`I = 5.0 \ \text{A}`} /></div>
          <div>យើងបាន៖<InlineMath math={String.raw`B = 4\pi \times 10^{-7} \times \frac{2000}{0.60} \times 5.0`} /></div>
          <div>ដូចនេះ អាំងតង់សុីតេដែនម៉ាញេទិចសូលេណូអុីតគឺ <InlineMath math={String.raw`0.021 \ \text{T}`} /></div>
          <span>ខ- គណនាប្រវែងខ្សែចម្លងស្ពៀ:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`l' = \pi D N`} /></div>
          <div>ដោយ <InlineMath math={String.raw`D = 2.0 \ \text{cm} = 0.02 \ \text{m}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`N = 2000`} /></div>
          <div>យើងបាន៖<InlineMath math={String.raw`l' = 3.14 \times 0.02 \times 2000`} /> = <InlineMath math={String.raw` 125.6 \ \text{m}`} /></div>
          <div>ដូចនេះ ប្រវែងខ្សែចម្លងស្ពៀគឺ <InlineMath math={String.raw` 125.6 \ \text{m}`} /></div>
        </div>,
        <div key="a4" className="space-y-2 ml-2">
          <span>គណនាអាំងតង់សុីតេដែនម៉ាញេទិចត្រង់ផ្ចិតបូប៊ីន:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`B = \mu_0 \mu_r \frac{N I}{2R}`} /></div>
          <div>ដោយ <InlineMath math={String.raw`\mu_0 = 4\pi \times 10^{-7}`} /> </div>
          <div className="ml-4"><InlineMath math={String.raw`\mu_r = 1000`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`N = 100`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`I = 10`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`R = 20 \ \text{cm} = 0.20 \ \text{m}`} /></div>
          <div>យើងបាន៖<InlineMath math={String.raw`B = 4\pi \times 10^{-7} \times 1000 \times \frac{100 \times 10}{2 \times 0.20} = 3.14 \ \text{T}`} /></div>
          <div>ដូចនេះ អាំងតង់សុីតេដែនម៉ាញេទិចត្រង់ផ្ចិតបូប៊ីនគឺ <InlineMath math={String.raw` 3.14 \ \text{T}`} /></div>
        </div>,
        <div key="a5" className="space-y-2 ml-2">
          <span>គណនាកម្លាំងអេឡិចត្រូម៉ាញេទិចលើរបារ:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`F = B I l \sin \theta`} /></div>
          <div>ដោយ <InlineMath math={String.raw`B = 2.0 \ \text{T}`} /> </div>
          <div className="ml-4"><InlineMath math={String.raw`I = 4.0 \ \text{A}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`l = 25 \ \text{cm} = 0.25 \ \text{m}`} /></div>
          <div><span className="text-indigo-600">•</span> ករណី <InlineMath math={String.raw`\theta_1 = 30^\circ`} /> </div>
          <div>យើងបាន៖<InlineMath math={String.raw`F_1 = 2.0 \times 4.0 \times 0.25 \times \sin 30^\circ `} /></div>
          <div>ដូចនេះ​ <InlineMath math={String.raw`F_1 = 1.0 \ \text{N}`} /></div>
          <div><span className="text-indigo-600">•</span> ករណី <InlineMath math={String.raw`\theta_2 = 60^\circ`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`F_2 = 2.0 \times 4.0 \times 0.25 \times \sin 60^\circ `} /></div>
          <div>ដូចនេះ <InlineMath math={String.raw`F_2 = 1.7 \ \text{N}`} /></div>
          <div><span className="text-indigo-600">•</span> ករណី <InlineMath math={String.raw`\theta_3 = 90^\circ`} /> </div>
          <div>យើងបាន៖ <InlineMath math={String.raw`F_3 = 2.0 \times 4.0 \times 0.25 \times \sin 90^\circ `} /></div>
          <div>ដូចនេះ <InlineMath math={String.raw`F_3 = 2.0 \ \text{N}`} /></div>
        </div>,
        <div key="a6" className="space-y-2 ml-2">
          <span>គណនាកម្លាំងឡូរិនលើប្រូតុង:</span>
          <div>តាមរូបមន្ត: <InlineMath math={String.raw`F = |q| v B \sin \alpha`} /></div>
          <div>ដោយ <InlineMath math={String.raw`q = 1.6 \times 10^{-19} \ \text{C}`} /> </div>
          <div className="ml-4"><InlineMath math={String.raw`v = 4.0 \times 10^6 \ \text{m/s}`} /> </div>
          <div className="ml-4"><InlineMath math={String.raw`B = 20 \ \text{T}`} /> </div>
          <div className="ml-4"><InlineMath math={String.raw`\alpha = 90^\circ`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`F = 1.6 \times 10^{-19} \times 4.0 \times 10^6 \times 20 \times \sin 90^\circ`} /></div>
          <div>ដូចនេះ កម្លាំងឡូរិនលើប្រូតុងគឺ​ <InlineMath math={String.raw` 13 \times 10^{-13} \ \text{N}`} /></div>
        </div>,
      ],
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី 2",
      description: "ដំណោះស្រាយលំហាត់អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច",
      problemType: "Solutions to thermodynamics exercises",
      problems: [
        <div key="ex2-1">
          <span>
            របុំខ្សែចម្លងមួយមានរាងជារង្វង់មាន 50 ស្ពៀ និងកាំ 3.0cm ។ គេដាក់របុំនេះក្នុងដែនម៉ាញេទិចតែធ្វើយ៉ាងណាឲដែនម៉ាញេទិច​កែងនឹងផ្ទៃមុខកាត់នៃខ្សែចម្លង។
            ឧបមាថាដែនម៉ាញេទិចប្រែប្រួលពី 0.10T ទៅ 0.35T ក្នុងរយៈពេល 2ms ។ <br />
            គណនាកម្លាំងអគ្គិសនីចលករអាំងឌ្ទីក្នុងរបុំខ្សែចម្លង។
          </span>
        </div>,
        <div key="ex2-2">
          <span>
            របុំខ្សែចម្លងមួយមាន 50 ស្ពៀ ត្រូវបានទាញពីមុខនៃមេដែកក្នុងរយៈពេល 0.02s
            នាំអោយភ្លុចម៉ាញេទិចឆ្លងកាត់របុំខ្សែចម្លងប្រែប្រួលពី 3.1×10⁻⁴ Wb ទៅ 0.1×10⁻⁴ Wb ។ <br />
            គណនាកម្លាំងអគ្គិសនីចលករអាំងឌ្ទីក្នុងរបុំខ្សែចម្លង។
          </span>
        </div>,
        <div key="ex2-3">
          <span>
            របុំខ្សែចម្លង 5.0Ω មួយមាន 100 ស្ពៀ និងអង្កត់ផ្ចិត 6.0cm ។
            គេស៊ករបាមេដែកចូរក្នុងរបុំខ្សែចម្លង ​ភ្លុចអតិបរិមាឆ្លងកាត់ផ្ទៃខ្សែរចម្លង។ រួចទុកអោយនៅស្ងៀម​  នៅខណ:ដែលចូលពេលនោះគេឃើញ
            បន្ទុកអគ្គិសនី 1.0×10⁻⁴C ឆ្លងកាត់វ៉ាណូម៉ែត 595Ω ដែលភ្ជាប់នឹងចុងសងខាងនៃរបុំខ្សែចម្លង។ <br />
            គណនាដែនម៉ាញេទិចរវាង​ប៉ូលទាំងពីរនៃរបាមេដែក។
          </span>
        </div>,
        <div key="ex2-4">
          <span>
            ទម្រខ្សែចម្លងពីរដាក់អោយស្របគ្នាក្នុងប្លង់ដេកដែលចុងទាំងពីររបស់វាភ្ជាប់គ្នាដោយរេស៊ីស្តង់ R = 2.0Ω
            ហើយទម្រទាំងពីរនៅឃ្លាតគ្នាចម្ងាយ 20cm ។ របាលោហ: MN មួយត្រូវបានដាក់អោយកែងលើទម្រទាំងពីរ។  ប្លង់ទម្រកែងនឹងដែនម៉ាញេទិចសណ្ឋានមាន
            អាំងឌុចស្យុង B = 0.020T ។ គេរុញរបា MN អោយផ្លាស់ទីលើទម្រទាំងពីរដោយល្បឿន 50m/s ។ <br />
            គណនាអាំងតង់សុីតេចរន្តអាំងឌ្ទីឆ្លងកាត់រេស៊ីស្តង់ បើរបានិងទម្រមានរេសុីស្តង់អាចចោលបាន។
          </span>
        </div>,
        <div key="ex2-5">
          <span>
            ស៊ុមខ្សែចម្លងមួយរាងចតុកោណកែងមានចំនួនស្ពៀ 30  ស្ថិតក្នុងដែនម៉ាញេទិចឯកសណ្ឋានចន្លោះប៉ូលមេដែករាងដែលអាំងឌុចស្យុង B = 0.20T
            ដោយប្លង់ស៊ុមកែងនឹងខ្សែអាំងឌុចស្យុង​។​ ដោយដឹងថាវិមាត្រ a = 20cm , b = 10cm ។
            គេទាញស៊ុមអោយ​ផ្លាស់ទីស្របខ្លួនវាយ៉ាងរហ័ស​ ចេញពីប៉ូលមេដែក  ដោយប្រើរយៈពេលតែ Δt = 0.010s ។<br />
            ក- គណនាកម្លាំងអគ្គិសនីចលករអាំងឌ្ទីក្នុងស៊ុម។ <br />
            ខ- បើស៊ុមជាសៀគ្វីបិតមានរេសុីស្តង់ R = 10Ω គណនាចរន្តអាំងឌ្ទី។
          </span>
        </div>,
        <div key="ex2-6">
          <span >
            ខ្សែចម្លងប្រវែង 1.6m ត្រូវបានរុំជាបូប៊ីនមួយមានកាំ 3.2cm។
            បើបូប៊ីនវិលដោយល្បឿន 95 ជុំក្នុងមួយនាទីក្នុងដែនម៉ាញេទិចដែលមានតម្លៃ​ 0.070T ។<br />
            គណនាតម្លៃអតិបរិមានៃកម្លាំងអគ្គិសនីចលករអាំងឌ្វី។
          </span>
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2 ml-2">
          <span>គណនាកម្លាំងអគ្គិសនីចលករអាំងឌុចទីវ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`|E| = N\,\dfrac{|\Delta\Phi|}{\Delta t}`} /></div>
          <div>ដោយ <InlineMath math={String.raw`\Phi = BA\cos\theta`} /> ហើយ <InlineMath math={String.raw`\theta = 0^\circ`} /> ⟹ <InlineMath math={String.raw`\Phi = BA`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`N = 50`} />, <InlineMath math={String.raw`R = 3.0\,\text{cm} = 0.03\,\text{m}`} />, <InlineMath math={String.raw`A = \pi R^2 = \pi(0.03)^2`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`\Delta B = 0.35 - 0.10 = 0.25\,\text{T}`} />, <InlineMath math={String.raw`\Delta t = 2\,\text{ms} = 0.002\,\text{s}`} /></div>
          <div>គេបាន៖ <InlineMath math={String.raw`|E| = 50\,\dfrac{\pi(0.03)^2\times 0.25}{0.002} \approx 18\,\text{V}`} /></div>
          <div>ដូចនេះ កម្លាំងអគ្គិសនីចលករអាំងឌ្ទីក្នុងរបុំខ្សែចម្លងគឺ<b>18 V</b></div>
        </div>,
        <div key="a2" className="space-y-2 ml-2">
          <span>គណនាកម្លាំងអគ្គិសនីចលករអាំងឌុចទីវ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`|E| = N\,\dfrac{|\Delta\Phi|}{\Delta t}`} /></div>
          <div className="ml-4">ដោយ <InlineMath math={String.raw`N = 50`} /> <br /> <InlineMath math={String.raw`\Phi_i = 3.1\times 10^{-4}\,\text{Wb}`} /><br /> <InlineMath math={String.raw`\Phi_f = 0.10\times 10^{-4}\,\text{Wb}`} /><br /> <InlineMath math={String.raw`\Delta t = 0.020\,\text{s}`} /></div>
          <div>គេបាន៖ <InlineMath math={String.raw`|\Delta\Phi| = |\Phi_f - \Phi_i| = |0.10\times 10^{-4} - 3.1\times 10^{-4}| = 3.0\times 10^{-4}\,\text{Wb}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`|E| = 50\,\dfrac{3.0\times 10^{-4}}{0.020} = 0.75\,\text{V}`} /></div>
          <div>ដូចនេះ កម្លាំងអគ្គិសនីចលករអាំងឌុចទីវគឺ 0.75 V </div>
        </div>,
        <div key="a3" className="space-y-2 ml-2">
          <span>គណនាអាំងឌុចស្យុងម៉ាញេទិចរវាងប៉ូលទាំងពីរ</span>
          <div>ពី <InlineMath math={String.raw`|E| = N\,\dfrac{\Delta\Phi}{\Delta t}`} /> និង <InlineMath math={String.raw`|E| = R\,\dfrac{\Delta q}{\Delta t}`} /> ⟹ <InlineMath math={String.raw`N\,\Delta\Phi = R\,\Delta q`} /></div>
          <div>ដោយ <InlineMath math={String.raw`\Phi = BA`} /> និង <InlineMath math={String.raw`\theta = 0^\circ`} /> ⟹ <InlineMath math={String.raw`B = \dfrac{R\,q}{N\,A}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`R_\text{សរុប} = 5\,\Omega + 595\,\Omega = 600\,\Omega`} />, <InlineMath math={String.raw`q = 1.0\times 10^{-4}\,\text{C}`} />, <InlineMath math={String.raw`N = 100`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`d = 6.0\,\text{cm} = 0.06\,\text{m}`} />, <InlineMath math={String.raw`A = \dfrac{\pi d^2}{4} = \dfrac{\pi(0.06)^2}{4} = 2.83\times 10^{-3}\,\text{m}^2`} /></div>
          <div>គេបាន៖ <InlineMath math={String.raw`B = \dfrac{600\times 1.0\times 10^{-4}}{100\times 2.83\times 10^{-3}} \approx 0.21\,\text{T}`} /></div>
          <div>ដូចនេះ អាំងឌុចស្យុងម៉ាញេទិចរវាងប៉ូលទាំងពីរគឺ​ 0.21 T​</div>
        </div>,
        <div key="a4" className="space-y-2 ml-2">
          <span>គណនាអាំងតង់សុីតេចរន្តអាំងឌុចទីវ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`|E| = Blv\sin\alpha`} />, ហើយ <InlineMath math={String.raw`I = \dfrac{|E|}{R}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`B = 0.020\,\text{T}`} />, <InlineMath math={String.raw`l = 0.20\,\text{m}`} />, <InlineMath math={String.raw`v = 50\,\text{m/s}`} />, <InlineMath math={String.raw`\alpha = 90^\circ`} /> ⟹ <InlineMath math={String.raw`\sin\alpha = 1`} />, <InlineMath math={String.raw`R = 2.0\,\Omega`} /></div>
          <div>គេបាន៖ <InlineMath math={String.raw`I = \dfrac{Blv}{R} = \dfrac{0.020\times 0.20\times 50}{2.0} = 0.10\,\text{A}`} /></div>
          <div>ដូចនេះ <b>I = 0.10 A</b></div>
        </div>,
        <div key="a5" className="space-y-2 ml-2">
          <span>ក- កម្លាំងអគ្គិសនីចលករអាំងឌុចទីវ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`|E| = N\,\dfrac{|\Delta\Phi|}{\Delta t}`} />, <InlineMath math={String.raw`\Phi = BA`} /> (ព្រោះ <InlineMath math={String.raw`\theta = 0^\circ`} />)</div>
          <div className="ml-4"><InlineMath math={String.raw`N = 30`} />, <InlineMath math={String.raw`B = 0.20\,\text{T}`} />, <InlineMath math={String.raw`a = 0.20\,\text{m}`} />, <InlineMath math={String.raw`b = 0.10\,\text{m}`} />, <InlineMath math={String.raw`\Delta t = 0.010\,\text{s}`} /></div>
          <div>គេបាន៖ <InlineMath math={String.raw`|\Delta\Phi| = BA = 0.20\times (0.20\times 0.10) = 0.004\,\text{Wb (មួយស្ពៀ)}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`|E| = 30\,\dfrac{0.004}{0.010} = 12\,\text{V}`} /></div>
          <div>ដូចនេះ <b>E = 12 V</b></div>
          <span>ខ- ចរន្តអាំងឌុចទីវ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`I = \dfrac{|E|}{R}`} /> ⟹ <InlineMath math={String.raw`I = \dfrac{12}{10} = 1.2\,\text{A}`} /></div>
          <div>ដូចនេះ <b>I = 1.2 A</b></div>
        </div>,
        <div key="a6" className="space-y-2 ml-2">
          <span>កម្លាំងអគ្គិសនីចលករអាំងឌុចទីវ</span>
          <div>គណនា​ចំនួនស្ពៀ៖ <InlineMath math={String.raw`N = \dfrac{l}{2\pi R} = \dfrac{1.6}{2\pi\times 0.032} \approx 8`} /></div>
          <div>បើរូរនីកាត់ព្រំដែនដែនម៉ាញេទិច តាមទិសកែងនឹងខ្សែអាំងឌុចស្យុង៖ <InlineMath math={String.raw`|E| = N\,B\,(2R)\,v`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`B = 0.070\,\text{T}`} />, <InlineMath math={String.raw`2R = 0.064\,\text{m}`} />, <InlineMath math={String.raw`v = 95\,\text{m/s}`} />, <InlineMath math={String.raw`N \approx 8`} /></div>
          <div>គេបាន៖ <InlineMath math={String.raw`|E| \approx 8\times 0.070\times 0.064\times 95 \approx 3.4\,\text{V}`} /></div>
          <div>ដូចនេះ <b>E ≈ 3.4 V</b></div>
        </div>,
      ],
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "ដំណោះស្រាយលំហាត់អូតូអាំងឌុចស្យុង និង សៀគ្វី RL/LC",
      problemType: "Solutions to the RL/LC circuits exercises",
      problems: [
        <div key="ex1">
          <span >
            សូលេណូអុីតមួយមានប្រវែង l = 1.0 m , អង្កត់ផ្ចិត D = 4.0 cm និង N = 100 ស្ពៀ។ ឲ្យ <InlineMath math={String.raw`\mu_0 = 4\pi\times 10^{-7}\,\text{Tm/A}`} />។
            <br />ក- គណនា​អាំងឌុចតង់ <InlineMath math={String.raw`L`} /> របស់សូលេណូអុីត។
            <br />ខ- បើ <InlineMath math={String.raw`i(t) = 5.0\,t + 2.0\,\text{A}`} /> គណនា <InlineMath math={String.raw`e = -L\,\dfrac{di}{dt}`} /> នៅខណៈនោះ។
          </span>

        </div>,
        <div key="ex2">
          <span >
            ក- គណនា​អាំងឌុចតង់ <InlineMath math={String.raw`L`} /> នៃសូលេណូអុីតមាន N = 300 ស្ពៀ, l = 25 cm និងផ្ទៃមុខកាត់ A = 4.0 cm² ។<br />
            ខ- បើចរន្តថយចុះដោយអត្រា di/dt = -50 A/s គណនា <InlineMath math={String.raw`|e| = L\,\left|\dfrac{di}{dt}\right|`} />។ ឲ្យ <InlineMath math={String.raw`\mu_0 = 4\pi\times 10^{-7}\,\text{Tm/A}`} />។
          </span>
        </div>,
        <div key="ex3">
          <span >
            ក- កុងដង់ស្យាទ័រ C = 1.0 μF ត្រូវបានសាកដល់តង់ស្យុង V = 2.0 V ។ គណនាថាមពល <InlineMath math={String.raw`E_C`} />។<br />
            ខ- បន្ទាប់មកភ្ជាប់ទៅនឹងរូរនីមានអាំងឌុចតង់ L = 0.10 H (គ្មានខាតបង់)។ គណនា <InlineMath math={String.raw`i_m`} /> ដែលបំពេញ <InlineMath math={String.raw`\tfrac{1}{2} C V^2 = \tfrac{1}{2} L i_m^2`} />។
          </span>
        </div>,
        <div key="ex4">
          <span >
            សៀគ្វី RL មួយមានរេស៊ីស្តង់ R = 6.0\,\Omega និងថេរពេលវេលា τ = 2.0×10⁻³ s ។ គណនា <InlineMath math={String.raw`L = \tau R`} />។
          </span>
        </div>,
        <div key="ex5">
          <span >
            សៀគ្វី LC មានប្រេកង់រេសូណង់ f = 120 Hz និង C = 8.0 μF ។ គណនា <InlineMath math={String.raw`L`} /> ប្រើ <InlineMath math={String.raw`f = \dfrac{1}{2\pi\sqrt{LC}}`} />។
          </span>
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2 ml-2">
          <span >ក- អាំងឌុចតង់សូលេណូអុីត</span>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`L = \mu_0\dfrac{N^2 A}{l}`} /> , <InlineMath math={String.raw`A = \dfrac{\pi D^2}{4}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`D = 0.040\,\text{m}`} /> ⟹ <InlineMath math={String.raw`A = \dfrac{\pi(0.040)^2}{4} = 1.256\times 10^{-3}\,\text{m}^2`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`\mu_0 = 4\pi\times 10^{-7}`} />, <InlineMath math={String.raw`N = 100`} />, <InlineMath math={String.raw`l = 1.0\,\text{m}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`L = 4\pi\times 10^{-7}\,\dfrac{(100)^2\times 1.256\times 10^{-3}}{1.0} \approx 1.6\times 10^{-5}\,\text{H}`} /></div>
          <div>ដូចនេះ  អាំងឌុចតង់សូលេណូអុីតគឺ 1.6×10⁻⁵ H</div>
          <span>ខ- កម្លាំងអគ្គិសនីចលករអូតូអាំងឌុចទីវ</span>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`e = -L\,\dfrac{di}{dt}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`\dfrac{di}{dt} = 5.0\,\text{A/s}`} /> ⟹ <InlineMath math={String.raw`e \approx - (1.6\times 10^{-5})\times 5.0 \approx -8.0\times 10^{-5}\,\text{V}`} /></div>
          <div>កម្លាំងអគ្គិសនីចលករអូតូអាំងឌុចទីវគឹ 7.9×10⁻⁵ V​</div>
        </div>,
        <div key="a2" className="space-y-2 ml-2">
          <span>ក- អាំងឌុចតង់សូលេណូអុីត</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`L = \mu_0\dfrac{N^2 A}{l}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`\mu_0 = 4\pi\times 10^{-7}\,\text{Tm/A}`} />, <InlineMath math={String.raw`N = 300`} />, <InlineMath math={String.raw`A = 4.0\,\text{cm}^2 = 4.0\times 10^{-4}\,\text{m}^2`} />, <InlineMath math={String.raw`l = 25\,\text{cm} = 0.25\,\text{m}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`L = 4\pi\times 10^{-7}\,\dfrac{(300)^2\times 4.0\times 10^{-4}}{0.25} \approx 1.8\times 10^{-4}\,\text{H}`} /></div>
          <div>ដូចនេះ អាំងឌុចតង់សូលេណូអុីត 1.8×10⁻⁴ H </div>
          <span>ខ- កម្លាំងអគ្គិសនីចលករអូតូអាំងឌុចទីវ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`|e| = L\left|\dfrac{di}{dt}\right|`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`\left|\dfrac{di}{dt}\right| = 50\,\text{A/s}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`|e| = 1.8\times 10^{-4}\times 50 = 9.0\times 10^{-3}\,\text{V}`} /></div>
          <div>ដូចនេះ កម្លាំងអគ្គិសនីចលករអូតូអាំងឌុចទីវ 9.0×10⁻³ V </div>
        </div>,
        <div key="a3" className="space-y-2 ml-2">
          <span >ក- ថាមពលក្នុងកុងដង់ស្យាទ័រ</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`E_C = \tfrac{1}{2} C V^2`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`C = 1.0\,\mu\text{F} = 1.0\times 10^{-6}\,\text{F}`} />, <InlineMath math={String.raw`V = 2.0\,\text{V}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`E_C = \tfrac{1}{2}\times 1.0\times 10^{-6}\times (2.0)^2 = 2.0\times 10^{-6}\,\text{J}`} /></div>
          <div>ដូចនេះ ថាមពលក្នុងកុងដង់ស្យាទ័រគឺ 2.0×10⁻⁶ J </div>
          <span >ខ- ចរន្តអតិបរិមា​នៅក្នុង L</span>
          <div>អនុវត្ត <InlineMath math={String.raw`\tfrac{1}{2} C V^2 = \tfrac{1}{2} L i_m^2`} /> ⟹ <InlineMath math={String.raw`i_m = \sqrt{\dfrac{C}{L}}\,V = \sqrt{\dfrac{2E_C}{L}}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`L = 0.10\,\text{H}`} /> ⟹ <InlineMath math={String.raw`i_m = \sqrt{\dfrac{2\times 2.0\times 10^{-6}}{0.10}} \approx 6.3\times 10^{-3}\,\text{A}`} /></div>
          <div>ដូចនេះ ចរន្តអតិបរិមា​នៅក្នុង L គឺ 6.3×10⁻³ A </div>
        </div>,
        <div key="a4" className="space-y-2 ml-2">
          <span >គណនា​អាំងឌុចតង់ក្នុងសៀគ្វី RL</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`\tau = \dfrac{L}{R}`} /> ⟹ <InlineMath math={String.raw`L = \tau R`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`\tau = 2.0\times 10^{-3}\,\text{s}`} />br <InlineMath math={String.raw`R = 6.0\,\Omega`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`L = 2.0\times 10^{-3}\times 6.0 = 1.2\times 10^{-2}\,\text{H}`} /></div>
          <div>ដូចនេះ អាំងឌុចតង់ក្នុងសៀគ្វី RL គឺ 12×10⁻³ H</div>
        </div>,
        <div key="a5" className="space-y-2 ml-2">
          <span >គណនា​អាំងឌុចតង់សៀគ្វី LC (រេសូណង់)</span>
          <div>រូបមន្ត៖ <InlineMath math={String.raw`f = \dfrac{1}{2\pi\sqrt{LC}}`} /> ⟹ <InlineMath math={String.raw`L = \dfrac{1}{(2\pi f)^2\,C}`} /></div>
          <div className="ml-4"><InlineMath math={String.raw`f = 120\,\text{Hz}`} />, <InlineMath math={String.raw`C = 8.0\,\mu\text{F} = 8.0\times 10^{-6}\,\text{F}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`L = \dfrac{1}{(2\pi\times 120)^2\times 8.0\times 10^{-6}} \approx 0.22\,\text{H}`} /></div>
          <div>ដូចនេះ ​អាំងឌុចតង់សៀគ្វី LC គឺ 0.22 H </div>
        </div>,
      ],
    },
    {
      id: "ex4",
      title: "លំហាត់អនុវត្តទី ៤",
      description: "ដំណោះស្រាយលំហាត់សៀគ្វីចរន្តឆ្លាស់",
      problemType: " ",
      problems: [
        <div key="ex1">
          <span>
            តង់ស្យុងចេញរបស់ប្រភពចរន្តឆ្លាស់អោយដោយ​ <InlineMath math={String.raw`v(t)=200\,\sin(\omega t)\,\text{V}`} />។<br />
            គណនាចរន្ត​ប្រសិទ្ធ ពេលភ្ជាប់ទៅនឹងរេស៊ីស្តង់ <InlineMath math={String.raw`R=100\,\Omega`} />។
          </span>
        </div>,
        <div key="ex2">
          <span>
            សៀគ្វី AC បូប៊ីនសុទ្ធដែលមានអាំងឌុចតង់ <InlineMath math={String.raw`L=25.0\,\text{mH}`} /> និងតង់ស្យុងប្រសិទ្ទ
            <InlineMath math={String.raw`V=150\,\text{V}`} />។ <br />
            គណនាអាំង​ប៉េដង់នៃសៀគ្វី AC និងចរន្តប្រសិទ្ធ​​  ប្រសិនបើប្រេកង់សៀគ្វី <InlineMath math={String.raw`f=60\,\text{Hz}`} />។
          </span>
        </div>,
        <div key="ex3">
          <span>
            កុងដង់សាទ័រ  មានកាប៉ាសុីតេ <InlineMath math={String.raw`C=8.00\,\mu\text{F}`} /> ត្រូវបានភ្ជាប់ទៅនឹងប្រភពចរន្តឆ្លាស់ដែលមានប្រេកង់
            <InlineMath math={String.raw`f=60\,\text{Hz}`} />  និងតង់ស្យុងប្រសិទ្ទ<InlineMath math={String.raw`V=150\,\text{V}`} />​។<br />
            គណនាអាំងប៉េដង់និងចរន្តប្រសិទ្ធ​។
          </span>
        </div>,
        <div key="ex4">
          <span>
            សៀគ្វី RLC តជាស៊េរីដែលមាន <InlineMath math={String.raw`R=425\,\Omega`} />, <InlineMath math={String.raw`L=1.25\,\text{H}`} /> ,
            <InlineMath math={String.raw`C=3.50\,\mu\text{F}`} /> , <InlineMath math={String.raw`\omega=377\,\text{rad/s}`} /> និង
            <InlineMath math={String.raw`V_m=150\,\text{V}`} />។<br />
            ក- គណនា <InlineMath math={String.raw`Z_L,\,Z_C,\,Z`} /><br />
            ខ- គណនាចរន្តអតិបរិមា<br />
            គ- គណនាគម្លាតផាសរវាងចរន្ត​  និងតង់ស្យុង​<br />
            ឃ- គណនាតង់ស្យុងអតិបរមា​ និងកន្សោមតង់ស្យុងរវាងគោលនៃធាតុនីមួយៗ
          </span>
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2 ml-2">
          <span>ចរន្តត្រសើទធក្នុងរេស៊ីស្តង់</span>
          <div><InlineMath math={String.raw`v(t)=V_m\sin(\omega t)`} /> ⟹ <InlineMath math={String.raw`V=\dfrac{V_m}{\sqrt{2}}`} />។</div>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`I = \dfrac{V}{R} = \dfrac{V_m}{\sqrt{2}\,R}`} /></div>
          <div className="ml-4">ដោយ៖​  <InlineMath math={String.raw`V_m=200\,\text{V}`} /> <br /> <InlineMath math={String.raw`R=100\,\Omega`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`I = \dfrac{200}{\sqrt{2}\times 100} = 1.41\,\text{A}`} /></div>
          <div>ដូចនេះ ចរន្តត្រសើទធក្នុងរេស៊ីស្តង់គឺ 1.41 A </div>
        </div>,
        <div key="a2" className="space-y-2 ml-2">
          <span>+ សៀគ្វីអាំងឌុចតង់សុទ្ធ</span>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`Z_L = \omega L = 2\pi f L`} /></div>
          <div>ដោយ៖ <InlineMath math={String.raw`L=25.0\,\text{mH}=25\times 10^{-3}\,\text{H}`} /> </div>
          <div className="ml-6"><InlineMath math={String.raw`f=60\,\text{Hz}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`Z_L = 2\pi\times 60\times 25\times 10^{-3} = 9.42\,\Omega`} /></div>
          <div>ដូចនេះ​ សៀគ្វីអាំងឌុចតង់សុទ្ធគឹ <InlineMath math={String.raw`9.42\,\Omega`} /></div>
          <div>+ ចរន្តប្រសិទ្ធ​​ </div>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`I = \dfrac{V}{Z_L}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`I = \dfrac{150}{9.42} \approx 15.9\,\text{A}`} /></div>
          <div>ដូចនេះ ចរន្តប្រសិទ្ធគឹ​ 15.9 A​​ </div>
        </div>,
        <div key="a3" className="space-y-2 ml-2">
          <span>+ សៀគ្វីកុងដង់ស្យាទ័រសុទ្ធ</span>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`Z_C = \dfrac{1}{\omega C} = \dfrac{1}{2\pi f C}`} /></div>
          <div>ដោយ៖ <InlineMath math={String.raw`C=8.00\,\mu`} /> <br /></div>
          <div className="ml-4"><InlineMath math={String.raw`{F}=8.00\times 10^{-6}\,\text{F}`} /><br /> <InlineMath math={String.raw`f=60\,\text{Hz}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`Z_C = \dfrac{1}{2\pi\times 60\times 8.00\times 10^{-6}} \approx 332\,\Omega`} /></div>
          <div>+ ចរន្តប្រសិទ្ធ​</div>
          <div>តាមរូបមន្ត៖ <InlineMath math={String.raw`I = \dfrac{V}{Z_C}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`I = \dfrac{V}{Z_C} = \dfrac{150}{332} \approx 0.452\,\text{A}`} /></div>
          <div>ដូចនេះ សៀគ្វីកុងដង់ស្យាទ័រសុទ្ធគឹ 332 Ω និងចរន្តប្រសិទ្ធ​គឹ​  0.452 A</div>
        </div>,
        <div key="a4" className="space-y-2 ml-2">
          <div>ក- គណនា<InlineMath math={String.raw`Z_L `} /> , <InlineMath math={String.raw`Z_C`} /> , <InlineMath math={String.raw`Z `} /></div>
          <div className="ml-4">គេឲ្យ៖ <InlineMath math={String.raw`R=425\,\Omega`} /><br /> <InlineMath math={String.raw`L=1.25\,\text{H}`} /> <br /> <InlineMath math={String.raw`C=3.50\,\mu\text{F}=3.50\times 10^{-6}\,\text{F}`} />
            <br /> <InlineMath math={String.raw`\omega=377\,\text{rad/s}`} /></div>
          <div className="ml-4">+ គណនា <InlineMath math={String.raw`Z_L`} /><br />
            តាមរូបមន្ត៖<InlineMath math={String.raw`Z_L = \omega L `} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`Z_L = 377\times 1.25 \approx 471\,\Omega`} /></div>
          <div className="ml-4">+ គណនា <InlineMath math={String.raw`Z_C`} /><br />
            តាមរូបមន្ត៖ <InlineMath math={String.raw`Z_C = \dfrac{1}{\omega C} `} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`Z_C = \dfrac{1}{377\times 3.50\times 10^{-6}} \approx 758\,\Omega`} /></div>
          <div className="ml-4">+ គណនា <InlineMath math={String.raw`Z`} /><br />
            តាមរូបមន្ត៖ <InlineMath math={String.raw`Z = \sqrt{R^2 + (Z_L - Z_C)^2}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`Z = \sqrt{425^2 + (471-758)^2} \approx 513\,\Omega`} /></div>
          <div>ខ- គណនាចរន្តអតិបរិមា <br />
            តាមរូបមន្ត៖ <InlineMath math={String.raw`I_m = \dfrac{V_m}{Z}`} /></div>
          <div>យើងបាន៖ <InlineMath math={String.raw`I_m = \dfrac{150}{513} \approx 0.292\,\text{A}`} /></div>
          <div>គ- គណនាគម្លាតផាសរវាងចរន្ត​ និងតង់ស្យុង​ <br />
            តាមរូបមន្ត៖ <InlineMath math={String.raw`\tan\varphi = \dfrac{Z_L - Z_C}{R} `} /> </div>
          <div>យើងបាន៖ <InlineMath math={String.raw`\tan\varphi = \dfrac{471-758}{425}`} /> ⟹ <InlineMath math={String.raw`\varphi \approx -0.594\,\text{rad}`} /></div>
          <div>ឃ- តង់ស្យុងអតិបរិមា និងកន្សោមតង់ស្យុងរវាងគោលនៃធាតុនីមួយៗ</div>
          <div className="ml-4">ចំពោះ(R) តាមរូបមន្ត៖ <InlineMath math={String.raw`V_{m,R} = I_m R `} /><br />
            យើងបាន៖<InlineMath math={String.raw`V_{m,R} = 0.292\times 425 \approx 124\,\text{V}`} /> <br />
            កន្សោមតង់ស្យុង <InlineMath math={String.raw`v_R(t) = V_{m,R}\sin(\omega t) = 124\sin(377t)`} /></div>
          <div className="ml-4">ចំពោះ(L) តាមរូបមន្ត៖ <InlineMath math={String.raw`V_{m,L} = I_m Z_L `} /><br />
            យើងបាន៖<InlineMath math={String.raw`V_{m,L} = 0.292\times 471 \approx 138\,\text{V}`} /> <br />
            កន្សោមតង់ស្យុង <InlineMath math={String.raw`v_L(t) = V_{m,L}\sin\left(\omega t + \dfrac{\pi}{2}\right) = 138\sin\left(377t+\dfrac{\pi}{2}\right)`} /></div>
          <div className="ml-4">ចំពោះ(C) តាមរូបមន្ត៖ <InlineMath math={String.raw`V_{m,C} = I_m Z_C`} /><br />
            យើងបាន៖ <InlineMath math={String.raw`V_{m,C} = 0.292\times 758 \approx 221\,\text{V}`} /> <br />
            កន្សោមតង់ស្យុង៖ <InlineMath math={String.raw`v_C(t) = V_{m,C}\sin\left(\omega t - \dfrac{\pi}{2}\right) = 221\sin\left(377t-\dfrac{\pi}{2}\right)`} /></div>
        </div>,
      ],
    },
  ];
  return (
    <div>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </div>
  )
}

export default ElectricityPractice
