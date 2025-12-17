import type {ReactNode} from 'react';
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export interface Variable {
  symbol: ReactNode;
  name: string;
  unit?: ReactNode;
}

export interface Formular {
  id: string;
  title: string;
  formula: ReactNode;
  subject: "math" | "physics" | "chemistry" | "biology";
  category: string;
  variables?: Variable[];
}

export type Formula = Formular;

export const mockFormulas: Formular[] = [
  {
    id: "2",
    title: "សម្ពាធ និង ថាមពលសុីនេទិចមធ្យម",
    formula: <InlineMath math="P = \frac{2}{3}\left(\frac{N}{V}\right)K_{av}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="P" />, name: "សម្ពាធ", unit: <InlineMath math="Pa" /> },
      { symbol: <InlineMath math="N" />, name: "ចំនួនម៉ូលេគុល" },
      { symbol: <InlineMath math="V" />, name: "មាឌធុង", unit: <InlineMath math="m^3" /> },
      { symbol: <InlineMath math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <InlineMath math="J" /> },
    ],
  },

  {
    id: "3",
    title: "សម្ពាធ និង ល្បឿនមធ្យម",
    formula: <InlineMath math="P = \frac{2}{3}\left(\frac{N}{V}\right)\frac{1}{2}mv^2" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="P" />, name: "សម្ពាធ", unit: <InlineMath math="Pa" /> },
      { symbol: <InlineMath math="N" />, name: "ចំនួនម៉ូលេគុល" },
      { symbol: <InlineMath math="V" />, name: "មាឌធុង", unit: <InlineMath math="m^3" /> },
      { symbol: <InlineMath math="m" />, name: "ម៉ាសរបស់ម៉ូលេគុល", unit: <InlineMath math="kg" /> },
      { symbol: <InlineMath math="v" />, name: "ល្បឿនមធ្យម", unit: <InlineMath math="m/s" /> },
    ],
  },

  {
    id: "4",
    title: "សីតុណ្ហភាពដាច់ខាត",
    formula: <InlineMath math="T = t + 273.15" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាពដាច់ខាត", unit: <InlineMath math="K" /> },
      { symbol: <InlineMath math="t" />, name: "សីតុណ្ហភាពសែលស្យ៊ុស", unit: <InlineMath math="°C" /> },
    ],
  },

  {
    id: "5",
    title: "ម៉ូល និង ចំនួនម៉ូលេគុល",
    formula: <InlineMath math="n = \frac{N}{N_A}" />,
    subject: "chemistry",
    category: "10",
    variables: [
      { symbol: <InlineMath math="n" />, name: "ចំនួនម៉ូល", unit: <InlineMath math="mol" /> },
      { symbol: <InlineMath math="N" />, name: "ចំនួនម៉ូលេគុល" },
    ],
  },

  {
    id: "6",
    title: "ឧស្ម័នបរិសុទ្ធ",
    formula: <InlineMath math="PV = nRT" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="P" />, name: "សម្ពាធ", unit: <InlineMath math="Pa" /> },
      { symbol: <InlineMath math="V" />, name: "មាឌធុង", unit: <InlineMath math="m^3" /> },
      { symbol: <InlineMath math="n" />, name: "ចំនួនម៉ូល", unit: <InlineMath math="mol" /> },
      {
        symbol: <InlineMath math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <InlineMath math="J/(mol \cdot K)" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
    ],
  },

  {
    id: "7",
    title: "ថាមពលសុីនេទិចមធ្យម",
    formula: <InlineMath math="K_{av} = \frac{3}{2}k_B T" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <InlineMath math="k_B" />,
        name: "ថេរបុលស្មាន់",
        unit: <InlineMath math="J/K" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
      { symbol: <InlineMath math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <InlineMath math="J" /> },
    ],
  },

  {
    id: "8",
    title: "ថាមពលសុីនេទិចសរុប",
    formula: <InlineMath math="K = \frac{3}{2}nRT" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="K" />, name: "ថាមពលសុីនេទិចសរុប", unit: <InlineMath math="J" /> },
      { symbol: <InlineMath math="n" />, name: "ចំនួនម៉ូល", unit: <InlineMath math="mol" /> },
      {
        symbol: <InlineMath math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <InlineMath math="J/(mol \cdot K)" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
    ],
  },

  {
    id: "9",
    title: "ល្បឿនប្រសិទ្ធ",
    formula: <InlineMath math="V_{rms} = \sqrt{\frac{3RT}{M}}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="V_{rms}" />, name: "ល្បឿនប្រសិទ្ធ", unit: <InlineMath math="m/s" /> },
      { 
        symbol: <InlineMath math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <InlineMath math="J/(mol \cdot K)" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
      { symbol: <InlineMath math="M" />, name: "ម៉ាសម៉ូល", unit: <InlineMath math="kg/mol" /> },
    ],
  },
  {
    id: "10",
    title: "សម្ពាធ និង ល្បឿនមធ្យម",
    formula: (
      <InlineMath math="P = \frac{2}{3}\left(\frac{N}{V}\right)\frac{1}{2}m_{o}v^{2}" />
    ),
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="P" />, name: "សម្ពាធ", unit: <InlineMath math="Pa" /> },
      { symbol: <InlineMath math="N" />, name: "ចំនួនម៉ូលេគុលនៃឧស្ម័ន" },
      { symbol: <InlineMath math="V" />, name: "មាឌធុង", unit: <InlineMath math="m^3" /> },
      { symbol: <InlineMath math="m_{o}" />, name: "ម៉ាសរបស់ម៉ូលេគុល", unit: <InlineMath math="kg" /> },
      { symbol: <InlineMath math="v" />, name: "ល្បឿនមធ្យម", unit: <InlineMath math="m/s" /> },
    ],
  },

  {
    id: "11",
    title: "បម្លែងសីតុណ្ហភាពពី °C ទៅ Kelvin",
    formula: <InlineMath math="T = t + 273.15" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាពដាច់ខាត", unit: <InlineMath math="K" /> },
      { symbol: <InlineMath math="t" />, name: "សីតុណ្ហភាពសែលស្យុស", unit: <InlineMath math="°C" /> },
    ],
  },
  {
    id: "13",
    title: "ឧស្ម័នបរិសុទ្ធ",
    formula: <InlineMath math="PV = nRT" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="P" />, name: "សម្ពាធ", unit: <InlineMath math="Pa" /> },
      { symbol: <InlineMath math="V" />, name: "មាឌធុង", unit: <InlineMath math="m^3" /> },
      { symbol: <InlineMath math="n" />, name: "ចំនួនម៉ូល", unit: <InlineMath math="mol" /> },
      {
        symbol: <InlineMath math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <InlineMath math="J/(mol \cdot K)" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
    ],
  },

  {
    id: "14",
    title: "ថាមពលសុីនេទិចមធ្យម",
    formula: <InlineMath math="K_{av} = \frac{1}{2} m v^{2}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <InlineMath math="J" /> },
      { symbol: <InlineMath math="m" />, name: "ម៉ាសរបស់ម៉ូលេគុល", unit: <InlineMath math="kg" /> },
      { symbol: <InlineMath math="v" />, name: "ល្បឿនមធ្យម", unit: <InlineMath math="m/s" /> },
    ],
  },

  {
    id: "15",
    title: "ថាមពលសុីនេទិចមធ្យម (ទំនាក់ទំនងជាមួយសីតុណ្ហភាព)",
    formula: <InlineMath math="K_{av} = \frac{3}{2} k_B T" />,
    subject: "physics",
    category: "10",
    variables: [
      {
        symbol: <InlineMath math="k_B" />,
        name: "ថេរបុលស្មាន់",
        unit: <InlineMath math="J/K" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
      { symbol: <InlineMath math="K_{av}" />, name: "ថាមពលសុីនេទិចមធ្យម", unit: <InlineMath math="J" /> },
    ],
  },

  {
    id: "16",
    title: "ថាមពលសុីនេទិចសរុបនៃឧស្ម័ន",
    formula: <InlineMath math="K = \frac{3}{2} n R T" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="K" />, name: "ថាមពលសុីនេទិចសរុប", unit: <InlineMath math="J" /> },
      { symbol: <InlineMath math="n" />, name: "ចំនួនម៉ូល", unit: <InlineMath math="mol" /> },
      {
        symbol: <InlineMath math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <InlineMath math="J/(mol \cdot K)" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
    ],
  },
  {
    id: "17",
    title: "ល្បឿនប្រសិទ្ធ",
    formula: <InlineMath math="V_{rms} = \sqrt{\frac{3 R T}{M}}" />,
    subject: "physics",
    category: "10",
    variables: [
      { symbol: <InlineMath math="V_{rms}" />, name: "ល្បឿនប្រសិទ្ធ", unit: <InlineMath math="m/s" /> },
      {
        symbol: <InlineMath math="R" />,
        name: "ថេរសកលនៃឧស្ម័ន",
        unit: <InlineMath math="J/(mol \cdot K)" />,
      },
      { symbol: <InlineMath math="T" />, name: "សីតុណ្ហភាព", unit: <InlineMath math="K" /> },
      { symbol: <InlineMath math="M" />, name: "ម៉ាសម៉ូល", unit: <InlineMath math="kg/mol" /> },
    ],
  },

  // Testing formular math
  {
  id: "18",
  title: "ល្បឿនមធ្យមកំណ",
  formula: (
    <InlineMath math="v_m = \frac{[I_2]_2 - [I_2]_1}{t_2 - t_1} = \frac{\Delta [I_2]}{\Delta t}" />
  ),
  subject: "chemistry",
  category: "10",
  variables: [
    { symbol: <InlineMath math="v_m" />, name: "ល្បឿនមធ្យមកំណ" },
    { symbol: <InlineMath math="[I_2]" />, name: "កំហាប់អ៊ីយ៉ូត" },
    { symbol: <InlineMath math="t" />, name: "ពេលវេលា", unit: <InlineMath math="s" /> },
  ],
},

