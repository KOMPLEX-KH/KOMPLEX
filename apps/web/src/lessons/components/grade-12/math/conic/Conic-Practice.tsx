import { TopicPracticeBox } from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import { SummaryBox } from "@/components/pages/docs/boxes/SummaryBox";
import { AlertTriangleIcon, BookAIcon, LightbulbIcon } from "lucide-react";
import { SummarySection } from "@/types/docs/topic";



const ConicPractice = () => {
  const summary: SummarySection[] = [
    {
      key: "parabola",
      title: "ប៉ារ៉ាបូល",
      icon: BookAIcon,
      content: (
        <div className="space-y-3">
          {/* Standard forms */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការស្តង់ដាប៉ារ៉ាបូល:</span>
              <div className="mt-1">
                <div>បើអ័ក្សអាប់ស៊ីសស្របនឹងអ័ក្ស y:</div>
                <BlockMath math={String.raw`(x-h)^2 = 4p(y-k)`} />
                <div className="mt-1">បើអ័ក្សអរដោនេស្របនឹងអ័ក្ស x:</div>
                <BlockMath math={String.raw`(y-k)^2 = 4p(x-h)`} />
              </div>
            </div>
          </div>

          {/* Vertex */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">កំពូល V :</span>
              <InlineMath math={String.raw`(h, k)`} />
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">កំណុំ F :</span>
              <div className="mt-1">
                <div>(h, k + p) បើអ័ក្សអាប់ស៊ីសស្របនឹងអ័ក្ស y</div>
                <div>(h + p, k) បើអ័ក្សអរដោនេស្របនឹងអ័ក្ស x</div>
              </div>
            </div>
          </div>

          {/* Directrix */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">បន្ទាត់ប្រាប់ទិស :</span>
              <div className="mt-1">
                <div>y = k - p បើអ័ក្សអាប់ស៊ីសស្របនឹងអ័ក្ស y</div>
                <div>x = h - p បើអ័ក្សអរដោនេស្របនឹងអ័ក្ស x</div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ចំណាំ:</span>
              <span className="ml-2">p ជាចម្ងាយពីកំពូលទៅប្រសព្វ។ បើ <InlineMath math={String.raw`p > 0`} /> ប៉ារ៉ាបូលបែរទៅស្តាំឬឡើងលើ។ បើ <InlineMath math={String.raw`p < 0`} /> ប៉ារ៉ាបូលបែរទៅឆ្វេងឬចុះក្រោម។</span>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "ellipse",
      title: "អេលីប",
      icon: BookAIcon,
      content: (
        <div className="space-y-3">
          {/* Standard forms */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការស្តង់ដាអេលីប:</span>
              <div className="mt-1">
                <div>
                  <span>បើអ័ក្សធំស្របនឹងអ័ក្ស x:</span>
                  <BlockMath math={String.raw`\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1`} />
                </div>
                <div className="mt-1">
                  <span>បើអ័ក្សធំស្របនឹងអ័ក្ស y:</span>
                  <BlockMath math={String.raw`\frac{(y-k)^2}{a^2} + \frac{(x-h)^2}{b^2} = 1`} />
                </div>
              </div>
            </div>
          </div>

          {/* Center */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ផ្ចិត I : </span>
              <InlineMath math={String.raw`(h, k)`} />
            </div>
          </div>

          {/* Vertices */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">កំពូល V :</span>
              <div className="mt-1">
                <div>(h±a, k) និង (h, k±b) បើអ័ក្សធំស្របនឹងអ័ក្ស x</div>
                <div>(h±b, k) និង (h, k±a) បើអ័ក្សធំស្របនឹងអ័ក្ស y</div>
              </div>
            </div>
          </div>

          {/* Foci */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">កំណុំ F :</span>
              <div className="mt-1">
                <div>(h±c, k) បើអ័ក្សធំស្របនឹងអ័ក្ស x</div>
                <div>(h, k±c) បើអ័ក្សធំស្របនឹងអ័ក្ស y</div>
              </div>
            </div>
          </div>

          {/* Relation */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ទំនាក់ទំនង :</span>
              <span className="ml-2"><InlineMath math={String.raw`c^2 = a^2 - b^2`} /> (ដោយ a &gt; b)</span>
            </div>
          </div>

          {/* Note */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ចំណាំ:</span>
              <span className="ml-2">a ជាកន្លះប្រវែងអ័ក្សធំ និង b ជាកន្លះប្រវែងអ័ក្សតូច។</span>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "hyperbola",
      title: "អុីពែបូល",
      icon: BookAIcon,
      content: (
        <div className="space-y-2">
          {/* Standard forms */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការស្តង់ដាអុីពែបូល:</span>
              <div className="mt-1">
                <div>បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស x:</div>
                <BlockMath math={String.raw`\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1`} />
                <div className="mt-1">បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស y:</div>
                <BlockMath math={String.raw`\frac{(y-k)^2}{a^2} - \frac{(x-h)^2}{b^2} = 1`} />
              </div>
            </div>
          </div>

          {/* Center */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ផ្ចិត I :</span>
              <span className="ml-2">I (h, k)</span>
            </div>
          </div>

          {/* Vertices */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">កំពូល V :</span>
              <div className="mt-1">
                <div>(h±a, k) បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស x</div>
                <div>(h, k±a) បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស y</div>
              </div>
            </div>
          </div>

          {/* Foci */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">កំណុំ F :</span>
              <div className="mt-1">
                <div>(h±c, k) បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស x</div>
                <div>(h, k±c) បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស y</div>
              </div>
            </div>
          </div>

          {/* Asymptotes */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមិការបន្ទាត់ :</span>
              <div className="mt-1">
                <div>y - k = ±<InlineMath math={String.raw`\frac{a}{b}`} /> (x - h) បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស x</div>
                <div>y - k = ±<InlineMath math={String.raw`\frac{b}{a}`} /> (x - h) បើអ័ក្សឆ្លងកាត់ស្របនឹងអ័ក្ស y</div>
              </div>
            </div>
          </div>

          {/* Relation */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ទំនាក់ទំនង:</span>
              <span className="ml-2"><InlineMath math={String.raw`c^2 = a^2 + b^2`} /></span>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "tips",
      title: "គន្លឹះអនុវត្ត",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>បំលែងសមីការទៅជាទម្រង់ស្តង់ដារ៖ ប្រើការបំពេញការ៉េ ដើម្បីរៀបចំសមីការទៅជាទម្រង់ស្តង់ដារខាងលើ។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ដាក់តួ x ជាមួយគ្នា និងតួ y ជាមួយគ្នា។ ឧទាហរណ៍៖ <InlineMath math={String.raw`4x^2 - 8x + y^2 + 4y = 8`} /></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ទាញមេគុណចេញពីតួការ៉េ និងបំពេញការ៉េ៖ <InlineMath math={String.raw`4(x^2 - 2x + 1) + (y^2 + 4y + 4) = 8 + 4(1) + 4`} /></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>បម្លែងទៅទម្រង់ស្តង់ដា៖ <InlineMath math={String.raw`4(x-1)^2 + (y+2)^2 = 16`} /> ចែកនឹងតម្លៃខាងស្តាំដៃ៖ <BlockMath math={String.raw`\frac{(x-1)^2}{4} + \frac{(y+2)^2}{16} = 1`} /> (នេះជាសមីការអេលីប)</span>
          </div>
        </div>
      )
    },
    {
      key: "identify-conic",
      title: "កំណត់ប្រភេទសមីការ",
      icon: AlertTriangleIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>កំណត់ប្រភេទសមីការ: ជំហានដំបូងបំផុត គឺត្រូវកំណត់ថាតើវាជាសមីការរបស់ ប៉ារ៉ាបូល អេលីប ឬ អុីពែបូល។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ប៉ារ៉ាបូល: មានតែពាក្យដឺក្រេទីពីរមួយប៉ុណ្ណោះ (ឧទាហរណ៍ x² ឬ y²)។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>អេលីប: មានពាក្យដឺក្រេទីពីរពីរ (ទាំង x² និង y²) ដែលមានសញ្ញាដូចគ្នា (+)។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>អុីពែបូល: មានពាក្យដឺក្រេទីពីរពីរ (ទាំង x² និង y²) ដែលមានសញ្ញាផ្ទុយគ្នា។</span>
          </div>
        </div>
      )
    },
    {
      key: "identify-variables",
      title: "កំណត់អថេរ និងព័ត៌មានលម្អិត",
      icon: AlertTriangleIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>កំណត់អថេរ និងព័ត៌មានលម្អិត៖ ពីសមីការស្តង់ដារដែលរកឃើញ សូមកំណត់តម្លៃ <InlineMath math="h, k, a, b" /> និង <InlineMath math="p" /> (សម្រាប់ប៉ារ៉ាបូល)។ ប្រើតម្លៃទាំងនោះដើម្បីគណនាកំពូល ផ្ចិត ប្រសព្វ និងព័ត៌មានផ្សេងៗទៀតតាមរូបមន្ត។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ចងចាំថា <InlineMath math="a^2" /> តែងតែធំជាង <InlineMath math="b^2" /> សម្រាប់អេលីប។ សម្រាប់អុីពែបូល <InlineMath math="a^2" /> តែងតែស្ថិតនៅក្រោមតួវិជ្ជមាន។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>រៀបចំផែនការមុនដោះស្រាយ៖ ពេលឃើញសមីការ សូមរៀបគម្រោងក្នុងចិត្តថា តើត្រូវបំលែងវាទៅជាទម្រង់ស្តង់ដាររបៀបណា ហើយត្រូវរកព័ត៌មានអ្វីខ្លះ។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ចងចាំសញ្ញា៖ ត្រូវប្រយ័ត្នជាមួយសញ្ញាវិជ្ជមាន និងអវិជ្ជមាន ជាពិសេសនៅពេលទាញតម្លៃ <InlineMath math="h, k" /> ចេញពីសមីការ។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ប្រើប្រាស់ក្រាហ្វ៖ ការគូសក្រាហ្វដោយដៃអាចជួយឲ្យអ្នកស្រមៃមើលរូបរាងរបស់កោណកាត់ និងពិនិត្យមើលភាពត្រឹមត្រូវនៃចម្លើយរបស់អ្នក។</span>
          </div>
        </div>
      )
    },
  ];
  const exercises = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "ប៉ារ៉ាប៉ូល៖",
      problemType: "Parabola",
      problems: [
        <div key="ex1-1">
          រកកូអរដោនេកំពូល កំណុំ​ និងសមីការប្រាប់ទិសនៃប៉ារ៉ាប៉ូល​ <br />
          <InlineMath math="x^2 = 8y" /> <br />
        </div>,
        <div key="ex1-2">
          <p>រកកូអរដោនេកំពូល កំណុំ​ និងសមីការប្រាប់ទិសនៃប៉ារ៉ាប៉ូល​ <br /></p>
          <InlineMath math="(y+2)^2=4(x-1)" />
        </div>,
        <div key="ex1-3">
          <p>សរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូលដែលមានកំពូល <InlineMath math="V(h,k)និងកំណុំF(h,k+p)" /> <br /></p>
          <InlineMath math=" V(-2,1)និងF(4,1)" />
        </div>,
        <div key="ex1-4">
          <p>សរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូលដែលមានកំពូល <InlineMath math="V(h,k)និងកំណុំF(h+p,k)" /> <br /></p>
          <InlineMath math=" V(-3,-2)និងF(5,-2)" />
        </div>,
        <div key="ex1-5">
          <p>កំណត់កូអរដោនេកំពូល កំណុំ និងសមីការប៉ារ៉ាប៉ូល<br /></p>
          <InlineMath math="(P):y^2+4x-6y+1=0" />
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះដេក៖​ <InlineMath math="x^2 = 4py" /></p>
          <p>តែ:<InlineMath math="4p = 8 ⇒ p = 2 (បើកឡើងលើ)" /></p>
          <p>ដោយ: <InlineMath math="V(0, 0), F(0, p) = F(0, 2)" /></p>
          <p>បន្ទាត់ប្រាប់ទិសគឺ៖ <InlineMath math="y = -p ⇒ y = -2" /></p>
          <p>ដូចនេះគេបាន៖ កំពូល<InlineMath math="V(0, 0), កំណុំF(0, 2) និង បន្ទាត់ប្រាប់ទិស y = -2" /></p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះដេក៖​ <InlineMath math="(y-k)^2=4(x-h)" /></p>
          <p>តែ: <InlineMath math="4p = 4 ⇒ p = 1 (បើកទៅស្ដាំ)" /></p>
          <p>ដោយ: <InlineMath math="V(h, k) = V(1, -2), F(h+p, k) = F(2, -2)" /></p>
          <p>បន្ទាត់ប្រាប់ទិសគឺ៖ <InlineMath math="y = -p ⇒ y = -1" /></p>
          <p>ដូចនេះគេបាន៖ កំពូល<InlineMath math="V(1, -2), កំណុំF(2, -2) និង បន្ទាត់ប្រាប់ទិស y = -1" /></p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>គេឲ្យ៖​ <InlineMath math="V(h,k)និងកំណុំF(h,k+p)" /> និង <InlineMath math=" V(-2,1)និងF(4,1)" /></p>
          <p>ដោយ: <InlineMath math="V(h,k) = V(-2,1), F(h,k+p) = F(4,1)" /></p>
          <p>នោះ៖ <InlineMath math="h = -2, k = 1, p = 6" /></p>
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះឈរ៖​ <InlineMath math="(x-h)^2=4p(y-k)" /></p>
          <p>ដូចនេះសរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូល៖ <InlineMath math=" (x+2)^2=24(y-1)" /></p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>គេឲ្យ៖ <InlineMath math="V(h,k)និងកំណុំF(h+p,k)" /> និង <InlineMath math=" V(-3,-2)និងF(5,-2)" /></p>
          <p>ដោយ: <InlineMath math="V(h,k) = V(-3,-2), F(h+p,k) = F(5,-2)" /></p>
          <p>នោះ៖ <InlineMath math="h = -3, k = -2, p = 8" /></p>
          <p>តាមសមីការប៉ារ៉ាប៉ូលដែលមានអ័ក្សឆ្លុះដេក៖​ <InlineMath math="(y-k)^2=4p(x-h)" /></p>
          <p>ដូចនេះសរសេរសមីការស្តង់ដាប៉ារ៉ាប៉ូល៖ <InlineMath math=" (x+3)^2=32(y+2)" /></p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>គេឲ្យ៖​ <InlineMath math="(P):y^2+4x-6y+1=0" /></p>
          <p>ដំបូងគេត្រូវបម្លែងសមីការប៉ារ៉ាប៉ូលទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="y^2 - 6y + 4x + 1 = 0" />
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="(y-3)^2 = -4(x+1)" />
          <p>តែ៖ <InlineMath math="4p = -4 ⇒ p = -1 (បើកទៅឆ្វេង)" /></p>
          <p>ដោយ: <InlineMath math="V(h,k) = V(-3,-2), F(h+p,k) = F(5,-2)" /></p>
          <p>នោះ៖ <InlineMath math="h = -3, k = -2, p = 8" /></p>
          <p>ដូចនេះគេបាន៖​ <InlineMath math="កំពូលV(-3, -2), កំណុំF(5, -2) និង បន្ទាត់ប្រាប់ទិស y = -1" /></p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "អេលីប",
      problemType: "Ellipse",
      problems: [
        <div key="p1">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប <br />
          <InlineMath math="x^2+4y^2-4=0" />
        </div>,
        <div key="p2">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប<br />
          <InlineMath math="y^2+4x^2-4=0" />
        </div>,
        <div key="p3">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប<br />
          <InlineMath math=" 9x^2+25y^2-36x-189=0" />
        </div>,
        <div key="p4">រកកូអរដោនេ​ កំពូល កំណុំ ចំណុចឆ្លុះ និង អុីចសង់ទ្រីសុីតេនៃអេលីប<br />
          <InlineMath math=" 9y^2+25x^2-36y-189=0" />
        </div>,
        <div key="p5">រកកូអរដោ
          <InlineMath math=" 9x^2+16y^2-90x-96y+225=0" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math="x^2+4y^2-4=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <p><InlineMath math="x^2 + 4y^2 = 4" /> (ចែកគ្រប់តួទាំងអស់នឹង 4) <br /></p>
          <p><InlineMath math="\frac{x^2}{4} + \frac{4^2}{4} = \frac{4}{4}" /> <br /></p>
          <p><InlineMath math="\frac{x^2}{4} + \frac{y^2}{1} = 1" /></p>
          <p>សមីការនេះ យើងអាចកំណត់បាន :</p>
          <p> <InlineMath math="a^2 = 4 , b^2 = 1 " /></p>
          <p>នោះ៖ <InlineMath math="a = 2, b = 1" /></p>
          <p>ដោយសារ <InlineMath math="a > b" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស x ហើយចំណុចកណ្ដាលនៃអេលីបនេះគឺ (0,0)</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p><InlineMath math="V(±a,0) = V(±2,0)" /></p>
          <p>ដើម្បីរកកូអរដោនេកំណុំ យើងត្រូវរកតម្លៃ c ដោយប្រើរូបមន្ត <InlineMath math="c^2 = a^2 - b^2" /></p>
          <p>គេបាន៖ <InlineMath math="c^2 = 4 - 1 = 3 => c = \sqrt{3}" /></p>
          <p>នាំឲ៖ <InlineMath math="F(±c,0) = F(±\sqrt{3},0)" /></p>
          <p>ចំណុចឆ្លុះគឺ៖ <InlineMath math="P(0,±b) = P(0,±1)" /></p>
          <p>អុិចសង់ទ្រីសុីតេ : <InlineMath math="e= \frac{c}{a} = \frac{\sqrt{3}}{2}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: <InlineMath math="(±2,0)" /> , កំណុំ: <InlineMath math="(±\sqrt{3},0)" /> , ចំណុចឆ្លុះ: <InlineMath math="(0,±1)" />, អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{a} = \frac{\sqrt{3}}{2}" /></p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math="y^2+4x^2-4=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="y^2 + 4x^2 = 4 \implies \frac{y^2}{4} + \frac{x^2}{1} = 1 ដោយចែកគ្រប់តួទាំងអស់នឹង 4" />
          <p>ដោយ: <InlineMath math="a^2 = 1, b^2 = 4" /></p>
          <p>នោះ៖ <InlineMath math="a = 1, b = 2" /></p>
          <p>ដោយសារ <InlineMath math="b > a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស y ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (0,0)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = b^2 - a^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 4 - 1 = 3" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{3}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{3}}{2}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: <InlineMath math="(0,±2)" /> , កំណុំ: <InlineMath math="(0,±2)" /> និង <InlineMath math="(±1,0)" /> , ចំណុចឆ្លុះ: <InlineMath math="(0,±2)" /> និង <InlineMath math="(±1,0)" /> , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{3}}{2}" /></p>

        </div>,
        <div key="a3" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math=" 9x^2+25y^2-36x-189=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="9x^2 + 25y^2 = 36x + 189 \implies \frac{(x-2)^2}{4} + \frac{(y-3)^2}{9} = 1" />
          <p>ដោយ: <InlineMath math="a^2 = 4, b^2 = 9" /></p>
          <p>នោះ៖ <InlineMath math="a = 2, b = 3" /></p>
          <p>ដោយសារ <InlineMath math="b > a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស y ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (2,3)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = b^2 - a^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 9 - 4 = 5" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{5}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±2,3) , កំណុំ: (±2,3) និង (2,±3) , ចំណុចឆ្លុះ: (±2,3) និង (2,±3) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math=" 9y^2+25x^2-36y-189=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <InlineMath math="9y^2 + 25x^2 = 36y + 189 \implies \frac{(y-2)^2}{4} + \frac{(x-3)^2}{9} = 1" />
          <p>ដោយ: <InlineMath math="a^2 = 4, b^2 = 9" /></p>
          <p>នោះ៖ <InlineMath math="a = 2, b = 3" /></p>
          <p>ដោយសារ <InlineMath math="b > a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស x ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (3,2)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = b^2 - a^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 9 - 4 = 5" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{5}" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±3,2) , កំណុំ: (±3,2) និង (3,±2) , ចំណុចឆ្លុះ: (±3,2) និង (3,±2) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{b} = \frac{\sqrt{5}}{3}" /></p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math=" 9x^2+16y^2-90x-96y+225=0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <BlockMath math="9x^2 + 16y^2 = 90x + 96y - 225 \implies \frac{(x-5)^2}{25} + \frac{(y-3)^2}{9} = 1" />
          <p>ដោយ: <InlineMath math="a^2 = 25, b^2 = 9" /></p>
          <p>នោះ៖ <InlineMath math="a = 5, b = 3" /></p>
          <p>ដោយសារ <InlineMath math="b < a" /> អ័ក្សធំស្ថិតនៅលើអ័ក្ស x ។ ចំណុចកណ្ដាលនៃអេលីបនេះគឺនៅ (5,3)។</p>
          <p>កូអរដោនេចំណុចឆ្លុះ</p>
          <p>ដើម្បីរកកូអរដោនេចំណុចឆ្លុះ យើងត្រូវរកតម្លៃ c ជាមុនសិន ដោយប្រើរូបមន្ត <InlineMath math="c^2 = a^2 - b^2" /></p>
          <p>គេមាន៖ <InlineMath math="c^2 = 25 - 9 = 16" /></p>
          <p>នាំឲ៖ <InlineMath math="c = \sqrt{16} = 4" /></p>
          <p>អុីចសង់ទ្រីសុីតេ</p>
          <p>អុីចសង់ទ្រីសុីតេ e ជារង្វាស់នៃភាពសំប៉ែតរបស់អេលីប ដែលគណនាដោយរូបមន្ត <InlineMath math="e= \frac{c}{a} = \frac{4}{5}" /></p>
          <p>ដូចនេះគេបាន៖កូអរដោនេកំពូល: (±5,3) , កំណុំ: (±5,3) និង (5,±3) , ចំណុចឆ្លុះ: (±5,3) និង (5,±3) , អុីចសង់ទ្រីសុីតេ: <InlineMath math="e= \frac{c}{a} = \frac{4}{5}" /></p>
        </div>
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "អុីពែបូល",
      problemType: "Hyperbola",
      problems: [
        <div key="ex3-1">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="x^2 - 5y^2 = 25" />
        </div>,
        <div key="ex3-2">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="y^2 - x^2 = 16" />
        </div>,
        <div key="ex3-3">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="y^2 - 4x^2 + 2y + 16x - 31 = 0" />
        </div>,
        <div key="ex3-4">
          កំណត់កូអរដោនេ​ផ្ចិត​ កំពូល កំណុំ ​និង​អាសុីមតូតនៃ​អុីពែបូល​<br />
          <InlineMath math="16x^2 - 9y^2 - 144 = 0" />
        </div>,
        <div key="ex3-5">
          រកសមីការស្តង់ដានៃ​អុីពែបូលដែលផ្ទៀងផ្ទាត់លក្ខនីមួយៗ<br />
          <InlineMath math="ផ្ចិត​ (0,0) កំពូលV(0,3)និង កំណុំ F(0,5)" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <div>
            គេឲ្យ៖​ <InlineMath math="x^2 - 5y^2 = 25" />
            <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
            <p>យើងបែងចែកសមីការទាំងមូលនឹង 25 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1:</p>
            <InlineMath math=" \frac{x^2}{25} - \frac{y^2}{5} = 1" />
            <p>សមីការនេះមានទម្រង់ស្តង់ដារ <InlineMath math=" \frac{x^2}{25} - \frac{y^2}{5} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស x។</p>
            <p>កំណត់តម្លៃ a, b, និង c:</p>
            <p>យើងមាន <InlineMath math="a^2 = 25" /> និង <InlineMath math="b^2 = 5" /></p>
            <p>ដូចនេះ <InlineMath math="a = 5" /> និង <InlineMath math="b = \sqrt{5}" /></p>
            <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" /></p>
            <p>គេមាន <InlineMath math="c^2 = 25 + 5 = 30" /></p>
            <p>នាំឲ <InlineMath math="c = \sqrt{30}" /></p>
            <p>អាសុីមតូត: <InlineMath math="y = ±\frac{b}{a}x = ±\frac{\sqrt{5}}{5}x" /></p>
            <p>ដូចនេះគេបាន៖​ <InlineMath math="កូអរដោនេផ្ចិត: (0,0) , កំពូល: (±\sqrt{5},0) , កំណុំ: (±\sqrt{30},0) , អាសុីមតូត: y = ±\frac{\sqrt{5}}{5}x" /></p>
          </div>
        </div>,
        <div key="a2" className="space-y-2">
          គេឲ្យ៖​ <InlineMath math="y^2 - x^2 = 16" />
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <p>យើងចែកសមីការទាំងមូលនឹង 16 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1: <InlineMath math=" \frac{y^2}{16} - \frac{x^2}{16} = 1" /></p>
          <p>សមីការនេះមានទម្រង់ស្តង់ដា <InlineMath math=" \frac{y^2}{16} - \frac{x^2}{16} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស y។</p>
          <p>កំណត់តម្លៃ a, b, និង c:</p>
          <p>យើងមាន <InlineMath math="a^2 = 16" /> និង <InlineMath math="b^2 = 16" />។</p>
          <p>ដូចនេះ <InlineMath math="a = 4" /> និង <InlineMath math="b = 4" />។</p>
          <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" />។</p>
          <p>គេមាន <InlineMath math="c^2 = 16 + 16 = 32" />។</p>
          <p>នាំឲ <InlineMath math="c = \sqrt{32} = 4\sqrt{2}" />។</p>
          <p>អាសុីមតូត : <InlineMath math="y = ±\frac{a}{b}x = ±x" /></p>
          <p>ដូចនេះគេបាន៖​ <InlineMath math="កូអរដោនេផ្ចិត: (0,0) , កំពូល: (0,±4) , កំណុំ: (0,±4\sqrt{2}) , អាសុីមតូត: y = ±x" /></p>
        </div>,
        <div key="a3" className="space-y-2">
          គេឲ្យ៖<InlineMath math="y^2 - 4x^2 + 2y + 16x - 31 = 0" />
          <p>ដាក់តួដែលមានអថេរដូចគ្នាជាក្រុម ហើយបំពេញការ៉េ</p>
          <InlineMath math="(y^2 + 2y + 1) - 4(x^2 - 4x + 4) = 31" />
          <p><InlineMath math="ទាញកត្តារួមចេញពីតួ x និង y៖" /> <InlineMath math="(y + 1)^2 - 4(x - 2)^2 = 31" /></p>
          <p><InlineMath math="(y^2 + 2y + 1) - 4(x^2 - 4x + 4) = 31 + 1 - 4(4)" /></p>
          <p><InlineMath math="(y + 1)^2 - 4(x - 2)^2 = 31 +1 - 16 " /></p>
          <p><InlineMath math="(y + 1)^2 - 4(x - 2)^2 = 16" /></p>
          <p>បន្ទាប់មក យើងចែកសមីការទាំងមូលនឹង 16 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1៖</p>
          <p><InlineMath math=" \frac{(y + 1)^2}{16} - \frac{(x - 2)^2}{4} = 1" /></p>
          <p>សមីការនេះមានទម្រង់ស្តង់ដា <InlineMath math=" \frac{(y + 1)^2}{16} - \frac{(x - 2)^2}{4} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស y។</p>
          <p>កំណត់តម្លៃ a, b, និង c:</p>
          <p>យើងមាន <InlineMath math="a^2 = 16" /> និង <InlineMath math="b^2 = 4" /></p>
          <p>ដូចនេះ <InlineMath math="a = 4" /> និង <InlineMath math="b = 2" /></p>
          <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" /></p>
          <p>គេមាន <InlineMath math="c^2 = 16 + 4 = 20" /></p>
          <p>នាំឲ <InlineMath math="c = \sqrt{20} = 2\sqrt{5}" /></p>
          <p>អាសុីមតូត : <InlineMath math="y - k = ±\frac{a}{b}(x-h) " /></p>
          <p><InlineMath math="d_1: y = 2x - 5 , d_2 = y = -2x + 3" /></p>
          <p>ដូចនេះគេបាន៖​ <InlineMath math="កូអរដោនេផ្ចិត: (2,-1) , កំពូល: (2,3) និង​ (2,-5) , កំណុំ: (2,-1±2\sqrt{5}) , អាសុីមតូត: (d_1): y = 2x - 5 , (d_2): y = -2x + 3" /></p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>គេឲ្យ៖<InlineMath math="16x^2 - 9y^2 - 144 = 0" /></p>
          <p>បម្លែងទៅទម្រង់ស្តង់ដា៖</p>
          <p>យើងបែងចែកសមីការទាំងមូលនឹង 144 ដើម្បីអោយផ្នែកខាងស្តាំស្មើនឹង 1: <InlineMath math=" \frac{16x^2}{144} - \frac{9y^2}{144} = 1" /></p>
          <p>សមីការនេះមានទម្រង់ស្តង់ដា <InlineMath math=" \frac{x^2}{9} - \frac{y^2}{16} = 1" /> ដែលអុីពែបូលស្ថិតនៅលើអ័ក្ស x។</p>
          <p>កំណត់តម្លៃ a, b, និង c:</p>
          <p>យើងមាន <InlineMath math="a^2 = 9" /> និង <InlineMath math="b^2 = 16" /></p>
          <p>ដូចនេះ <InlineMath math="a = 3" /> និង <InlineMath math="b = 4" /></p>
          <p>ដើម្បីរក c យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" /></p>
          <p>គេមាន <InlineMath math="c^2 = 16 + 9 = 25" /></p>
          <p>នាំឲ <InlineMath math="c = \sqrt{25} = 5" /></p>
          <p>អាសុីមតូត : <InlineMath math="y = ±\frac{b}{a}x " /></p>
          <p><InlineMath math="d_1: y = \frac{4}{3}x , d_2 = y = -\frac{4}{3}x" /></p>
          <p>ដូចនេះគេបាន៖​  <InlineMath math="កំពូល: (±3,0) , កំណុំ: (±5,0) , អាសុីមតូត: y = ±\frac{4}{3}x" /></p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>គេឲ្យ៖​<InlineMath math="ផ្ចិត​ (0,0) កំពូលV(0,3)និង កំណុំ F(0,5)" /></p>
          <p>ដោយសារផ្ចិតស្ថិតនៅ (0, 0) កំពូល V(0, 3) និងកំណុំ F(0, 5) មានកូអរដោនេ x ដូចគ្នា (គឺ 0) នេះមានន័យថាអុីពែបូលនេះបើកតាមអ័ក្ស y </p>
          <p>ដូច្នេះ សមីការស្តង់ដារនឹងមានទម្រង់៖ <InlineMath math=" \frac{y^2}{a^2} - \frac{x^2}{b^2} = 1" /></p>
          <p>យើងមាន <InlineMath math="a^2 = 9" /> និង <InlineMath math="c = 5" /></p>
          <p>ដើម្បីរក b យើងប្រើរូបមន្ត <InlineMath math="c^2 = a^2 + b^2" /></p>
          <p>គេមាន <InlineMath math="5^2 = 3^2 + b^2" /></p>
          <p>នាំឲ <InlineMath math="b = \sqrt{16} = 4 => b^2 = 16" /></p>
          <p>ដូចនេះសមីការស្តង់ដារនៃអុីពែបូលនេះគឺ៖​  <InlineMath math=" \frac{y^2}{9} - \frac{x^2}{16} = 1" /></p>
        </div>
      ]
    },
  ]
  return (
    <div>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល"
        sections={summary}
      />
      <TopicPracticeBox exercises={exercises} />
    </div>
  )
}

export default ConicPractice
