import type { ReactNode } from 'react';
import MathRenderer from "@/components/helper/MathRenderer";

export interface Variable {
  symbol: ReactNode;
  name: string;
  unit?: ReactNode;
}

export const subjectMapping: Record<string, string> = {
  "គណិតវិទ្យា": "math",
  "រូបវិទ្យា": "physics",
  "គីមីវិទ្យា": "chemistry",
  "ជីវវិទ្យា": "biology"
};

export interface Formula {
  id: string;
  title: string;
  formula: ReactNode;
  description?: string;
  subject: "math" | "physics" | "chemistry" | "biology";
  category: string;
  variables?: Variable[];
}

export const mockFormulas: Formula[] = [
  // Physics Section (subset example)
  {
    id: "2",
    title: "សម្ពាធ និង ថាមពលសុីនេទិចមធ្យម",
    formula: <MathRenderer math={String.raw`P = \frac{2}{3}\left(\frac{N}{V}\right)K_{av}`} />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="P" />, name: "សម្ពាធ", unit: <MathRenderer math="Pa" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនម៉ូលេគុល" },
      { symbol: <MathRenderer math="V" />, name: "មាឌធុង", unit: <MathRenderer math={String.raw`m^3`} /> },
      { symbol: <MathRenderer math={String.raw`K_{av}`} />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <MathRenderer math="J" /> },
    ],
  },
  {
    id: "3",
    title: "សម្ពាធ និង ល្បឿនមធ្យម",
    formula: <MathRenderer math={String.raw`P = \frac{2}{3}\left(\frac{N}{V}\right)\frac{1}{2}mv^2`} />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="P" />, name: "សម្ពាធ", unit: <MathRenderer math="Pa" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនម៉ូលេគុល" },
      { symbol: <MathRenderer math="V" />, name: "មាឌធុង", unit: <MathRenderer math={String.raw`m^3`} /> },
      { symbol: <MathRenderer math="m" />, name: "ម៉ាសរបស់ម៉ូលេគុល", unit: <MathRenderer math="kg" /> },
      { symbol: <MathRenderer math="v" />, name: "ល្បឿនមធ្យម", unit: <MathRenderer math="m/s" /> },
    ],
  },
  {
    id: "5",
    title: "ម៉ូល និង ចំនួនម៉ូលេគុល",
    formula: <MathRenderer math="n = \frac{N}{N_A}" />,
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="n" />, name: "ចំនួនម៉ូល", unit: <MathRenderer math="mol" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនម៉ូលេគុល" },
    ],
  },

  {
    id: "6",
    title: "ឧស្ម័នបរិសុទ្ធ",
    formula: <MathRenderer math="PV = nRT" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="P" />, name: "សម្ពាធ", unit: <MathRenderer math="Pa" /> },
      { symbol: <MathRenderer math="V" />, name: "មាឌធុង", unit: <MathRenderer math="m^3" /> },
      { symbol: <MathRenderer math="n" />, name: "ចំនួនម៉ូល", unit: <MathRenderer math="mol" /> },
      {
        symbol: <MathRenderer math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <MathRenderer math="J/(mol \cdot K)" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },

  {
    id: "7",
    title: "ថាមពលសុីនេទិចមធ្យម",
    formula: <MathRenderer math="K_{av} = \frac{3}{2}k_B T" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <MathRenderer math="k_B" />,
        name: "ថេរបុលស្មាន់",
        unit: <MathRenderer math="J/K" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
      { symbol: <MathRenderer math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <MathRenderer math="J" /> },
    ],
  },

  {
    id: "8",
    title: "ថាមពលសុីនេទិចសរុប",
    formula: <MathRenderer math="K = \frac{3}{2}nRT" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="K" />, name: "ថាមពលសុីនេទិចសរុប", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="n" />, name: "ចំនួនម៉ូល", unit: <MathRenderer math="mol" /> },
      {
        symbol: <MathRenderer math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <MathRenderer math="J/(mol \cdot K)" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },
  {
    id: "9",
    title: "ល្បឿនប្រសិទ្ធ",
    formula: <MathRenderer math="V_{rms} = \sqrt{\frac{3RT}{M}}" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <MathRenderer math="V_{rms}" />, name: "ល្បឿនប្រសិទ្ធ", unit: <MathRenderer math="m/s" />
      },
      {
        symbol: <MathRenderer math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <MathRenderer math="J/(mol \cdot K)" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
      { symbol: <MathRenderer math="M" />, name: "ម៉ាសម៉ូល", unit: <MathRenderer math="kg/mol" /> },
    ],
  },
  {
    id: "11",
    title: "បម្លែងសីតុណ្ហភាពពី °C ទៅ Kelvin",
    formula: <MathRenderer math="T = t + 273.15" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាពដាច់ខាត", unit: <MathRenderer math="K" /> },
      { symbol: <MathRenderer math="t" />, name: "សីតុណ្ហភាពសែលស្យុស", unit: <MathRenderer math="°C" /> },
    ],
  },


  {
    id: "14",
    title: "ថាមពលសុីនេទិចមធ្យម",
    formula: <MathRenderer math="K_{av} = \frac{1}{2} m v^{2}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="m" />, name: "ម៉ាសរបស់ម៉ូលេគុល", unit: <MathRenderer math="kg" /> },
      { symbol: <MathRenderer math="v" />, name: "ល្បឿនមធ្យម", unit: <MathRenderer math="m/s" /> },
    ],
  },

  {
    id: "15",
    title: "ថាមពលសុីនេទិចមធ្យម (ទំនាក់ទំនងជាមួយសីតុណ្ហភាព)",
    formula: <MathRenderer math="K_{av} = \frac{3}{2} k_B T" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <MathRenderer math="k_B" />,
        name: "ថេរបុលស្មាន់",
        unit: <MathRenderer math="J/K" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
      { symbol: <MathRenderer math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <MathRenderer math="J" /> },
    ],
  },

  {
    id: "16",
    title: "ថាមពលសុីនេទិចសរុបនៃឧស្ម័ន",
    formula: <MathRenderer math="K = \frac{3}{2} n R T" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="K" />, name: "ថាមពលសុីនេទិចសរុប", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="n" />, name: "ចំនួនម៉ូល", unit: <MathRenderer math="mol" /> },
      {
        symbol: <MathRenderer math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <MathRenderer math="J/(mol \cdot K)" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },
  {
    id: "17",
    title: "ល្បឿនប្រសិទ្ធ",
    formula: <MathRenderer math="V_{rms} = \sqrt{\frac{3 R T}{M}}" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <MathRenderer math="V_{rms}" />, name: "ល្បឿនប្រសិទ្ធ", unit: <MathRenderer math="m/s" />
      },
      {
        symbol: <MathRenderer math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <MathRenderer math="J/(mol \cdot K)" />,
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
      { symbol: <MathRenderer math="M" />, name: "ម៉ាសម៉ូល", unit: <MathRenderer math="kg/mol" /> },
    ],
  },
  {
    id: "100",
    title: "កម្មន្តករណីមាឌថេរ (អុីសូករ)",
    formula: <MathRenderer math="W = 0" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="W" />, name: "កម្មន្ត", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="V" />, name: "មាឌ", unit: <MathRenderer math="m^3" /> },
    ],
  },
  {
    id: "101",
    title: "កម្មន្តករណីសម្ពាធថេរ (អុីសូបារ)",
    formula: <MathRenderer math="W = P (V_f - V_i)" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="W" />, name: "កម្មន្ត", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="P" />, name: "សម្ពាធ", unit: <MathRenderer math="Pa" /> },
      { symbol: <MathRenderer math="V_f" />, name: "មាឌចុងក្រោយ", unit: <MathRenderer math="m^3" /> },
      { symbol: <MathRenderer math="V_i" />, name: "មាឌដើម", unit: <MathRenderer math="m^3" /> },
    ],
  },
  {
    id: "102",
    title: "កម្មន្តករណីសម្ពាធប្រែប្រួល",
    formula: <MathRenderer math="W = \frac{1}{2}(P_f + P_i)(V_f - V_i)" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="P_f" />, name: "សម្ពាធចុងក្រោយ", unit: <MathRenderer math="Pa" /> },
      { symbol: <MathRenderer math="P_i" />, name: "សម្ពាធដើម", unit: <MathRenderer math="Pa" /> },
      { symbol: <MathRenderer math="V_f" />, name: "មាឌចុងក្រោយ", unit: <MathRenderer math="m^3" /> },
      { symbol: <MathRenderer math="V_i" />, name: "មាឌដើម", unit: <MathRenderer math="m^3" /> },
    ],
  },
  {
    id: "103",
    title: "កម្មន្តករណីសីតុណ្ហភាពថេរ (អុីសូទែម)",
    formula: <MathRenderer math="W = nRT \ln\left(\frac{V_f}{V_i}\right)" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="n" />, name: "ចំនួនម៉ូល", unit: <MathRenderer math="mol" /> },
      {
        symbol: <MathRenderer math="R" />, name: "ថេរសកលឧស្ម័ន", unit: <MathRenderer math="J/(mol\cdot K)" />
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
      { symbol: <MathRenderer math="V_f" />, name: "មាឌចុងក្រោយ", unit: <MathRenderer math="m^3" /> },
      { symbol: <MathRenderer math="V_i" />, name: "មាឌដើម", unit: <MathRenderer math="m^3" /> },
    ],
  },
  {
    id: "104",
    title: "ថាមពលក្នុង",
    formula: <MathRenderer math="U = \frac{3}{2} k_B T" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="U" />, name: "ថាមពលក្នុង", unit: <MathRenderer math="J" /> },
      {
        symbol: <MathRenderer math="k_B" />, name: "ថេរបុលស្មាន់", unit: <MathRenderer math="J/K" />
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },
  {
    id: "105",
    title: "ថាមពលក្នុង",
    formula: <MathRenderer math="U = \frac{3}{2} RT" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <MathRenderer math="R" />, name: "ថេរសកលឧស្ម័ន", unit: <MathRenderer math="J/(mol\cdot K)" />
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },
  {
    id: "106",
    title: "បម្រែបម្រួលថាមពលក្នុង",
    formula: <MathRenderer math="\Delta U = \frac{3}{2} N k_B \Delta T" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="\Delta U" />, name: "បម្រែបម្រួលថាមពលក្នុង", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនម៉ូលេគុល" },
      {
        symbol: <MathRenderer math="k_B" />, name: "ថេរបុលស្មាន់", unit: <MathRenderer math="J/K" />
      },
      { symbol: <MathRenderer math="\Delta T" />, name: "បម្រែបម្រួលសីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },
  {
    id: "107",
    title: "ថាមពលសុីនេទិចសរុប",
    formula: <MathRenderer math="K = \frac{3}{2} nRT" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="K" />, name: "ថាមពលសុីនេទិច", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="n" />, name: "ចំនួនម៉ូល", unit: <MathRenderer math="mol" /> },
      {
        symbol: <MathRenderer math="R" />, name: "ថេរសកលឧស្ម័ន", unit: <MathRenderer math="J/(mol\cdot K)" />
      },
      { symbol: <MathRenderer math="T" />, name: "សីតុណ្ហភាព", unit: <MathRenderer math="K" /> },
    ],
  },
  {
    id: "108",
    title: "ច្បាប់ទី១ទែម៉ូឌីណាមិច",
    formula: <MathRenderer math="\Delta U = Q - W" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="\Delta U" />, name: "បម្រែបម្រួលថាមពលក្នុង", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="Q" />, name: "កម្តៅ", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="W" />, name: "កម្មន្ត", unit: <MathRenderer math="J" /> },
    ],
  },
  {
    id: "109",
    title: "ទំនាក់ទំនងថាមពល",
    formula: <MathRenderer math="W_m = Q_h - Q_c" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="W_m" />, name: "កម្មន្តម៉ាស៊ីន", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="Q_h" />, name: "កម្តៅពីធុងក្តៅ", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="Q_c" />, name: "កម្តៅទៅធុងត្រជាក់", unit: <MathRenderer math="J" /> },
    ],
  },
  {
    id: "110",
    title: "ទិន្នផលកម្តៅនៃម៉ាស៊ីន",
    formula: <MathRenderer math="e = 1 - \frac{Q_c}{Q_h}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="e" />, name: "ទិន្នផល" },
      { symbol: <MathRenderer math="Q_h" />, name: "កម្តៅពីធុងក្តៅ", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="Q_c" />, name: "កម្តៅទៅធុងត្រជាក់", unit: <MathRenderer math="J" /> },
    ],
  },
  {
    id: "112",
    title: "ទិន្នផលកម្តៅនៃម៉ាសុីន",
    formula: <MathRenderer math="e = \frac{W_{m}}{Q_h}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="e" />, name: "ទិន្នផល" },
      { symbol: <MathRenderer math="W_{m}" />, name: "កម្មន្តម៉ាស៊ីន", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="Q_h" />, name: "កម្តៅពីធុងក្តៅ", unit: <MathRenderer math="J" /> }
    ],
  },
  {
    id: "113",
    title: "ទិន្នផលមេកានិច",
    formula: <MathRenderer math="e_{m} = \frac{W_{u}}{W_{m}}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="e_{m}" />, name: "ទិន្នផលមេកានិច" },
      { symbol: <MathRenderer math="W_{u}" />, name: "កម្មន្តបានការ", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="W_{m}" />, name: "កម្មន្តមេកានិច", unit: <MathRenderer math="J" /> }
    ],
  },
  {
    id: "114",
    title: "ទិន្នផលបានការ",
    formula: <MathRenderer math="e_{u} = \frac{W_{u}}{Q_{h}}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="e_{u}" />, name: "ទិន្នផលបានការ" },
      { symbol: <MathRenderer math="W_{u}" />, name: "កម្មន្តបានការ", unit: <MathRenderer math="J" /> },
      { symbol: <MathRenderer math="Q_{h}" />, name: "កម្តៅពីធុងក្តៅ", unit: <MathRenderer math="J" /> }
    ],
  },

  // wave section
  {
    id: "115",
    title: "គោលការណ៍រលកតម្រួតនៃរលក",
    formula: <MathRenderer math="y = a \sin(\omega t - \phi)" />,
    subject: "physics",
    category: "11",
    variables: [
      { symbol: <MathRenderer math="y" />, name: "អំព្លីទុតភ្លាមៗ", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="a" />, name: "អំព្លីទុតអតិបរិមា", unit: <MathRenderer math="m" /> },
      {
        symbol: <MathRenderer math="\omega" />, name: "ល្បឿនប្រេកង់", unit: <MathRenderer math="rad/s" />
      },
      { symbol: <MathRenderer math="t" />, name: "រយៈពេល", unit: <MathRenderer math="s" /> },
    ],
  },
  {
    id: "116",
    title: "ខួប",
    formula: <MathRenderer math="T = \frac{2\pi}{\omega}" />,
    subject: "physics",
    category: "11",
    variables: [
      { symbol: <MathRenderer math="T" />, name: "ខួប", unit: <MathRenderer math="s" /> },
      { symbol: <MathRenderer math="\omega" />, name: "ល្បឿនប្រេកង់", unit: <MathRenderer math="rad/s" /> },
    ],
  },
  {
    id: "117",
    title: "ប្រេកង់",
    formula: <MathRenderer math="f = \frac{1}{T}" />,
    subject: "physics",
    category: "11",
    variables: [
      { symbol: <MathRenderer math="f" />, name: "ប្រេកង់", unit: <MathRenderer math="Hz" /> },
      { symbol: <MathRenderer math="T" />, name: "ខួប", unit: <MathRenderer math="s" /> },
    ],
  },
  {
    id: "118",
    title: "ជំហានរលក",
    formula: <MathRenderer math="\lambda = v \cdot T" />,
    subject: "physics",
    category: "11",
    variables: [
      { symbol: <MathRenderer math="\lambda" />, name: "ជំហានរលក", unit: <MathRenderer math="m" /> },
      {
        symbol: <MathRenderer math="v" />, name: "ល្បឿនរលក", unit: <MathRenderer math="m/s" />
      },
      { symbol: <MathRenderer math="T" />, name: "ខួប", unit: <MathRenderer math="s" /> },
    ],
  },
  {
    id: "119",
    title: "សមីការរលក",
    formula: <MathRenderer math="y = a \sin(kx - \omega t)" />,
    subject: "physics",
    category: "11",
    variables: [
      { symbol: <MathRenderer math="y" />, name: "អំព្លីទុតភ្លាមៗ", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="a" />, name: "អំព្លីទុតអតិបរិមា", unit: <MathRenderer math="m" /> },
      {
        symbol: <MathRenderer math="k" />, name: "ចំនួនរលក", unit: <MathRenderer math="rad/m" />
      },
      { symbol: <MathRenderer math="x" />, name: "ទីតាំង", unit: <MathRenderer math="m" /> },
      {
        symbol: <MathRenderer math="\omega" />, name: "ល្បឿនប្រេកង់", unit: <MathRenderer math="rad/s" />
      },
      { symbol: <MathRenderer math="t" />, name: "រយៈពេល", unit: <MathRenderer math="s" /> },
    ],
  },
  {
    id: "120",
    title: "រលកតម្រួត",
    formula: <MathRenderer math="y = y_1 + y_2" />,
    subject: "physics",
    category: "11",
    variables: [
      { symbol: <MathRenderer math="y" />, name: "អំព្លីទុតសរុប", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="y_1" />, name: "អំព្លីទុតរលកទី១", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="y_2" />, name: "អំព្លីទុតរលកទី២", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "121",
    title: "ដែនម៉ាញេទិចនៃចរន្តត្រង់",
    formula: <MathRenderer math="B = \frac{\mu_0 I}{2\pi d}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="B" />, name: "អាំងឌុចស្យុងម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="d" />, name: "ចម្ងាយពីខ្សែ", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="\mu_0" />, name: "ជម្រាបម៉ាញេទិចសុញ្ញកាស", unit: <MathRenderer math="T\cdot m/A" /> },
    ],
  },
  {
    id: "122",
    title: "ដែនម៉ាញេទិចនៃចរន្តវង់ (រង្វង់មួយជុំ)",
    formula: <MathRenderer math="B = \frac{\mu_0 I}{2R}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="B" />, name: "អាំងឌុចស្យុងម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="R" />, name: "កាំរង្វង់", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "123",
    title: "ដែនម៉ាញេទិចនៃបូប៊ីនសំប៉ែត",
    formula: <MathRenderer math="B = \frac{\mu_0 N I}{2R}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="N" />, name: "ចំនួនស្ពៀរ" },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="R" />, name: "កាំរង្វង់", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="\mu_0" />, name: "ជម្រាបម៉ាញេទិចសុញ្ញកាស" },
    ],
  },
  {
    id: "124",
    title: "ដែនម៉ាញេទិច (មានជម្រាបម៉ាញេទិចធៀប)",
    formula: <MathRenderer math="B = \frac{\mu_0 \mu_r I}{2R}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="\mu_r" />, name: "ជម្រាបម៉ាញេទិចធៀប" },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="R" />, name: "កាំរង្វង់", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "125",
    title: "ដែនម៉ាញេទិចនៃបូប៊ីនសំប៉ែត (មាន \u03bc_r)",
    formula: <MathRenderer math="B = \frac{\mu_0 \mu_r N I}{2R}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="N" />, name: "ចំនួនស្ពៀរ" },
      { symbol: <MathRenderer math="\mu_r" />, name: "ជម្រាបម៉ាញេទិចធៀប" },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="R" />, name: "កាំរង្វង់", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "126",
    title: "ដែនម៉ាញេទិចក្នុងសូលេណូអុីត",
    formula: <MathRenderer math="B = \mu_0 n I" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="B" />, name: "ដែនម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      { symbol: <MathRenderer math="n" />, name: "ចំនួនស្ពៀរ​ក្នុង​មួយ​ម៉ែត្រ", unit: <MathRenderer math="m^{-1}" /> },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
    ],
  },
  {
    id: "127",
    title: "ដែនម៉ាញេទិចសូលេណូអុីត",
    formula: <MathRenderer math="B = \mu_0 \frac{N}{L} I" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="N" />, name: "ចំនួនស្ពៀរសរុប" },
      { symbol: <MathRenderer math="L" />, name: "ប្រវែងសូលេណូអុីត", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="I" />, name: "ចរន្តអគ្គិសនី", unit: <MathRenderer math="A" /> },
    ],
  },
  {
    id: "128",
    title: "ទំនាក់ទំនងចំនួនស្ពៀរ",
    formula: <MathRenderer math="n = \frac{N}{L}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="n" />, name: "ស្ពៀរ​ក្នុង​មួយ​ម៉ែត្រ", unit: <MathRenderer math="m^{-1}" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនស្ពៀរ" },
      { symbol: <MathRenderer math="L" />, name: "ប្រវែង", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "129",
    title: "កម្លាំងម៉ាញេទិចលើបន្ទុកអគ្គិសនី",
    formula: <MathRenderer math="F_m = |q| v B \sin\theta" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="F_m" />, name: "កម្លាំងម៉ាញេទិច", unit: <MathRenderer math="N" /> },
      { symbol: <MathRenderer math="q" />, name: "បន្ទុកអគ្គិសនី", unit: <MathRenderer math="C" /> },
      {
        symbol: <MathRenderer math="v" />, name: "ល្បឿនបន្ទុក", unit: <MathRenderer math="m/s" />
      },
      { symbol: <MathRenderer math="B" />, name: "ដែនម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      { symbol: <MathRenderer math="\theta" />, name: "មុំរវាង v និង B", unit: <MathRenderer math="deg" /> },
    ],
  },
  {
    id: "130",
    title: "កាំនៃគន្លងក្នុងដែនម៉ាញេទិច",
    formula: <MathRenderer math="R = \frac{m v}{|q| B}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="R" />, name: "កាំគន្លង", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="m" />, name: "ម៉ាស", unit: <MathRenderer math="kg" /> },
      {
        symbol: <MathRenderer math="v" />, name: "ល្បឿន", unit: <MathRenderer math="m/s" />
      },
      { symbol: <MathRenderer math="q" />, name: "បន្ទុក", unit: <MathRenderer math="C" /> },
      { symbol: <MathRenderer math="B" />, name: "ដែនម៉ាញេទិច", unit: <MathRenderer math="T" /> },
    ],
  },
  {
    id: "131",
    title: "ខួបនៃចលនាក្នុងដែនម៉ាញេទិច",
    formula: <MathRenderer math="T = \frac{2\pi R}{v}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="T" />, name: "ខួបចលនា", unit: <MathRenderer math="s" /> },
      { symbol: <MathRenderer math="R" />, name: "កាំគន្លង", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="v" />, name: "ល្បឿន", unit: <MathRenderer math="m/s" /> },
    ],
  },
  {
    id: "132",
    title: "កម្លាំងអេឡិចត្រូម៉ាញេទិច",
    formula: <MathRenderer math="F = B I l \sin\theta" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="F" />, name: "កម្លាំងអេឡិចត្រូម៉ាញេទិច", unit: <MathRenderer math="N" /> },
      { symbol: <MathRenderer math="B" />, name: "ដែនម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      { symbol: <MathRenderer math="I" />, name: "ចរន្ត", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="l" />, name: "ប្រវែងខ្សែ", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "133",
    title: "កម្លាំងអេឡិចត្រូម៉ាញេទិច",
    formula: <MathRenderer math="F = \frac{\mu_0 I_1 I_2 l}{2\pi d}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="I_1" />, name: "ចរន្តទី១", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="I_2" />, name: "ចរន្តទី២", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="l" />, name: "ប្រវែងខ្សែ", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="d" />, name: "ចម្ងាយរវាងខ្សែ", unit: <MathRenderer math="m" /> },
      { symbol: <MathRenderer math="\mu_0" />, name: "ជម្រាបម៉ាញេទិចសុញ្ញកាស" },
    ],
  },
  {
    id: "134",
    title: "ភ្លុចម៉ាញេទិច",
    formula: <MathRenderer math="\Phi = B A \cos\theta" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="\Phi" />, name: "ភ្លុចម៉ាញេទិច", unit: <MathRenderer math="Wb" /> },
      { symbol: <MathRenderer math="B" />, name: "ដែនម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      { symbol: <MathRenderer math="A" />, name: "ផ្ទៃកាត់", unit: <MathRenderer math="m^2" /> },
      { symbol: <MathRenderer math="\theta" />, name: "មុំរវាង B និង A", unit: <MathRenderer math="^\circ" /> },
    ],
  },
  {
    id: "135",
    title: "កម្លាំងអគ្គិសនីចលករអាំងឌ្វី",
    formula: <MathRenderer math="|E| = N \left| \frac{\Delta \Phi}{\Delta t} \right|" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="E" />, name: "កម្លាំងអគ្គិសនីចលករ", unit: <MathRenderer math="V" /> },
      { symbol: <MathRenderer math="\Phi" />, name: "ភ្លុចម៉ាញេទិច", unit: <MathRenderer math="Wb" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនស្ពៀ", unit: null },
      { symbol: <MathRenderer math="t" />, name: "រយៈពេល", unit: <MathRenderer math="s" /> },
    ],
  },
  {
    id: "136",
    title: "កម្លាំងអគ្គិសនីចលករអាំងឌ្វីក្នុងរបាផ្លាស់ទី",
    formula: <MathRenderer math="|E| = B v l \sin\theta" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="E" />, name: "កម្លាំងអគ្គិសនីចលករ", unit: <MathRenderer math="V" /> },
      { symbol: <MathRenderer math="B" />, name: "ដែនម៉ាញេទិច", unit: <MathRenderer math="T" /> },
      {
        symbol: <MathRenderer math="v" />, name: "ល្បឿន", unit: <MathRenderer math="m/s" />
      },
      { symbol: <MathRenderer math="l" />, name: "ប្រវែងរបា", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "137",
    title: "កម្លាំងអគ្គិសនីចលករអាំងឌ្វីខណៈ",
    formula: <MathRenderer math="e = E_m \sin\theta" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="e" />, name: "EMF ខណៈ", unit: <MathRenderer math="V" /> },
      { symbol: <MathRenderer math="E_m" />, name: "EMF អតិបរិមា", unit: <MathRenderer math="V" /> },
    ],
  },
  {
    id: "138",
    title: "កម្លាំងអគ្គិសនីចលករអាំងឌ្វីខណៈពេលណាមួយ",
    formula: <MathRenderer math="e = E_m \sin(\omega t)" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="e" />, name: "EMF ខណៈ", unit: <MathRenderer math="V" /> },
      { symbol: <MathRenderer math="E_m" />, name: "EMF អតិបរិមា", unit: <MathRenderer math="V" /> },
      {
        symbol: <MathRenderer math="\omega" />, name: "ល្បឿនប្រេកង់", unit: <MathRenderer math="rad/s" />
      },
      { symbol: <MathRenderer math="t" />, name: "រយៈពេល", unit: <MathRenderer math="s" /> },
    ],
  },
  {
    id: "139",
    title: "អាំងឌុចតង់",
    formula: <MathRenderer math="L = \mu \frac{N^2 A}{l}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="L" />, name: "អាំងឌុចតង់", unit: <MathRenderer math="H" /> },
      { symbol: <MathRenderer math="N" />, name: "ចំនួនស្ពៀ", unit: null },
      { symbol: <MathRenderer math="A" />, name: "ផ្ទៃកាត់", unit: <MathRenderer math="m^2" /> },
      { symbol: <MathRenderer math="l" />, name: "ប្រវែង", unit: <MathRenderer math="m" /> },
    ],
  },
  {
    id: "140",
    title: "ភ្លុចអាំងឌុចស្យុង",
    formula: <MathRenderer math="\Phi = L i" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="\Phi" />, name: "ភ្លុចអាំងឌុចស្យុង", unit: <MathRenderer math="Wb" /> },
      { symbol: <MathRenderer math="L" />, name: "អាំងឌុចតង់", unit: <MathRenderer math="H" /> },
      { symbol: <MathRenderer math="i" />, name: "ចរន្ត", unit: <MathRenderer math="A" /> },
    ],
  },
  {
    id: "141",
    title: "កម្លាំងអគ្គិសនីចលករអូតូអាំងឌ្វី",
    formula: <MathRenderer math="e = -L \frac{di}{dt}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="e" />, name: "EMF អូតូអាំងឌ្វី", unit: <MathRenderer math="V" /> },
      { symbol: <MathRenderer math="L" />, name: "អាំងឌុចតង់", unit: <MathRenderer math="H" /> },
      { symbol: <MathRenderer math="i" />, name: "ចរន្ត", unit: <MathRenderer math="A" /> },
    ],
  },
  {
    id: "142",
    title: "ថេរពេលនៃសៀគ្វី",
    formula: <MathRenderer math="\tau = \frac{L}{R}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="\tau" />, name: "ថេរពេល", unit: <MathRenderer math="s" /> },
      { symbol: <MathRenderer math="L" />, name: "អាំងឌុចតង់", unit: <MathRenderer math="H" /> },
      { symbol: <MathRenderer math="R" />, name: "អាំងតង់ស៊ីតេរេស៊ីស្តង់", unit: <MathRenderer math="\Omega" /> },
    ],
  },
  {
    id: "143",
    title: "សមីការចរន្តខណៈ",
    formula: <MathRenderer math="i = I_p (1 - e^{-t/\tau})" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="i" />, name: "ចរន្តខណៈ", unit: <MathRenderer math="A" /> },
      { symbol: <MathRenderer math="I_p" />, name: "ចរន្តអតិបរិមា", unit: <MathRenderer math="A" /> },
    ],
  },
  {
    id: "144",
    title: "ខួបនៃសៀគ្វី",
    formula: <MathRenderer math="T = 2\pi \sqrt{LC}" />,
    subject: "physics",
    category: "12",
    variables: [
      { symbol: <MathRenderer math="T" />, name: "ខួប", unit: <MathRenderer math="s" /> },
      { symbol: <MathRenderer math="L" />, name: "អាំងឌុចតង់", unit: <MathRenderer math="H" /> },
      { symbol: <MathRenderer math="C" />, name: "កាប៉ាស៊ីតង់", unit: <MathRenderer math="F" /> },
    ],
  },
  {
    id: "145",
    title: "ចរន្តឆ្លាស់",
    formula: <MathRenderer math="i = I_m \sin(\omega t + \phi)" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "146",
    title: "ចរន្តប្រសិទ្ធ",
    formula: <MathRenderer math="I = \frac{I_m}{\sqrt{2}}" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "147",
    title: "សមីការតង់ស្យុង",
    formula: <MathRenderer math="v = V_m \sin(\omega t + \phi)" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "148",
    title: "តង់ស្យុងប្រសិទ្ធ",
    formula: <MathRenderer math="V = \frac{V_m}{\sqrt{2}}" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "149",
    title: "អាំងប៉េដង់ R",
    formula: <MathRenderer math="Z_R = R" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "150",
    title: "អាំងប៉េដង់ C",
    formula: <MathRenderer math="Z_C = \frac{1}{\omega C}" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "151",
    title: "អាំងប៉េដង់ L",
    formula: <MathRenderer math="Z_L = \omega L" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "152",
    title: "អាំងប៉េដង់ RC",
    formula: <MathRenderer math="Z_{RC} = \sqrt{R^2 + \left(\frac{1}{\omega C}\right)^2}" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "153",
    title: "អាំងប៉េដង់ RL",
    formula: <MathRenderer math="Z_{RL} = \sqrt{R^2 + (\omega L)^2}" />,
    subject: "physics",
    category: "12",
  },
  {
    id: "154",
    title: "អាំងប៉េដង់ RLC",
    formula: <MathRenderer math="Z_{RLC} = \sqrt{R^2 + \left(\frac{1}{\omega C}\right)^2 + (\omega L)^2}" />,
    subject: "physics",
    category: "12",
  },



  {
    id: "18",
    title: "ល្បឿនមធ្យមកំណ",
    formula: (
      <MathRenderer math="v_m = \frac{[I_2]_2 - [I_2]_1}{t_2 - t_1} = \frac{\Delta [I_2]}{\Delta t}" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="v_m" />, name: "ល្បឿនមធ្យមកំណ" },
      { symbol: <MathRenderer math="[I_2]" />, name: "កំហាប់អ៊ីយ៉ូត" },
      { symbol: <MathRenderer math="t" />, name: "ពេលវេលា", unit: <MathRenderer math="s" /> },
    ],
  },

  {
    id: "19",
    title: "ល្បឿនខណៈ",
    formula: (
      <MathRenderer math="v_t =  \frac{d[I_2]}{dt}" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="v_t" />, name: "ល្បឿនខណៈ" },
      { symbol: <MathRenderer math="[I_2]" />, name: "កំហាប់អ៊ីយ៉ូត" },
      { symbol: <MathRenderer math="t" />, name: "ពេលវេលា", unit: <MathRenderer math="s" /> },
    ],
  },

  {
    id: "20",
    title: "ល្បឿនមធ្យមបំបាត់អង្គធាតុប្រតិករ",
    formula: (
      <MathRenderer math="v_m = -\frac{[H_2O_2]_2 - [H_2O_2]_1}{t_2 - t_1}" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="v_m" />, name: "ល្បឿនមធ្យមបំបាត់" },
      { symbol: <MathRenderer math="[H_2O_2]" />, name: "កំហាប់អ៊ីដ្រូសែនប៉ឺរ៉ុកស៊ីត" },
      { symbol: <MathRenderer math="t" />, name: "ពេលវេលា", unit: <MathRenderer math="s" /> },
    ],
  },

  {
    id: "21",
    title: "ល្បឿនខណៈបំបាត់អង្គធាតុប្រតិករ",
    formula: (
      <MathRenderer math="v_t =  -\frac{d[H_2O_2]}{dt}" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="v_t" />, name: "ល្បឿនខណៈបំបាត់" },
      { symbol: <MathRenderer math="[H_2O_2]" />, name: "កំហាប់អ៊ីដ្រូសែនប៉ឺរ៉ុកស៊ីត" },
      { symbol: <MathRenderer math="t" />, name: "ពេលវេលា", unit: <MathRenderer math="s" /> },
    ],
  },


  // Math Section
  {
    id: "22",
    title: "ដេរីវេនៃអនុគមន៍ថេរ",
    formula: <MathRenderer math="y = k \Rightarrow y' = 0" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="k" />, name: "ចំនួនថេរ" },
    ],
  },
  {
    id: "23",
    title: "ដេរីវេនៃអនុគមន៍អានុភាព",
    formula: <MathRenderer math="y = x^n \Rightarrow y' = nx^{n-1}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ" },
      { symbol: <MathRenderer math="n" />, name: "លេខអានុភាព" },
    ],
  },
  {
    id: "24",
    title: "ដេរីវេនៃអនុគមន៍ 1/x",
    formula: <MathRenderer math="y = \frac{1}{x} \Rightarrow y' = -\frac{1}{x^2}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ (x ≠ 0)" },
    ],
  },
  {
    id: "25",
    title: "ដេរីវេនៃអនុគមន៍ √x",
    formula: <MathRenderer math="y = \sqrt{x} \Rightarrow y' = \frac{1}{2\sqrt{x}}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ (x > 0)" },
    ],
  },
  {
    id: "26",
    title: "ដេរីវេនៃអនុគមន៍ e^x",
    formula: <MathRenderer math="y = e^x \Rightarrow y' = e^x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ" },
    ],
  },
  {
    id: "27",
    title: "ដេរីវេនៃអនុគមន៍ a^x",
    formula: <MathRenderer math="y = a^x \Rightarrow y' = a^x \ln a" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ (a > 0, a ≠ 1)" },
      { symbol: <MathRenderer math="x" />, name: "អថេរ" },
    ],
  },
  {
    id: "28",
    title: "ដេរីវេនៃអនុគមន៍ ln x",
    formula: <MathRenderer math="y = \ln x \Rightarrow y' = \frac{1}{x}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ (x > 0)" },
    ],
  },
  {
    id: "29",
    title: "ដេរីវេនៃអនុគមន៍ sin x",
    formula: <MathRenderer math="y = \sin x \Rightarrow y' = \cos x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "30",
    title: "ដេរីវេនៃអនុគមន៍ cos x",
    formula: <MathRenderer math="y = \cos x \Rightarrow y' = -\sin x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "31",
    title: "ដេរីវេនៃអនុគមន៍ tan x",
    formula: <MathRenderer math="y = \tan x \Rightarrow y' = 1 + \tan^2 x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "32",
    title: "ដេរីវេនៃអនុគមន៍ cot x",
    formula: <MathRenderer math="y = \cot x \Rightarrow y' = -(1 + \cot^2 x)" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "33",
    title: "ដេរីវេ y = u^n",
    formula: <MathRenderer math="y = u^n \Rightarrow y' = n u' u^{n-1}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
      { symbol: <MathRenderer math="n" />, name: "លេខអានុភាព" },
    ],
  },
  {
    id: "34",
    title: "ដេរីវេ y = √u",
    formula: <MathRenderer math="y = \sqrt{u} \Rightarrow y' = \frac{u'}{2\sqrt{u}}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
    ],
  },
  {
    id: "35",
    title: "ដេរីវេ y = uv",
    formula: <MathRenderer math="y = uv \Rightarrow y' = u'v + uv'" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍ទី១" },
      { symbol: <MathRenderer math="v" />, name: "អនុគមន៍ទី២" },
    ],
  },
  {
    id: "36",
    title: "ដេរីវេ y = u / v",
    formula: <MathRenderer math="y = \frac{u}{v} \Rightarrow y' = \frac{u'v - uv'}{v^2}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍ទី១" },
      { symbol: <MathRenderer math="v" />, name: "អនុគមន៍ទី២ (v ≠ 0)" },
    ],
  },
  {
    id: "37",
    title: "ដេរីវេ y = ln u",
    formula: <MathRenderer math="y = \ln u \Rightarrow y' = \frac{u'}{u}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
    ],
  },
  {
    id: "38",
    title: "ដេរីវេ y = sin u",
    formula: <MathRenderer math="y = \sin u \Rightarrow y' = u' \cos u" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "39",
    title: "ដេរីវេ y = cos u",
    formula: <MathRenderer math="y = \cos u \Rightarrow y' = -u' \sin u" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "40",
    title: "ដេរីវេ y = e^u",
    formula: <MathRenderer math="y = e^u \Rightarrow y' = u' e^u" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "41",
    title: "ដេរីវេ y = tan u",
    formula: <MathRenderer math="y = \tan u \Rightarrow y' = u'(1 + \tan^2 u)" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "42",
    title: "ដេរីវេ y = u^v",
    formula: <MathRenderer math="y = u^v \Rightarrow y' = u^v \left(v' \ln u + \frac{v u'}{u}\right)" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍មូលដ្ឋាន (u > 0)" },
      { symbol: <MathRenderer math="v" />, name: "អនុគមន៍អានុភាព" },
    ],
  },
  {
    id: "43",
    title: "ដេរីវេ y = sin x",
    formula: <MathRenderer math="y = \sin x \Rightarrow y' = \cos x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "44",
    title: "ដេរីវេ y = cos x",
    formula: <MathRenderer math="y = \cos x \Rightarrow y' = -\sin x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "45",
    title: "ដេរីវេ y = tan x",
    formula: <MathRenderer math="y = \tan x \Rightarrow y' = 1 + \tan^2 x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "46",
    title: "ដេរីវេ y = cot x",
    formula: <MathRenderer math="y = \cot x \Rightarrow y' = -(1 + \cot^2 x)" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
    ],
  },
  {
    id: "47",
    title: "ដេរីវេ y = sin u",
    formula: <MathRenderer math="y = \sin u \Rightarrow y' = u' \cos u" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "48",
    title: "ដេរីវេ y = cos u",
    formula: <MathRenderer math="y = \cos u \Rightarrow y' = -u' \sin u" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "49",
    title: "ដេរីវេ y = tan u",
    formula: <MathRenderer math="y = \tan u \Rightarrow y' = u'(1 + \tan^2 u)" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "50",
    title: "ដេរីវេ y = cot u",
    formula: <MathRenderer math="y = \cot u \Rightarrow y' = -u'(1 + \cot^2 u)" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "51",
    title: "ដេរីវេ y = e^x",
    formula: <MathRenderer math="y = e^x \Rightarrow y' = e^x" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ" },
    ],
  },
  {
    id: "52",
    title: "ដេរីវេ y = a^x",
    formula: <MathRenderer math="y = a^x \Rightarrow y' = a^x \ln a" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ (a > 0, a ≠ 1)" },
      { symbol: <MathRenderer math="x" />, name: "អថេរ" },
    ],
  },

  {
    id: "53",
    title: "ដេរីវេ y = e^u",
    formula: <MathRenderer math="y = e^u \Rightarrow y' = u' e^u" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "54",
    title: "ដេរីវេ y = a^u",
    formula: <MathRenderer math="y = a^u \Rightarrow y' = u' a^u \ln a" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ (a > 0, a ≠ 1)" },
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x" },
    ],
  },
  {
    id: "55",
    title: "ដេរីវេ y = ln x",
    formula: <MathRenderer math="y = \ln x \Rightarrow y' = \frac{1}{x}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ (x > 0)" },
    ],
  },
  {
    id: "56",
    title: "ដេរីវេ y = ln |x|",
    formula: <MathRenderer math="y = \ln |x| \Rightarrow y' = \frac{1}{x}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="x" />, name: "អថេរ (x ≠ 0)" },
    ],
  },
  {
    id: "57",
    title: "ដេរីវេ y = log_a x",
    formula: <MathRenderer math="y = \log_a x \Rightarrow y' = \frac{1}{x \ln a}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "មូលដ្ឋាន (a > 0, a ≠ 1)" },
      { symbol: <MathRenderer math="x" />, name: "អថេរ (x > 0)" },
    ],
  },
  {
    id: "58",
    title: "ដេរីវេ y = ln u",
    formula: <MathRenderer math="y = \ln u \Rightarrow y' = \frac{u'}{u}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
    ],
  },
  {
    id: "59",
    title: "ដេរីវេ y = ln |u|",
    formula: <MathRenderer math="y = \ln |u| \Rightarrow y' = \frac{u'}{u}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x (u ≠ 0)" },
    ],
  },
  {
    id: "60",
    title: "ដេរីវេ y = log_a u",
    formula: <MathRenderer math="y = \log_a u \Rightarrow y' = \frac{u'}{u \ln a}" />,
    subject: "math",
    category: "3",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "មូលដ្ឋាន (a > 0, a ≠ 1)" },
      { symbol: <MathRenderer math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
    ],
  },

  {
    id: "61",
    title: "អាំងតេក្រាលនៃ cf(x) + g(x)",
    formula: (
      <MathRenderer math="\int (c f(x) + g(x)) dx = c \int f(x) dx + \int g(x) dx + C" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="c" />, name: "ថេរ" },
      { symbol: <MathRenderer math="f(x), g(x)" />, name: "អនុគមន៍នៃ x" },
    ],
  },

  {
    id: "62",
    title: "អាំងតេក្រាលនៃ ថេរ",
    formula: <MathRenderer math="\int c \, dx = cx + C" />,
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="c" />, name: "ចំនួនថេរ" },
    ],
  },

  {
    id: "63",
    title: "អាំងតេក្រាលនៃ x^n",
    formula: (
      <MathRenderer math="\int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="n" />, name: "លេខពុម្ព (n ≠ −1)" },
    ],
  },

  {
    id: "64",
    title: "អាំងតេក្រាលនៃ e^{ax}",
    formula: (
      <MathRenderer math="\int e^{ax} dx = \frac{1}{a} e^{ax} + C" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ (a ≠ 0)" },
    ],
  },

  {
    id: "65",
    title: "អាំងតេក្រាលនៃ a^x",
    formula: (
      <MathRenderer math="\int a^x dx = \frac{a^x}{\ln a} + C \quad (a>0, a \neq 1)" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "មូលដ្ឋាន (a>0, a≠1)" },
    ],
  },

  // 

  {
    id: "66",
    title: "អាំងតេក្រាលនៃ sin(ax)",
    formula: (
      <MathRenderer math="\int \sin(ax) dx = -\frac{1}{a}\cos(ax) + C" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ" },
    ],
  },

  {
    id: "67",
    title: "អាំងតេក្រាលនៃ cos(ax)",
    formula: (
      <MathRenderer math="\int \cos(ax) dx = \frac{1}{a}\sin(ax) + C" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ" },
    ],
  },

  {
    id: "68",
    title: "អាំងតេក្រាលនៃ tan(ax)",
    formula: (
      <MathRenderer math="\int \tan(ax) dx = -\frac{1}{a}\ln|\cos(ax)| + C" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ" },
    ],
  },

  {
    id: "69",
    title: "អាំងតេក្រាលនៃ cot(ax)",
    formula: (
      <MathRenderer math="\int \cot(ax) dx = \frac{1}{a}\ln|\sin(ax)| + C" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="a" />, name: "ចំនួនថេរ" },
    ],
  },

  // 

  {
    id: "70",
    title: "លក្ខណៈគុណថេរ",
    formula: (
      <MathRenderer math="\int k f(x) dx = k \int f(x) dx" />
    ),
    subject: "math",
    category: "4",
    variables: [
      { symbol: <MathRenderer math="k" />, name: "ចំនួនថេរ" },
    ],
  },

  {
    id: "71",
    title: "លក្ខណៈបូកអាំងតេក្រាល",
    formula: (
      <MathRenderer math="\int [f(x)+g(x)] dx = \int f(x) dx + \int g(x) dx" />
    ),
    subject: "math",
    category: "4",
  },

  {
    id: "72",
    title: "លក្ខណៈដកអាំងតេក្រាល",
    formula: (
      <MathRenderer math="\int [f(x)-g(x)] dx = \int f(x) dx - \int g(x) dx" />
    ),
    subject: "math",
    category: "4",
  },

  // 

  {
    id: "73",
    title: "អាំងតេក្រាលកំណត់",
    formula: <MathRenderer math="\int_a^a f(x) dx = 0" />,
    subject: "math",
    category: "4",
  },

  {
    id: "74",
    title: "អាំងតេក្រាលកំណត់",
    formula: (
      <MathRenderer math="\int_a^b f(x) dx = -\int_b^a f(x) dx" />
    ),
    subject: "math",
    category: "4",
  },

  {
    id: "75",
    title: "អាំងតេក្រាលកំណត់",
    formula: (
      <MathRenderer math="\int_a^b k f(x) dx = k \int_a^b f(x) dx" />
    ),
    subject: "math",
    category: "4",
  },

  // 

  {
    id: "76",
    title: "សមីការឌីផេរ៉ង់ស្យែលអូម៉ូសែនលំដាប់ទី២",
    formula: (
      <MathRenderer math="a y'' + b y' + c y = 0" />
    ),
    subject: "math",
    category: "5",
  },

  {
    id: "77",
    title: "សមីការសម្គាល់",
    formula: (
      <MathRenderer math="a r^2 + b r + c = 0" />
    ),
    subject: "math",
    category: "5",
  },

  {
    id: "78",
    title: "សមីការមិនអូម៉ូសែន",
    formula: (
      <MathRenderer math="a y'' + b y' + c y = f(x)" />
    ),
    subject: "math",
    category: "5",
  },

  {
    id: "82",
    title: "ស្វីតផលគុណ",
    formula: <MathRenderer math="P(A \cap B) = P(A)\cdot P(B)" />,
    subject: "math",
    category: "6",
    variables: [
      { symbol: <MathRenderer math="A,B" />, name: "ព្រឹត្តការណ៍" },
    ],
  },

  {
    id: "83",
    title: "ស្វីតផលបូក",
    formula: (
      <MathRenderer math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
    ),
    subject: "math",
    category: "6",
    variables: [
      { symbol: <MathRenderer math="A,B" />, name: "ព្រឹត្តការណ៍" },
    ],
  },

  // Counting (បន្សំ និង ចម្លាស់)
  {
    id: "84",
    title: "បន្សំនៃ r ធាតុក្នុង n ធាតុ",
    formula: (
      <MathRenderer math="C(n,r) = \frac{n!}{r!(n-r)!}" />
    ),
    subject: "math",
    category: "6",
    variables: [
      { symbol: <MathRenderer math="n" />, name: "ចំនួនធាតុសរុប" },
      { symbol: <MathRenderer math="r" />, name: "ចំនួនធាតុជ្រើសរើស" },
    ],
  },

  {
    id: "85",
    title: "ចម្លាស់នៃ r ធាតុក្នុង n ធាតុ",
    formula: (
      <MathRenderer math="P(n,r) = \frac{n!}{(n-r)!}" />
    ),
    subject: "math",
    category: "6",
    variables: [
      { symbol: <MathRenderer math="n" />, name: "ចំនួនធាតុសរុប" },
      { symbol: <MathRenderer math="r" />, name: "ចំនួនធាតុយកចេញ" },
    ],
  },


  // Vector Geometry (វ៉ិចទ័រ)
  {
    id: "86",
    title: "វ៉ិចទ័រ AB",
    formula: (
      <MathRenderer math="\vec{AB}=(x_B-x_A,\;y_B-y_A,\;z_B-z_A)" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "87",
    title: "ចម្ងាយរវាងចំណុច A និង B",
    formula: (
      <MathRenderer math="|\vec{AB}|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "88",
    title: "ផលគុណស្កាលែ",
    formula: (
      <MathRenderer math="\vec{u}\cdot\vec{v}=x_1x_2+y_1y_2+z_1z_2" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "89",
    title: "លក្ខខណ្ឌវ៉ិចទ័រពីរកែងគ្នា",
    formula: (
      <MathRenderer math="\vec{u}\cdot\vec{v}=0" />
    ),
    subject: "math",
    category: "7",
  },

  // Cross & Mixed Product
  {
    id: "90",
    title: "ផលគុណវ៉ិចទ័រ",
    formula: (
      <MathRenderer math="\vec{u}\times\vec{v}=(y_1z_2-z_1y_2)\vec{i}-(x_1z_2-z_1x_2)\vec{j}+(x_1y_2-y_1x_2)\vec{k}" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "91",
    title: "ផលគុណចម្រុះនៃបីវ៉ិចទ័រ",
    formula: (
      <MathRenderer math="\vec{u}\cdot(\vec{v}\times\vec{w})=\begin{vmatrix}x_u&y_u&z_u\\x_v&y_v&z_v\\x_w&y_w&z_w\end{vmatrix}" />
    ),
    subject: "math",
    category: "7",
  },

  // Geometry in Space (លំហ)
  {
    id: "92",
    title: "សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់",
    formula: (
      <MathRenderer math="\begin{cases}x=x_0+at\\y=y_0+bt\\z=z_0+ct\end{cases},\; t\in\mathbb{R}" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "93",
    title: "សមីការប្លង់",
    formula: (
      <MathRenderer math="a(x-x_0)+b(y-y_0)+c(z-z_0)=0" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "94",
    title: "សមីការស្វ៊ែរ",
    formula: (
      <MathRenderer math="(x-x_0)^2+(y-y_0)^2+(z-z_0)^2=r^2" />
    ),
    subject: "math",
    category: "7",
  },

  // Distance Formulas
  {
    id: "95",
    title: "ចម្ងាយពីចំណុចទៅប្លង់",
    formula: (
      <MathRenderer math="d=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}" />
    ),
    subject: "math",
    category: "7",
  },

  {
    id: "96",
    title: "ចម្ងាយពីចំណុចទៅបន្ទាត់",
    formula: (
      <MathRenderer math="d(A,L)=\frac{|\vec{MA}\times\vec{u}|}{|\vec{u}|}" />
    ),
    subject: "math",
    category: "7",
  },

  // Conic Sections (ប៉ារ៉ាបូល / អេលីប / អុីពែបូល)
  {
    id: "97",
    title: "ប៉ារ៉ាបូល (អ័ក្សឈរ)",
    formula: <MathRenderer math="y^2=4px" />,
    subject: "math",
    category: "8",
  },

  {
    id: "98",
    title: "ប៉ារ៉ាបូល (អ័ក្សដេក)",
    formula: <MathRenderer math="x^2=4py" />,
    subject: "math",
    category: "8",
  },

  // Ellipse
  {
    id: "99",
    title: "អេលីប (អ័ក្សធំដេក)",
    formula: (
      <MathRenderer math="\frac{x^2}{a^2}+\frac{y^2}{b^2}=1" />
    ),
    subject: "math",
    category: "8",
  },

  {
    id: "100",
    title: "អេលីប (អ័ក្សធំឈរ)",
    formula: (
      <MathRenderer math="\frac{x^2}{a^2}+\frac{y^2}{b^2}=1" />
    ),
    subject: "math",
    category: "8",
  },


  // Hyperbola
  {
    id: "101",
    title: "អុីពែបូល (អ័ក្សទទឺងដេក)",
    formula: (
      <MathRenderer math="\frac{x^2}{a^2}-\frac{y^2}{b^2}=1" />
    ),
    subject: "math",
    category: "8",
  },

  {
    id: "102",
    title: "អុីពែបូល (អ័ក្សទទឺងឈរ)",
    formula: (
      <MathRenderer math="\frac{y^2}{a^2}-\frac{x^2}{b^2}=1" />
    ),
    subject: "math",
    category: "8",
  },



  {
    id: "200",
    title: "pH",
    formula: (
      <MathRenderer math="pH = -\log [H_3O^+] \;\Leftrightarrow\; [H_3O^+] = 10^{-pH}" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="pH" />, name: "អាស៊ីតភាព" },
      { symbol: <MathRenderer math="[H_3O^+]" />, name: "កំហាប់អ៊ីយ៉ុងអ៊ីដ្រូន្យូម", unit: <MathRenderer math="mol/L" /> },
    ],
  },

  {
    id: "201",
    title: "pOH",
    formula: (
      <MathRenderer math="pOH = -\log [OH^-] \;\Leftrightarrow\; [OH^-] = 10^{-pOH}" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="pOH" />, name: "អាល់កាលីភាព" },
      { symbol: <MathRenderer math="[OH^-]" />, name: "កំហាប់អ៊ីយ៉ុងអ៊ីដ្រូកស៊ីត", unit: <MathRenderer math="mol/L" /> },
    ],
  },

  {
    id: "202",
    title: "ផលគុណអ៊ីយ៉ុងទឹក",
    formula: (
      <MathRenderer math="K_w = 10^{-14} \;\Leftrightarrow\; pK_w = 14" />
    ),
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <MathRenderer math="K_w" />, name: "ផលគុណអ៊ីយ៉ុងទឹក" },
      { symbol: <MathRenderer math="pK_w" />, name: "លោការីតនៃ Kw" },
    ],
  },

  // Biology
  {
    id: "220",
    title: "ប្រវែងម៉ូលេគុល ADN",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="l = \frac{M}{2} \times 0.34" />,
    description:
      "ដោយពីនុយក្លេអូទីតមួយទៅមួយមានប្រវែង 0.34 nm។ l ជាប្រវែងម៉ូលេគុល ADN និង M ជាចំនួននុយក្លេអូទីតសរុប។",
  },
  {
    id: "221",
    title: "ចំនួនជំហាន ឬរង្វេល ADN (តាមប្រវែង)",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="\text{ចំនួនជំហាន} = \frac{l}{3.4}" />,
    description:
      "មួយជំហាន ឬមួយរង្វេល មានប្រវែង 3.4 nm ដូច្នេះចំនួនជំហានស្មើនឹង l ចែក 3.4។",
  },
  {
    id: "222",
    title: "ចំនួនជំហាន ឬរង្វេល ADN (តាមនុយក្លេអូទីត)",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="\text{ចំនួនជំហាន} = \frac{M}{20}" />,
    description:
      "មួយជំហាន ឬមួយរង្វេល ស្មើនឹង 20 នុយក្លេអូទីត។",
  },
  {
    id: "223",
    title: "ចំនួននុយក្លេអូទីតសរុប (គោលការណ៍បំពេញបាស)",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="M = A + T + C + G" />,
    description:
      "តាមគោលការណ៍បំពេញបាស A = T និង C = G ដូច្នេះ M ស្មើផលបូកនុយក្លេអូទីតទាំងអស់។",
  },
  {
    id: "224",
    title: "ចំនួននុយក្លេអូទីតសរុប (ទម្រង់បម្លែង)",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="M = 2A + 2C = 2T + 2G = 2A + 2G = 2T + 2C" />
    ),
    description:
      "បម្លែងរូបមន្ត M ដោយផ្អែកលើ A = T និង C = G។",
  },
  {
    id: "225",
    title: "រក M តាមភាគរយនុយក្លេអូទីត",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="M = \frac{A \times 100}{\%A} = \frac{T \times 100}{\%T} = \frac{C \times 100}{\%C} = \frac{G \times 100}{\%G}" />
    ),
    description:
      "ប្រើនៅពេលដឹងចំនួន និងភាគរយនុយក្លេអូទីតប្រភេទណាមួយ។",
  },
  {
    id: "226",
    title: "ចំនួនសម្ព័ន្ធអុីដ្រូសែនសរុប",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="L = 2A + 3C = 2A + 3G = 2T + 3G = 2T + 3C" />
    ),
    description:
      "A–T ភ្ជាប់ដោយសម្ព័ន្ធអុីដ្រូសែន 2 និង C–G ភ្ជាប់ដោយ 3។",
  },
  {
    id: "227",
    title: "ចំនួនសម្ព័ន្ធគីមីក្នុង ADN",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="\text{សម្ព័ន្ធគីមី} = M - 2" />,
    description:
      "នុយក្លេអូទីត 2 ភ្ជាប់គ្នាបង្កើតសម្ព័ន្ធគីមី 1 នៅក្នុងច្រវ៉ាក់ ADN។",
  },
  {
    id: "228",
    title: "ម៉ាសម៉ូលេគុល ADN",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="\text{ម៉ាស ADN} = M \times 300" />,
    description:
      "នុយក្លេអូទីតមួយមានម៉ាសម៉ូលេគុលមធ្យម 300 ខ្នាតកាបូន។",
  },
  {
    id: "229",
    title: "ADN ស្វ័យដំឡើងទ្វេ n ដង (ADN កើតថ្មី)",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="\text{ADN កើតថ្មី} = 2^{n} - 1" />,
    description:
      "ADN មេ 1 បង្កើត ADN កូន 2ⁿ ដូច្នេះ ADN កើតថ្មី = 2ⁿ − 1។",
  },
  {
    id: "230",
    title: "ចំនួននុយក្លេអូទីតសេរីសរុប",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="M' = M(2^{n} - 1)" />,
    description:
      "ចំនួននុយក្លេអូទីតសេរីដែលត្រូវប្រើសម្រាប់ស្វ័យដំឡើងទ្វេ n ដង។",
  },
  {
    id: "231",
    title: "នុយក្លេអូទីតសេរីប្រភេទនីមួយៗ",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="A' = T' = A(2^{n}-1), \quad C' = G' = C(2^{n}-1)" />
    ),
    description:
      "គណនាចំនួននុយក្លេអូទីតសេរី A, T, C និង G ដោយឡែក។",
  },
  {
    id: "232",
    title: "នុយក្លេអូទីតសរុបក្នុង ADN កូន",
    subject: "biology",
    category: "26",
    formula: <MathRenderer math="M_{\text{ADN កូន}} = M \times 2^{n}" />,
    description:
      "ADN ស្វ័យដំឡើងទ្វេ n ដង បង្កើត ADN កូន 2ⁿ ដែលមាននុយក្លេអូទីតសរុប M × 2ⁿ។",
  },
  {
    id: "233",
    title: "ភាគរយនុយក្លេអូទីតក្នុង ADN",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="\%A = \%T = 50\% - \%C = 50\% - \%G" />
    ),
    description:
      "ផ្អែកលើគោលការណ៍បំពេញបាស និងផលបូកភាគរយស្មើ 100%។",
  },
  {
    id: "234",
    title: "នុយក្លេអូទីតលើច្រវ៉ាក់ម្ខាងៗ",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="A_1=T_2,\; T_1=A_2,\; C_1=G_2,\; G_1=C_2" />
    ),
    description:
      "នុយក្លេអូទីតនៅលើច្រវ៉ាក់មួយ បំពេញបាសជាមួយច្រវ៉ាក់ម្ខាងទៀត។",
  },
  {
    id: "235",
    title: "ភាគរយនុយក្លេអូទីតលើច្រវ៉ាក់ម្ខាងៗ",
    subject: "biology",
    category: "26",
    formula: (
      <MathRenderer math="\%A_{ADN}=\frac{\%A_1+\%A_2}{2},\; \%C_{ADN}=\frac{\%C_1+\%C_2}{2}" />
    ),
    description:
      "ភាគរយនុយក្លេអូទីត ADN គឺមធ្យមភាគរវាងច្រវ៉ាក់ទី 1 និងទី 2។",
  },
  {
    id: "2701",
    title: "រកប្រវែងម៉ូលេគុល ADN",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="l = \frac{M}{2} \times 0.34" />,
    description:
      "ពីនុយក្លេអូទីតមួយទៅមួយទៀតមានប្រវែង 0.34 nm។ l ជាប្រវែងសែន និង M ជាចំនួននុយក្លេអូទីតសរុប។",
  },
  {
    id: "2702",
    title: "ចំនួនជំហាន ឬរង្វេល ADN",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="\text{ជំហាន} = \frac{l}{3.4} = \frac{M}{20}" />
    ),
    description:
      "មួយជំហានមានប្រវែង 3.4 nm ឬស្មើ 20 នុយក្លេអូទីត។",
  },
  {
    id: "2703",
    title: "រកចំនួននុយក្លេអូទីតសរុប M",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="M = A + T + C + G = 2A + 2C = 2T + 2G" />
    ),
    description:
      "ផ្អែកលើគោលការណ៍បំពេញបាស A = T និង C = G។",
  },
  {
    id: "2704",
    title: "រក M តាមភាគរយនុយក្លេអូទីត",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="M = \frac{A \times 100}{\%A} = \frac{C \times 100}{\%C}" />
    ),
    description:
      "ប្រើនៅពេលដឹងចំនួន និងភាគរយនុយក្លេអូទីតប្រភេទណាមួយ។",
  },
  {
    id: "2705",
    title: "ចំនួនសម្ព័ន្ធអុីដ្រូសែន",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="L = 2A + 3C = 2T + 3G" />
    ),
    description:
      "A–T មានសម្ព័ន្ធអុីដ្រូសែន 2 និង C–G មាន 3។",
  },
  {
    id: "2706",
    title: "ចំនួនសម្ព័ន្ធគីមីក្នុង ADN",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="\text{សម្ព័ន្ធគីមី} = M - 2" />,
    description:
      "នុយក្លេអូទីត 2 បង្កើតសម្ព័ន្ធគីមី 1 ក្នុងច្រវ៉ាក់ ADN។",
  },
  {
    id: "2707",
    title: "ម៉ាសម៉ូលេគុល ADN",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="\text{ម៉ាស ADN} = M \times 300" />,
    description:
      "នុយក្លេអូទីតមួយមានម៉ាសម៉ូលេគុលមធ្យម 300។",
  },
  {
    id: "2708",
    title: "នុយក្លេអូទីតសេរីពេលស្វ័យដំឡើងទ្វេ n ដង",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="M' = M(2^{n} - 1)" />,
    description:
      "គណនាចំនួននុយក្លេអូទីតសេរីដែលត្រូវប្រើសម្រាប់ ADN ស្វ័យដំឡើងទ្វេ n ដង។",
  },
  {
    id: "2709",
    title: "នុយក្លេអូទីតសេរីប្រភេទនីមួយៗ",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="A' = T' = A(2^{n}-1),\; C' = G' = C(2^{n}-1)" />
    ),
    description:
      "គណនាចំនួន A, T, C និង G សេរី ដោយឡែក។",
  },
  {
    id: "2710",
    title: "ភាគរយនុយក្លេអូទីតក្នុង ADN",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="\%A=\%T=50\%-\%C,\; \%C=\%G=50\%-\%A" />
    ),
    description:
      "ផលបូកភាគរយនុយក្លេអូទីតស្មើ 100% និង A=T, C=G។",
  },
  {
    id: "2711",
    title: "នុយក្លេអូទីតលើច្រវ៉ាក់ម្ខាងៗ",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="A_1=T_2,\; T_1=A_2,\; C_1=G_2,\; G_1=C_2" />
    ),
    description:
      "នុយក្លេអូទីតលើច្រវ៉ាក់មួយ បំពេញបាសជាមួយច្រវ៉ាក់ម្ខាងទៀត។",
  },
  {
    id: "2712",
    title: "ភាគរយនុយក្លេអូទីតលើច្រវ៉ាក់ម្ខាងៗ",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="\%A=\frac{\%A_1+\%A_2}{2},\; \%C=\frac{\%C_1+\%C_2}{2}" />
    ),
    description:
      "ភាគរយ ADN គឺមធ្យមភាគរវាងច្រវ៉ាក់ទី 1 និងទី 2។",
  },
  {
    id: "2713",
    title: "ប្រវែង ARNₘ",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="l = m \times 0.34" />,
    description:
      "ពីរីបូនុយក្លេអូទីតមួយទៅមួយទៀតមានប្រវែង 0.34 nm។",
  },
  {
    id: "2714",
    title: "សម្ព័ន្ធគីមីក្នុង ARNₘ",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="\text{សម្ព័ន្ធគីមី} = m - 1" />,
    description:
      "រីបូនុយក្លេអូទីត 2 បង្កើតសម្ព័ន្ធគីមី 1 ក្នុង ARNₘ។",
  },
  {
    id: "2715",
    title: "ម៉ាសម៉ូលេគុល ARNₘ",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="\text{ម៉ាស ARNₘ} = m \times 300" />,
    description:
      "រីបូនុយក្លេអូទីតមួយមានម៉ាសម៉ូលេគុលមធ្យម 300។",
  },
  {
    id: "2716",
    title: "ចំនួនអាស៊ីតអាមីនេក្នុងប្រូតេអ៊ីន",
    subject: "biology",
    category: "27",
    formula: (
      <MathRenderer math="\text{AA} = \frac{m}{3} - 2 = \frac{M}{6} - 2" />
    ),
    description:
      "ដកកូដុងផ្តើម និងកូដុងស្តុបចេញ។",
  },
  {
    id: "2717",
    title: "ចំនួនកូដុង",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="\text{កូដុង} = \frac{m}{3}" />,
    description:
      "រីបូនុយក្លេអូទីត 3 ស្មើកូដុង 1។",
  },
  {
    id: "2718",
    title: "ចំនួនចំណងប៉ិបទីត",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="L' = \text{AA} - 1" />,
    description:
      "អាស៊ីតអាមីនេ 2 បង្កើតចំណងប៉ិបទីត 1។",
  },
  {
    id: "2719",
    title: "ម៉ាសម៉ូលេគុលប្រូតេអ៊ីន",
    subject: "biology",
    category: "27",
    formula: <MathRenderer math="\text{ម៉ាស} = \text{AA} \times 110" />,
    description:
      "អាស៊ីតអាមីនេមួយមានម៉ាសម៉ូលេគុលមធ្យម 110។",
  },

];

//   // Physics Section    //