{
  id: "19",
  title: "ល្បឿនខណៈ",
  formula: (
    <InlineMath math="v_t =  \frac{d[I_2]}{dt}" />
  ),
  subject: "chemistry",
  category: "10",
  variables: [
    { symbol: <InlineMath math="v_t" />, name: "ល្បឿនខណៈ" },
    { symbol: <InlineMath math="[I_2]" />, name: "កំហាប់អ៊ីយ៉ូត" },
    { symbol: <InlineMath math="t" />, name: "ពេលវេលា", unit: <InlineMath math="s" /> },
  ],
},

{
  id: "20",
  title: "ល្បឿនមធ្យមបំបាត់អង្គធាតុប្រតិករ",
  formula: (
    <InlineMath math="v_m = -\frac{[H_2O_2]_2 - [H_2O_2]_1}{t_2 - t_1}" />
  ),
  subject: "chemistry",
  category: "10",
  variables: [
    { symbol: <InlineMath math="v_m" />, name: "ល្បឿនមធ្យមបំបាត់" },
    { symbol: <InlineMath math="[H_2O_2]" />, name: "កំហាប់អ៊ីដ្រូសែនប៉ឺរ៉ុកស៊ីត" },
    { symbol: <InlineMath math="t" />, name: "ពេលវេលា", unit: <InlineMath math="s" /> },
  ],
},

{
  id: "21",
  title: "ល្បឿនខណៈបំបាត់អង្គធាតុប្រតិករ",
  formula: (
    <InlineMath math="v_t =  -\frac{d[H_2O_2]}{dt}" />
  ),
  subject: "chemistry",
  category: "10",
  variables: [
    { symbol: <InlineMath math="v_t" />, name: "ល្បឿនខណៈបំបាត់" },
    { symbol: <InlineMath math="[H_2O_2]" />, name: "កំហាប់អ៊ីដ្រូសែនប៉ឺរ៉ុកស៊ីត" },
    { symbol: <InlineMath math="t" />, name: "ពេលវេលា", unit: <InlineMath math="s" /> },
  ],
},
{
  id: "22",
  title: "ដេរីវេនៃអនុគមន៍ថេរ",
  formula: <InlineMath math="y = k \Rightarrow y' = 0" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="k" />, name: "ចំនួនថេរ" },
  ],
},
{
  id: "23",
  title: "ដេរីវេនៃអនុគមន៍អានុភាព",
  formula: <InlineMath math="y = x^n \Rightarrow y' = nx^{n-1}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ" },
    { symbol: <InlineMath math="n" />, name: "លេខអានុភាព" },
  ],
},
{
  id: "24",
  title: "ដេរីវេនៃអនុគមន៍ 1/x",
  formula: <InlineMath math="y = \frac{1}{x} \Rightarrow y' = -\frac{1}{x^2}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ (x ≠ 0)" },
  ],
},
{
  id: "25",
  title: "ដេរីវេនៃអនុគមន៍ √x",
  formula: <InlineMath math="y = \sqrt{x} \Rightarrow y' = \frac{1}{2\sqrt{x}}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ (x > 0)" },
  ],
},
{
  id: "26",
  title: "ដេរីវេនៃអនុគមន៍ e^x",
  formula: <InlineMath math="y = e^x \Rightarrow y' = e^x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ" },
  ],
},
{
  id: "27",
  title: "ដេរីវេនៃអនុគមន៍ a^x",
  formula: <InlineMath math="y = a^x \Rightarrow y' = a^x \ln a" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="a" />, name: "ចំនួនថេរ (a > 0, a ≠ 1)" },
    { symbol: <InlineMath math="x" />, name: "អថេរ" },
  ],
},
{
  id: "28",
  title: "ដេរីវេនៃអនុគមន៍ ln x",
  formula: <InlineMath math="y = \ln x \Rightarrow y' = \frac{1}{x}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ (x > 0)" },
  ],
},
{
  id: "29",
  title: "ដេរីវេនៃអនុគមន៍ sin x",
  formula: <InlineMath math="y = \sin x \Rightarrow y' = \cos x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "30",
  title: "ដេរីវេនៃអនុគមន៍ cos x",
  formula: <InlineMath math="y = \cos x \Rightarrow y' = -\sin x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "31",
  title: "ដេរីវេនៃអនុគមន៍ tan x",
  formula: <InlineMath math="y = \tan x \Rightarrow y' = 1 + \tan^2 x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "32",
  title: "ដេរីវេនៃអនុគមន៍ cot x",
  formula: <InlineMath math="y = \cot x \Rightarrow y' = -(1 + \cot^2 x)" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "33",
  title: "ដេរីវេ y = u^n",
  formula: <InlineMath math="y = u^n \Rightarrow y' = n u' u^{n-1}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
    { symbol: <InlineMath math="n" />, name: "លេខអានុភាព" },
  ],
},
{
  id: "34",
  title: "ដេរីវេ y = √u",
  formula: <InlineMath math="y = \sqrt{u} \Rightarrow y' = \frac{u'}{2\sqrt{u}}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
  ],
},
{
  id: "35",
  title: "ដេរីវេ y = uv",
  formula: <InlineMath math="y = uv \Rightarrow y' = u'v + uv'" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍ទី១" },
    { symbol: <InlineMath math="v" />, name: "អនុគមន៍ទី២" },
  ],
},
{
  id: "36",
  title: "ដេរីវេ y = u / v",
  formula: <InlineMath math="y = \frac{u}{v} \Rightarrow y' = \frac{u'v - uv'}{v^2}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍ទី១" },
    { symbol: <InlineMath math="v" />, name: "អនុគមន៍ទី២ (v ≠ 0)" },
  ],
},
{
  id: "37",
  title: "ដេរីវេ y = ln u",
  formula: <InlineMath math="y = \ln u \Rightarrow y' = \frac{u'}{u}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
  ],
},
{
  id: "38",
  title: "ដេរីវេ y = sin u",
  formula: <InlineMath math="y = \sin u \Rightarrow y' = u' \cos u" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "39",
  title: "ដេរីវេ y = cos u",
  formula: <InlineMath math="y = \cos u \Rightarrow y' = -u' \sin u" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "40",
  title: "ដេរីវេ y = e^u",
  formula: <InlineMath math="y = e^u \Rightarrow y' = u' e^u" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "41",
  title: "ដេរីវេ y = tan u",
  formula: <InlineMath math="y = \tan u \Rightarrow y' = u'(1 + \tan^2 u)" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "42",
  title: "ដេរីវេ y = u^v",
  formula: <InlineMath math="y = u^v \Rightarrow y' = u^v \left(v' \ln u + \frac{v u'}{u}\right)" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍មូលដ្ឋាន (u > 0)" },
    { symbol: <InlineMath math="v" />, name: "អនុគមន៍អានុភាព" },
  ],
},
{
  id: "43",
  title: "ដេរីវេ y = sin x",
  formula: <InlineMath math="y = \sin x \Rightarrow y' = \cos x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "44",
  title: "ដេរីវេ y = cos x",
  formula: <InlineMath math="y = \cos x \Rightarrow y' = -\sin x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "45",
  title: "ដេរីវេ y = tan x",
  formula: <InlineMath math="y = \tan x \Rightarrow y' = 1 + \tan^2 x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "46",
  title: "ដេរីវេ y = cot x",
  formula: <InlineMath math="y = \cot x \Rightarrow y' = -(1 + \cot^2 x)" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "មុំ (រ៉ាដ្យង់)" },
  ],
},
{
  id: "47",
  title: "ដេរីវេ y = sin u",
  formula: <InlineMath math="y = \sin u \Rightarrow y' = u' \cos u" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "48",
  title: "ដេរីវេ y = cos u",
  formula: <InlineMath math="y = \cos u \Rightarrow y' = -u' \sin u" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "49",
  title: "ដេរីវេ y = tan u",
  formula: <InlineMath math="y = \tan u \Rightarrow y' = u'(1 + \tan^2 u)" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "50",
  title: "ដេរីវេ y = cot u",
  formula: <InlineMath math="y = \cot u \Rightarrow y' = -u'(1 + \cot^2 u)" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "51",
  title: "ដេរីវេ y = e^x",
  formula: <InlineMath math="y = e^x \Rightarrow y' = e^x" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ" },
  ],
},
{
  id: "52",
  title: "ដេរីវេ y = a^x",
  formula: <InlineMath math="y = a^x \Rightarrow y' = a^x \ln a" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="a" />, name: "ចំនួនថេរ (a > 0, a ≠ 1)" },
    { symbol: <InlineMath math="x" />, name: "អថេរ" },
  ],
},

{
  id: "53",
  title: "ដេរីវេ y = e^u",
  formula: <InlineMath math="y = e^u \Rightarrow y' = u' e^u" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "54",
  title: "ដេរីវេ y = a^u",
  formula: <InlineMath math="y = a^u \Rightarrow y' = u' a^u \ln a" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="a" />, name: "ចំនួនថេរ (a > 0, a ≠ 1)" },
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x" },
  ],
},
{
  id: "55",
  title: "ដេរីវេ y = ln x",
  formula: <InlineMath math="y = \ln x \Rightarrow y' = \frac{1}{x}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ (x > 0)" },
  ],
},
{
  id: "56",
  title: "ដេរីវេ y = ln |x|",
  formula: <InlineMath math="y = \ln |x| \Rightarrow y' = \frac{1}{x}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="x" />, name: "អថេរ (x ≠ 0)" },
  ],
},
{
  id: "57",
  title: "ដេរីវេ y = log_a x",
  formula: <InlineMath math="y = \log_a x \Rightarrow y' = \frac{1}{x \ln a}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="a" />, name: "មូលដ្ឋាន (a > 0, a ≠ 1)" },
    { symbol: <InlineMath math="x" />, name: "អថេរ (x > 0)" },
  ],
},
{
  id: "58",
  title: "ដេរីវេ y = ln u",
  formula: <InlineMath math="y = \ln u \Rightarrow y' = \frac{u'}{u}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
  ],
},
{
  id: "59",
  title: "ដេរីវេ y = ln |u|",
  formula: <InlineMath math="y = \ln |u| \Rightarrow y' = \frac{u'}{u}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x (u ≠ 0)" },
  ],
},
{
  id: "60",
  title: "ដេរីវេ y = log_a u",
  formula: <InlineMath math="y = \log_a u \Rightarrow y' = \frac{u'}{u \ln a}" />,
  subject: "math",
  category: "derivative",
  variables: [
    { symbol: <InlineMath math="a" />, name: "មូលដ្ឋាន (a > 0, a ≠ 1)" },
    { symbol: <InlineMath math="u" />, name: "អនុគមន៍នៃ x (u > 0)" },
  ],
},




// {
//   id: "22",
//   title: "អាស៊ីតភាព (pH)",
//   formula: (
//     <InlineMath math="pH = -\log [H_3O^+] \;\Leftrightarrow\; [H_3O^+] = 10^{-pH}" />
//   ),
//   subject: "chemistry",
//   category: "10",
//   variables: [
//     { symbol: <InlineMath math="pH" />, name: "អាស៊ីតភាព" },
//     { symbol: <InlineMath math="[H_3O^+]" />, name: "កំហាប់អ៊ីយ៉ុងអ៊ីដ្រូន្យូម", unit: <InlineMath math="mol/L" /> },
//   ],
// },

// {
//   id: "23",
//   title: "អាល់កាលីភាព (pOH)",
//   formula: (
//     <InlineMath math="pOH = -\log [OH^-] \;\Leftrightarrow\; [OH^-] = 10^{-pOH}" />
//   ),
//   subject: "chemistry",
//   category: "10",
//   variables: [
//     { symbol: <InlineMath math="pOH" />, name: "អាល់កាលីភាព" },
//     { symbol: <InlineMath math="[OH^-]" />, name: "កំហាប់អ៊ីយ៉ុងអ៊ីដ្រូកស៊ីត", unit: <InlineMath math="mol/L" /> },
//   ],
// },

// {
//   id: "24",
//   title: "ផលគុណអ៊ីយ៉ុងទឹក",
//   formula: (
//     <InlineMath math="K_w = 10^{-14} \;\Leftrightarrow\; pK_w = 14" />
//   ),
//   subject: "chemistry",
//   category: "10",
//   variables: [
//     { symbol: <InlineMath math="K_w" />, name: "ផលគុណអ៊ីយ៉ុងទឹក" },
//     { symbol: <InlineMath math="pK_w" />, name: "លោការីតនៃ Kw" },
//   ],
// },



  
];
