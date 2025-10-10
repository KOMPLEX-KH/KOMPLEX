-- Curriculum Data SQL
-- Generated from curriculum structure

-- Insert Grades
INSERT INTO grades (grade, grade_khmer) VALUES
('grade-12', 'ថ្នាក់ទី១២'),
('grade-11', 'ថ្នាក់ទី១១'),
('grade-10', 'ថ្នាក់ទី១០'),
('grade-9', 'ថ្នាក់ទី៩');

-- Insert Subjects
INSERT INTO subjects (subject, title, english_title, icon, grade_id) VALUES
-- Grade 12 Subjects (grade_id = 1)
('math', 'គណិតវិទ្យា', 'Mathematics', 'Calculator', 1),
('physics', 'រូបវិទ្យា', 'Physics', 'Atom', 1),
('chemistry', 'គីមីវិទ្យា', 'Chemistry', 'FlaskConical', 1),
('biology', 'ជីវវិទ្យា', 'Biology', 'Leaf', 1),

-- Grade 11 Subjects (grade_id = 2)
('math', 'គណិតវិទ្យា', 'Mathematics', 'Calculator', 2),
('physics', 'រូបវិទ្យា', 'Physics', 'Atom', 2),
('chemistry', 'គីមីវិទ្យា', 'Chemistry', 'FlaskConical', 2),
('biology', 'ជីវវិទ្យា', 'Biology', 'Leaf', 2),

-- Grade 10 Subjects (grade_id = 3)
('math', 'គណិតវិទ្យា', 'Mathematics', 'Calculator', 3),
('physics', 'រូបវិទ្យា', 'Physics', 'Atom', 3),
('chemistry', 'គីមីវិទ្យា', 'Chemistry', 'FlaskConical', 3),
('biology', 'ជីវវិទ្យា', 'Biology', 'Leaf', 3),

-- Grade 9 Subjects (grade_id = 4)
('math', 'គណិតវិទ្យា', 'Mathematics', 'Calculator', 4),
('physics', 'រូបវិទ្យា', 'Physics', 'Atom', 4),
('chemistry', 'គីមីវិទ្យា', 'Chemistry', 'FlaskConical', 4),
('biology', 'ជីវវិទ្យា', 'Biology', 'Leaf', 4);

-- Insert Lessons
INSERT INTO lessons (lesson, title, english_title, icon, subject_id) VALUES
-- Grade 12 Math Lessons (subject_id = 1)
('Complex', 'កុំផ្លិច', 'Complex', 'Target', 1),
('limits', 'លីមីត', 'Limits', 'Target', 1),
('derivatives', 'ដេរីវេ', 'Derivatives', 'FunctionSquare', 1),
('integration', 'អាំងតេក្រាល', 'Integration', 'Variable', 1),
('diffential-equations', 'សមីការឌីផេរ៉ង់សែ្យល', 'Differential-Equations', 'Box', 1),
('Probability', 'ប្រូបាប', 'Probability', 'Box', 1),
('vectors', 'វ៉ិចទ័រ', 'Vectors', 'Box', 1),
('Conics', 'កោនិក', 'Conics', 'Box', 1),
('Functions', 'អនុគមន៍', 'Functions', 'Box', 1),

-- Grade 12 Physics Lessons (subject_id = 2)
('thermodynamics', 'ទែម៉ូឌីណាមិច', 'Thermodynamics', 'Atom', 2),
('waves', 'រលក', 'Waves', 'Atom', 2),
('electricityMagnetism', 'អគ្គិសនី និងម៉ាញេទិច', 'ElectricityMagnetism', 'Atom', 2),

-- Grade 12 Chemistry Lessons (subject_id = 3)
('ChemicalKinetics', 'សុីនេទិចគីមី', 'ChemicalKinetics', 'FlaskConical', 3),
('aqueous_solution_intermolecular', 'សមាសធាតុសូលូស្យុងក្នុងទឹកនិង កម្លាំងអន្តរម៉ូលេគុល', 'AqueousSolutionsandIntermolecularForces', 'FlaskConical', 3),
('acid_base', 'អាសុីត បាស', 'Acid-Base', 'FlaskConical', 3),
('chemical_equilibrium', 'លំនឹងគីមី', 'ChemicalEquilibrium', 'FlaskConical', 3),
('organic_chemistry', 'គីមីសរីរាង្គ', 'OrganicChemistry', 'FlaskConical', 3),

-- Grade 12 Biology Lessons (subject_id = 4)
('gymnosperms', 'ស៊ីមណូស្ពែម', 'Gymnosperms', 'Leaf', 4),
('angiosperms', 'អង់ស្យូស្ពែម', 'Angiosperms', 'Flower2', 4),
('nervous-system', 'តម្រូវប្រសាទ', 'Medicine and Nervous System', 'Brain', 4),
('sensory-organs', 'សរីរាង្គវិញ្ញាណ', 'Sensory Organs', 'Eye', 4),
('endocrine-system', 'ប្រពន្ធ័អង់ដូគ្រីន', 'Endocrine System', 'Activity', 4),
('amino-acid', 'អាសុីតអាមីណេ', 'Amino Acid', 'Atom', 4),
('protein', 'ប្រូតេអុីន', 'Protein', 'Beaker', 4),
('enzymes', 'អង់សុីម', 'Enzymes', 'Microscope', 4),
('dna', 'ADN ជាទម្រព័ត៏មានសេនេទិច', 'DNA', 'Dna', 4),
('gene', 'ការសម្ដែងចេញនៃសែន', 'Gene Expression', 'Activity', 4),
('bio-technology', 'បច្ចេកវិទ្យាជីវ', 'Bio Technology', 'Lightbulb', 4),
('darwin-theory', 'ទ្រិស្ដីលោកដាវីន', 'Darwin Theory', 'Search', 4),
('fossil', 'កំណត់ត្រាផូសុីល', 'Fossil', 'FlaskConical', 4),

-- Grade 11 Math Lessons (subject_id = 5)
('sequences', 'ស្មូត', 'Sequences', 'TrendingUp', 5),
('exponential-logarithmic-functions', 'អនុគមន៍អិចស្ប៉ូណង់ស្យែលនិងអនុគមន៍លោការីត', 'Exponential Functions and Logarithmic Functions', 'FunctionSquare', 5),
('trigonometric-functions', 'អនុគមន៍ត្រីកោណមាត្រ', 'Trigonometric Functions', 'Square', 5),
('matrices-determinants', 'ម៉ាទ្រីសនិងដេទែរមីណង់', 'Matrices and Determinants', 'BarChart3', 5),
('limits-derivatives', 'លីមីតនិងដេរីវេ', 'Limits and Derivatives', 'Infinity', 5),
('probability', 'ប្រូបាប', 'Probability', 'Percent', 5),
('statistics', 'ស្ថិតិ', 'Statistics', 'PieChart', 5),

-- Grade 11 Physics Lessons (subject_id = 6)
('mechanics', 'មេកានិច', 'Mechanics', 'Zap', 6),
('thermodynamics', 'ទែម៉ូឌីណាមិច', 'Thermodynamics', 'Thermometer', 6),
('waves', 'រលក', 'Waves', 'Waves', 6),
('electricity', 'អគ្គិសនី', 'Electricity', 'Lightbulb', 6),

-- Grade 11 Chemistry Lessons (subject_id = 7)
('chemical-calculations', 'ការគណនាក្នុងគីមី', 'Chemical-Calculations', 'Calculator', 7),
('metals', 'លោហៈ', 'Metals', 'Beaker', 7),
('oxidation-reduction-electrochemistry', 'អុកស៊ីតកម្ម រេដុកម្ម និងអេឡិចត្រូគីមី', 'Oxidation-Reduction-and-Electrochemistry', 'Atom', 7),
('chemical-reactions-energy', 'ប្រតិកម្មគីមីនិងថាមពល', 'Chemical-Reactions-and-Energy', 'ThermometerSun', 7),
('inorganic-compounds', 'សមាសធាតុអសរីរាង្គ', 'Inorganic-Compounds', 'FlaskRound', 7),
('stereochemistry', 'ស្តេរ៉េអូគីមី', 'Stereochemistry', 'Shapes', 7),
('organic-chemistry', 'គីមីសរីរាង្គ', 'Organic-Chemistry', 'Flame', 7),

-- Grade 11 Biology Lessons (subject_id = 8)
('cells', 'កោសិកា', 'Cells', 'Microscope', 8),
('reproduction-growth', 'ការបន្តពូជនិងការលូតលាស់', 'Reproduction-and-Growth', 'Baby', 8),
('heredity', 'តំណពូជ', 'Heredity', 'Dna', 8),
('human-nutrition-digestion', 'អាហារនិងការរំលាយអាហាររបស់មនុស្ស', 'Human-Nutrition-and-Digestion', 'Utensils', 8),
('gas-exchange-excretion-animals', 'បណ្តូរឧស្ម័ននិងការបញ្ចេញចោលរបស់សត្វ', 'Gas-Exchange-and-Excretion-in-Animals', 'Wind', 8),
('interaction-organisms-environment', 'ប្រតិកម្មរវាងសត្វនិងមជ្ឈដ្ឋា', 'Interaction-between-Organisms-and-Environment', 'Globe', 8),
('structure-vascular-plants', 'រូបផ្គុំរុក្ខជាតិមានសរសៃនាំ', 'Structure-of-Vascular-Plants', 'Sprout', 8),
('biology-health', 'ជីវវិទ្យានិងសុខភាព', 'Biology-and-Health', 'HeartPulse', 8),

-- Grade 10 Math Lessons (subject_id = 9)
('logic-sets-numbers', 'តក្កវិទ្យា សំណុំនិងចំនួន', 'Logic-Sets-and-Numbers', 'Brain', 9),
('polynomials', 'ពហុធា', 'Polynomials', 'Square', 9),
('equations-inequalities', 'សមីការនិងវិសមីការ', 'Equations-and-Inequalities', 'FunctionSquare', 9),
('plane-geometry', 'ធរណីមាត្រក្នុងប្លង់', 'Plane-Geometry', 'Circle', 9),
('functions-function-graphs', 'អនុគមន៍និងក្រាបអនុគមន៍', 'Functions-and-Function-Graphs', 'Target', 9),
('trigonometric-ratios', 'ផលធៀបត្រីកោណមាត្រ', 'Trigonometric-Ratios', 'Triangle', 9),
('statistics', 'ស្ថិតិ', 'Statistics', 'BarChart3', 9),
('permutations-combinations', 'ចម្លាស់និងបន្សំ', 'Permutations-and-Combinations', 'Hash', 9),
('vectors-plane', 'វ៉ិចទ័រក្នុងប្លង់', 'Vectors-in-a-Plane', 'ArrowRight', 9),
('geometric-transformations-plane', 'បំលែងរូបក្នុងប្លង់', 'Geometric-Transformations-in-a-Plane', 'RotateCcw', 9),
('geometry-space', 'ធរណីមាត្រក្នុងលំហ', 'Geometry-in-Space', 'Box', 9),

-- Grade 10 Physics Lessons (subject_id = 10)
('mechanics', 'មេកានិច', 'Mechanics', 'Zap', 10),
('thermodynamics', 'ទែម៉ូឌីណាមិច', 'Thermodynamics', 'Flame', 10),
('electricity-magnetism', 'អគ្គិសនីនិងម៉ាញេទិច', 'Electricity-and-Magnetism', 'Battery', 10),
('optics', 'អុបទិច', 'Optics', 'Eye', 10),
('energy-life', 'ថាមពល និងជីវិត', 'Energy-and-Life', 'Atom', 10),

-- Grade 10 Chemistry Lessons (subject_id = 11)
('atom', 'តាតូម', 'Atom', 'Atom', 11),
('periodic-table-chemical-elements', 'តារាងខួបនៃធាតុគីមី', 'Periodic-Table-of-Chemical-Elements', 'Table', 11),
('chemical-bonds-solid-structures', 'សម្ព័ន្ធគីមីនិងទម្រង់អង្គធាតុរឹង', 'Chemical-Bonds-and-Solid-Structures', 'Link', 11),
('organic-chemistry', 'គីមីសរីរាង្គ', 'Organic-Chemistry', 'Leaf', 11),

-- Grade 10 Biology Lessons (subject_id = 12)
('diversity-living-organisms', 'នានាភាពនៃភាវៈរស់', 'Diversity-of-Living-Organisms', 'Leaf', 12),
('uniformity-living-organisms', 'ឯកសណ្ឋានភាពនៃភាវៈរស់', 'Uniformity-of-Living-Organisms', 'Dna', 12),
('metabolism', 'មេតាបូលីស', 'Metabolism', 'FlaskConical', 12),
('human-biology', 'ជីវវិទ្យាមនុស្ស', 'Human-Biology', 'User', 12),
('biology-agriculture', 'ជីវវិទ្យាក្នុងវិស័យកសិកម្ម', 'Biology-in-Agriculture', 'Sprout', 12),

-- Grade 9 Math Lessons (subject_id = 13)
('irrational-numbers', 'ចំនួនអសនិទាន', 'Irrational-Numbers', 'Hash', 13),
('proportion', 'សមាមាត្រ', 'Proportion', 'Percent', 13),
('algebraic-expressions', 'កន្សោមពីជគណិត', 'Algebraic-Expressions', 'X', 13),
('first-degree-equation-one-unknown', 'សមីការដឺក្រេទី 1 មានមួយអញ្ញាត', 'First-Degree-Equation-With-One-Unknown', 'Minus', 13),
('first-degree-inequality-one-unknown', 'វិសមីការដឺក្រេទី 1 មានមួយអញ្ញាត', 'First-Degree-Inequality-With-One-Unknown', 'Minus', 13),
('frequency-distribution', 'បំណែងចែកប្រេកង់', 'Frequency-Distribution', 'PieChart', 13),
('statistical-mean', 'មធ្យមស្ថិតិ', 'Statistical-Mean', 'TrendingUp', 13),
('probability', 'ប្រូបាប', 'Probability', 'Dice1', 13),
('distance-between-two-points', 'ចម្ងាយរវាងពីរចំណុច', 'Distance-Between-Two-Points', 'MapPin', 13),
('equation-of-line', 'សមីការនៃបន្ទាត់', 'Equation-of-a-Line', 'LineChart', 13),
('system-first-degree-equations-two-unknowns', 'ប្រព័ន្ធសមីការដឺក្រេទី 1 មានពីរអញ្ញាត', 'System-of-First-Degree-Equations-With-Two-Unknowns', 'X', 13),
('pythagorean-theorem', 'ទ្រឹស្តីបទពីតាគ័រ', 'Pythagorean-Theorem', 'Triangle', 13),
('circle-and-line', 'រង្វង់និងបន្ទាត់', 'Circle-and-Line', 'Circle', 13),
('properties-angles-circle', 'លក្ខណៈមុំនៃរង្វង់', 'Properties-of-Angles-in-a-Circle', 'Circle', 13),
('thales-theorem', 'ទ្រឹស្តីបទតាលែស', 'Thales-Theorem', 'Triangle', 13),
('similar-triangles', 'ត្រីកោណដូចគ្នា', 'Similar-Triangles', 'Triangle', 13),
('polygon', 'ពហុកោណ', 'Polygon', 'Square', 13),
('solids', 'សូលីត', 'Solids', 'Box', 13),

-- Grade 9 Physics Lessons (subject_id = 14)
('force-rotation-physics', 'ផលរង្វិលនៃកម្លាំង', 'Force-Rotation-Physics', 'Zap', 14),
('simple-machines', 'ម៉ាស៊ីនងាយ', 'Simple-Machines', 'Cog', 14),
('pressure', 'សម្ពាធ', 'Pressure', 'Battery', 14),
('electricity-magnetism', 'អគ្គិសនីនិងម៉ាញេទិច', 'Electricity-and-Magnetism', 'Magnet', 14),
('optics', 'អុបទិច', 'Optics', 'Eye', 14),

-- Grade 9 Chemistry Lessons (subject_id = 15)
('periodic-table-chemical-elements', 'តារាងខួបនៃធាតុគីមី', 'Periodic-Table-of-Chemical-Elements', 'Table', 15),
('carbon-oxygen-hydrogen', 'កាបួន អុកស៊ីសែន និងអ៊ីដ្រូសែន', 'Carbon-Oxygen-and-Hydrogen', 'Atom', 15),
('water-air', 'ទឹកនិងខ្យល់', 'Water-and-Air', 'Beaker', 15),

-- Grade 9 Biology Lessons (subject_id = 16)
('photosynthesis', 'រស្មីសំយោគ', 'Photosynthesis', 'Leaf', 16),
('nervous-system', 'ប្រព័ន្ធប្រសាទ', 'Nervous-System', 'Brain', 16),
('immune-system', 'ប្រព័ន្ធស៊ាំ', 'Immune-System', 'Shield', 16),
('ecosystem', 'បរិស្ថានវិទ្យា', 'Ecosystem', 'Globe', 16),
('health-hygiene', 'សុខភាពនិងអនាម័យ', 'Health-and-Hygiene', 'Bug', 16);

-- Insert Topics
-- Note: Lesson IDs are assigned sequentially starting from 1
-- Grade 12: Math (1-9), Physics (10-12), Chemistry (13-17), Biology (18-30)
-- Grade 11: Math (31-37), Physics (38-41), Chemistry (42-48), Biology (49-56)
-- Grade 10: Math (57-67), Physics (68-72), Chemistry (73-76), Biology (77-81)
-- Grade 9: Math (82-99), Physics (100-104), Chemistry (105-107), Biology (108-112)

INSERT INTO topics (title, english_title, lesson_id) VALUES
-- Grade 12 Math Topics
-- Complex Numbers (lesson_id = 1)
('និយមន័យកុំផ្លិច', 'Complex-Definition', 1),
('ប្រមាណវិធីបូក ដកចំនួនកុំផ្លិច', 'Complex-Operations', 1),
('ប្រមាណវិធីគុណ និងចែកចំនួនកុំផ្លិច', 'Complex-Multiplication-Division', 1),
('ម៉ូឌុលនៃកុំផ្លិច', 'Complex-Modulus', 1),
('សមីការដឺក្រេទី ២', 'Quadratic-Equation', 1),
('ទម្រង់ត្រីកោណមាត្រ', 'Trigonometric-Form', 1),
('លំហាត់អនុវត្ត', 'Complex-Practice', 1),

-- Limits (lesson_id = 2)
('និយមន័យលីមីត', 'definition', 2),
('ប្រមាណវិធីលេីលីមីត', 'methods', 2),
('លីមីតរាង​ ០/០', 'zero-over-zero', 2),
('លីមីតរាង ∞/∞', 'infinity-over-infinity', 2),
('លីមីតរាង +∞ - ∞', 'infinity-minus-infinity', 2),
('លីមីតអនុគមន៍ត្រីកោណមាត្រ', 'trigonometric', 2),
('លីមីតអនុគមន៍អុិចស្បូណង់ស្យែល', 'exponential', 2),
('លីមីតឡូការីតនេពែ', 'logarithmic', 2),
('ភាពជាប់នៃលីមីត', 'continuity', 2),
('អាសុីមកូត', 'asymptotes', 2),
('ទ្រឹស្តីបទឡូពីតាល់', 'LHopitalRule', 2),
('លំហាត់អនុវត្ត', 'practice', 2),

-- Derivatives (lesson_id = 3)
('និយមន័យដេរីវេ', 'derivative-definition', 3),
('រូបមន្តដេរីវេ', 'derivative-rules', 3),
('ដេរីវេពីជគណិត', 'derivative-geometric', 3),
('ដេរីវេអនុគមន៍ត្រីកោណមាត្រ', 'derivative-trigonometric', 3),
('ដេរីវេអនុគមន៍អុិចស្បូណង់ស្យែល', 'derivative-exponential', 3),
('ដេរីវេឡូការីតនេពែ', 'derivative-logarithmic', 3),
('ដេរីវេឡូលំដាប់ខ្ពស់', 'derivative-high-level', 3),
('លំហាត់អនុវត្ត', 'derivative-practice', 3),

-- Integration (lesson_id = 4)
('និយមន័យអាំងតេក្រាល', 'Integral-definition', 4),
('រូបមន្តអាំងតេក្រាល', 'Integral-formular', 4),
('អាំងតេក្រាលមិនកំណត់', 'indefinite', 4),
('អាំងតេក្រាលកំណត់', 'definite', 4),
('លំហាត់អនុវត្ត', 'Integral-practice', 4),

-- Differential Equations (lesson_id = 5)
('និយមន័យសមីការឌីផេរ៉ង់សែ្យល', 'Differential-equation-definition', 5),
('សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់១មានមេគុណថេរ', 'Linear-differential-equation-homogeneous-order-1', 5),
('សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់២មានមេគុណថេរ', 'Linear-differential-equation-homogeneous-order-2', 5),
('សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់ទូទៅមានមេគុណថេរ', 'General-linear-differential-equation-homogeneous', 5),
('សមីការឌីផែរ៉ង់ស្សែលទម្រង់ផ្សេងៗ', 'differential-equation', 5),
('លំហាត់អនុវត្ត', 'Differential-practice', 5),

-- Probability (lesson_id = 6)
('គោលការណ៍របាប់', 'CountingPrinciple', 6),
('និយមន័យប្រូបាប', 'Probability-Definition', 6),
('ប្រូបាបចម្លាស់', 'Probability-Permutation', 6),
('ប្រូបាបបន្សំ', 'Probability-Combination', 6),
('ប្រូបាបនៃព្រឹត្តការណ៍សមាស', 'ProbabCompound', 6),
('លំហាត់អនុវត្ត', 'Probability-Practice', 6),

-- Vectors (lesson_id = 7)
('និយមន័យវ៉ិចទ័រ', 'Vector-definition', 7),
('កូអរដោនេនៃវ៉ិចទ័រក្នុងលំហ', '2D-Vector-coordinates', 7),
('ផ្ទៃក្រឡា', 'Shape-area', 7),
('មាឌ', 'Volume', 7),
('សមីការ', 'Vector-Equations', 7),
('លំហាត់អនុវត្ត', 'Vector-practice', 7),

-- Conics (lesson_id = 8)
('និយមន័យកោនិក', 'Conic-definition', 8),
('ប៉ារ៉ាបូល', 'Parabola', 8),
('អេលីប', 'Ellipse', 8),
('អុីពែបូល', 'Hyperbola', 8),
('លំហាត់អនុវត្ត', 'Conic-Practice', 8),

-- Functions (lesson_id = 9)
('និយមន័យអនុគមន៍', 'Function-Definition', 9),
('អនុគមន៍សនិទាន', 'Polynomial-Function', 9),
('អនុគមន៍អិចស្បូណង់ស្យែល', 'Exponential-Function', 9),
('អនុគមន៍ឡូការីត', 'Logarithmic-Function', 9),
('សមីការ', 'Equation-Function', 9),
('ប្លង់សិក្សាអនុគមន៍', 'Function-Analysis-Plan', 9),
('លំហាត់អនុវត្ត', 'Function-Practice', 9),

-- Grade 12 Physics Topics
-- Thermodynamics (lesson_id = 10)
('ទ្រឹស្តីសុីនេទិច', 'KineticTheory', 10),
('ច្បាប់ទីមួយទែម៉ូឌីណាមិច', 'FirstLawofThermodynamics', 10),
('ម៉ាសុីន', 'Heat-Engines', 10),
('លំហាត់អនុវត្តន៍', 'thermodynamics-practice', 10),

-- Waves (lesson_id = 11)
('គោលការណ៍រលកតម្រួតនៃរលក និងរលកជញ្រ្ចុំ', 'wave-principle', 11),
('លំហាត់អនុវត្តន៍', 'wave-practice', 11),

-- Electricity and Magnetism (lesson_id = 12)
('ដែននិងកម្លាំងម៉ាញេទិច', 'magneticField', 12),
('អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច', 'Electromagnetic-Induction', 12),
('អូតូអាំងឌុចស្យុង', 'AutoElectromagneticInduction', 12),
('សៀគ្វីចរន្តឆ្លាស់', 'AlternatingCurrentCircuits', 12),
('លំហាត់អនុវត្តន៍', 'electromagneticmagnetismpractice', 12),

-- Grade 12 Chemistry Topics
-- Chemical Kinetics (lesson_id = 13)
('ល្បឿនប្រតិកម្មគីមី', 'RateChemicalReaction', 13),
('កត្តាជិះឥទ្ធិពលលេីល្បឿនប្រតិកម្ម', 'FactorsAffectingtheRateofReaction', 13),
('លំហាត់អនុវត្តន៍', 'ChemicaPractice', 13),

-- Aqueous Solutions and Intermolecular Forces (lesson_id = 14)
('សមាសធាតុសូលូស្យុងក្នុងទឹក', 'AqueousSolutions', 14),
('កម្លាំងអន្តរម៉ូលេគុល', 'intermolecular-forces', 14),
('តារាងសមាសធាតុ', 'ChemisTables', 14),
('លំហាត់អនុវត្តន៍', 'AqueousPractice', 14),

-- Acid-Base (lesson_id = 15)
('ទ្រឹស្តីអាសុីតបាស', 'acid-base-theory', 15),
('ប្រតិកម្មអាសុីតបាស', 'acid-base-reactions', 15),
('សូលុយស្យុងក្នុងទឹកនិង ph', 'aqueous-solutions-and-ph', 15),
('អត្រាកម្មអាសុីត-បាស', 'Acid_base_titration', 15),
('តារាងសមាសធាតុ', 'Acid-Base-Table', 15),
('លំហាត់អនុវត្តន៍', 'Acid_base_practice', 15),

-- Chemical Equilibrium (lesson_id = 16)
('ធម្មជាតិនៃលំនឹងគីមី', 'nature-of-chemical-equilibrium', 16),
('ការរំកិលលំនឹង', 'shift-in-equilibrium', 16),
('លំនឹងនៃអាសុីត បាស និងអំបិល', 'Equilibrium_Acid_Base_Salt', 16),
('លំហាត់អនុវត្តន៍', 'EquilibriumPractice', 16),

-- Organic Chemistry (lesson_id = 17)
('អេស្ទែ ខ្លាញ់និងប្រេង', 'Ester_fats_and_oils', 17),
('ស្រលាយអាលីផាទិចអាសូត', 'aliphatic_acid_derivatives', 17),
('សមាសធាតុប្រហេីរ', 'inorganic_compounds', 17),
('លំហាត់អនុវត្តន៍', 'OrganicPractice', 17),

-- Grade 12 Biology Topics
-- Gymnosperms (lesson_id = 18)
('ប្រភេទនៃស៊ីមណូស្ពែម', 'gymnosperms-types', 18),
('សរីរាង្គលូតលាស់', 'gymnosperms-vegetative-organs', 18),
('សរីរាង្គបន្តពូជ', 'gymnosperms-reproductive-organs', 18),
('វដ្តជីវិតស៊ីមណូស្ពែម', 'gymnosperms-life-cycle', 18),

-- Angiosperms (lesson_id = 19)
('សរីរាង្គលូតលាស់', 'angiosperms-vegetative-organs', 19),
('សរីរាង្គបន្តពូជ', 'angiosperms-reproductive-organs', 19),
('ដំណើរលំអង', 'angiosperms-pollination-process', 19),
('ការបន្តពូជរបស់អង់ស្យូស្ពៃម', 'angiosperms-reproduction', 19),
('វដ្តជីវិតរបស់រុក្ខជាតិមានផ្កា', 'angiosperms-flowering-plants-life-cycle', 19),
('ប្រៀបធៀបម៉ូណូកូទីលេដូននិងឌីកូទីលេដូន', 'angiosperms-monocot-dicot-comparison', 19),
('ផលប្រយោជន៍របស់រុក្ខជាតិមានគ្រាប់', 'angiosperms-seed-plants-benefits', 19),

-- Nervous System (lesson_id = 20)
('តម្រូវប្រសាទសត្វឥតឆ្អឹងកង', 'nervous-system-invertebrates', 20),
('តម្រូវប្រសាទសត្វឆ្អឹងកង', 'nervous-system-vertebrates', 20),
('នាទីប្រព័ន្ធប្រសាទ', 'nervous-system-function', 20),
('ណឺរ៉ូន (ឬកោសិកាប្រសាទ)', 'neuron-nerve-cell', 20),
('ខួរក្បាល', 'central-nervous-system', 20),
('ខួរធំ', 'brain', 20),
('ខួរតូច', 'smallbrain', 20),
('ខួរឆ្អឹងខ្នង', 'spinal-cord', 20),
('បរិមណ្ឌលប្រសាទ', 'peripheral-nervous-system', 20),
('ថ្នាំនិងប្រព័ន្ធប្រសាទ', 'nervous-system-and-drugs', 20),

-- Sensory Organs (lesson_id = 21)
('ចក្ខុវិញ្ញាណ', 'visual-sense-sight', 21),
('សោតវិញ្ញាណ', 'auditory-sense-hearing', 21),
('ឃានវិញ្ញាណ', 'olfactory-sense-smell', 21),
('ជិវ្ហាវិញ្ញាណ', 'gustatory-sense-taste', 21),
('កាយវិញ្ញាណ', 'tactile-sense-touch', 21),

-- Endocrine System (lesson_id = 22)
('ក្រពេញ', 'gland', 22),
('អរម៉ូន', 'hormone', 22),
('ការត្រួតពិនិត្យនៃប្រព័ន្ធអង់ដូគ្រីន', 'control-of-endocrine-system', 22),
('អីប៉ូតាឡាមុស', 'hypothalamus', 22),
('ក្រពេញអីប៉ូភីស', 'hypophysis-pituitary-gland', 22),
('ក្រពេញទីរ៉ូអ៊ុត', 'thyroid-gland', 22),
('ក្រពេញប៉ារ៉ាទីវ៉ូអ៊ុត', 'parathyroid-gland', 22),
('ក្រពេញលើតម្រងនោម', 'adrenal-glands', 22),
('លំពែង', 'pancreas', 22),
('ក្រពេញភេទ', 'gonads-sex-glands', 22),
('ក្រពេញទីមុស', 'thymus-gland', 22),
('ក្រពះនិងពោះវៀនតូច', 'stomach-and-small-intestine', 22),

-- Amino Acid (lesson_id = 23)
('ទម្រង់អាស៊ីតអាមីណេ', 'forms-of-amino-acids', 23),
('ប្រភេទផ្សេងៗនៃអាស៊ីតអាមីណេ', 'different-types-of-amino-acids', 23),
('ប៉ិបទីត', 'peptide', 23),

-- Protein (lesson_id = 24)
('រូបផ្គុំរបស់ប្រូតេអ៊ីន', 'structure-of-protein', 24),
('នាទីរបស់ប្រូតេអ៊ីន', 'function-of-protein', 24),
('ការបាត់បង់គុណភាពរបស់ប្រូតេអ៊ីន', 'protein-denaturation', 24),

-- Enzymes (lesson_id = 25)
('អ្វីជាអង់ស៊ីម?', 'what-is-enzyme', 25),
('ចំណែកថាក់របស់អង់ស៊ីម', 'enzyme-function', 25),
('លក្ខណៈរបស់អង់ស៊ីម', 'characteristics-of-enzymes', 25),

-- DNA (lesson_id = 26)
('សមាសធាតុគីមីនៃព័ត៏មានសេនេទិច', 'chemical-composition-of-genetic-information', 26),
('ទម្រង់ម៉ូលេគុល ADN', 'molecular-form-of-dna', 26),
('ស្វ័យដំឡើងទ្វេ ADN', 'quantity-of-dna-in-cell', 26),
('រូបមន្តសង្ខេប', 'summary-of-dna-replication', 26),
('សំណួរ & លំហាត់', 'dna-self-replication', 26),

-- Gene Expression (lesson_id = 27)
('ភាពត្រូវគ្នានិងខុសគ្នានៃ ADN និងប្រូតេអ៊ីន', 'dna-protein-comparison', 27),
('ការចម្លងព័ត៍មានសេនេទិច', 'genetic-information-replication', 27),
('ក្រមសេនេទិច', 'genetic-code', 27),
('ចលនការចម្លងក្រម', 'transcription-process', 27),
('ការបកប្រែក្រម', 'code-translation', 27),
('ចលនការបកប្រែក្រម', 'translation-process', 27),
('តម្រូវនៃការសំដែងផេណូទីប', 'requirements-for-phenotypic-expression', 27),
('រូបមន្តការសម្តែងចេញនៃសេន', 'GeneticFormular', 27),
('សំណួរ & លំហាត់', 'GeneticPractice', 27),

-- Bio Technology (lesson_id = 28)
('ការបង្កាត់ជ្រើសចំពោះរុក្ខជាតិ', 'selective-breeding-plants', 28),
('ការបង្កាត់ជ្រើសចំពោះសត្វ', 'selective-breeding-animals', 28),
('កូនរុក្ខជាតិ', 'plant-offspring', 28),
('កូនសត្វ', 'animal-offspring', 28),
('ប៉ូលីប្តូស៊ីឌី', 'polyploidy', 28),
('ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន', 'stages-of-gene-transfer', 28),
('ឧទាហរណ៍ផ្សេងៗក្នុងបន្ទេរសែន', 'examples-in-gene-transfer', 28),
('វិស្វកម្មសេនេទិចក្នុងវិស័យ', 'genetic-engineering-in-field', 28),
('គ្រោះថ្នាក់', 'dangers', 28),

-- Darwin Theory (lesson_id = 29)
('ការសង្កេតរបស់ដាវិន', 'darwins-observations', 29),
('ភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូស', 'organisms-galapagos-islands', 29),
('ការវិវត្ត', 'evolution', 29),
('ជម្រើសដោយធម្មជាតិ', 'natural-selection', 29),

-- Fossil (lesson_id = 30)
('កំណផូសុីល', 'fossil-formation', 30),
('ការកំណត់អាយុផូសុីល', 'fossil-dating', 30),
('សារសំខាន់នៃផូសុីល', 'important-properties-of-fossil', 30),

-- Grade 11 Math Topics
-- Sequences (lesson_id = 31)
('ស្វីតចំនួនពិត', 'real-number-sequences', 31),
('ស្វីតនព្វន្ត', 'arithmetic-sequences', 31),
('ស្វ៊ីតធរណីមាត្រ', 'geometric-sequences', 31),

-- Exponential and Logarithmic Functions (lesson_id = 32)
('អនុគមន៍អិចស្ប៉ូណង់ស្យែល', 'exponential-functions', 32),
('អនុគមន៍លោការីត', 'logarithmic-functions', 32),

-- Trigonometric Functions (lesson_id = 33)
('អនុគមន៍ត្រីកោណមាត្រ', 'trigonometric-functions', 33),
('រូបមន្តត្រីកោណមាត្រ', 'trigonometric-formulas', 33),
('សមីការនិងវិសមីការត្រីកោណមាត្រ', 'trigonometric-equations-and-inequalities', 33),

-- Matrices and Determinants (lesson_id = 34)
('ម៉ាទ្រីស', 'matrices', 34),
('ដេទែរមីណង់', 'determinants', 34),

-- Limits and Derivatives (lesson_id = 35)
('លីមីតនិងដេរីវេ', 'limits-and-derivatives', 35),
('អនុវត្តន៍នៃដេរីវេ', 'applications-of-derivatives', 35),
('អថិរភាពនិងក្រាបនៃអនុគមន៍', 'variations-and-graphs-of-functions', 35),

-- Probability (lesson_id = 36)
('ប្រូបាប', 'probability', 36),

-- Statistics (lesson_id = 37)
('ការបែងចែកទិន្នន័យជាភាគរយ', 'data-distribution-in-percentages', 37),
('រង្វាស់នៃគម្លាត', 'measures-of-dispersion', 37),
('គំនូសតាងបំណែងចែក', 'distribution-charts', 37),

-- Grade 11 Physics Topics
-- Mechanics (lesson_id = 38)
('ចលនាក្នុងប្លង់', 'motion-in-a-plane', 38),
('អនុវត្តច្បាប់ញូតុន', 'applying-newtons-laws', 38),
('ទំនាញ', 'gravity', 38),
('បរិមាណចលនានិងអាំពុលស្យុង', 'momentum-and-impulse', 38),
('ច្បាប់រក្សាថាមពល', 'law-of-conservation-of-energy', 38),
('លំនឹងនិងភាពយឺត', 'equilibrium-and-elasticity', 38),
('ឌីណាមិចនៃចលនារង្វិល', 'dynamics-of-rotational-motion', 38),
('សន្ទនីយឌីណាមិច', 'fluid-dynamics', 38),

-- Thermodynamics (lesson_id = 39)
('សីតុណ្ហភាពនិងកម្ដៅ', 'temperature-and-heat', 39),
('លក្ខណៈកម្ដៅនៃរូបធាតុ', 'thermal-properties-of-matter', 39),

-- Waves (lesson_id = 40)
('ចលនាខួប', 'periodic-motion', 40),
('រលក', 'waves', 40),
('សួរ', 'sound', 40),

-- Electricity (lesson_id = 41)
('បន្ទុកអគ្គិសនីនិងដែនអគ្គិសនី', 'electric-charge-and-electric-field', 41),
('ប៉ូតង់ស្យែលនិងថាមពលប៉ូតង់ស្យែលអគ្គិសនី', 'electric-potential-and-electric-potential-energy', 41),
('កុងដង់សាទ័រ', 'capacitors', 41),
('ចរន្តអគ្គិសនី រេស៊ីស្តង់ និងកម្លាំងអគ្គិសនីចលករ', 'electric-current-resistance-and-electromotive-force', 41),

-- Grade 11 Chemistry Topics
-- Chemical Calculations (lesson_id = 42)
('រូបមន្តនិងសមីការគីមី', 'Chemical-Formulas-and-Equations', 42),
('ចំនួនម៉ូល', 'Number-of-Moles', 42),

-- Metals (lesson_id = 43)
('លក្ខណៈលោហៈ', 'Properties-of-Metals', 43),
('យោបកលោហៈ', 'Metallurgy', 43),

-- Oxidation-Reduction and Electrochemistry (lesson_id = 44)
('ប្រតិកម្មអុកស៊ីតកម្ម-រេដុកម្មក្នុងសូលុយស្យុងទឹក', 'Oxidation-Reduction-Reactions-in-Aqueous-Solutions', 44),
('ប៉ូតង់ស្យែលអុកស៊ីដូរេដុកម្ម', 'Oxidation-Reduction-Potential', 44),
('ចំនួនអុកស៊ីតកម្ម', 'Oxidation-Number', 44),
('ថ្មពិលអេឡិចត្រូគីមី', 'Electrochemical-Cells', 44),
('អគ្គិសនីវិភាគ', 'Electrolysis', 44),

-- Chemical Reactions and Energy (lesson_id = 45)
('ថាមពលគីមី', 'Chemical-Energy', 45),
('កម្ដៅប្រតិកម្ម', 'Heat-of-Reaction', 45),

-- Inorganic Compounds (lesson_id = 46)
('អាម៉ូញ៉ាក់', 'Ammonia', 46),
('អាស៊ីតស៊ុលផួរិច', 'Sulfuric-Acid', 46),
('សមាសធាតុកាល់ស្យូម', 'Calcium-Compounds', 46),

-- Stereochemistry (lesson_id = 47)
('ធរណីមាត្រនៃម៉ូលេគុល', 'Molecular-Geometry', 47),
('រូបសណ្ឋាននិងទ្រង់ទ្រាយនៃម៉ូលេគុល', 'Conformation-and-Configuration-of-Molecules', 47),

-- Organic Chemistry (lesson_id = 48)
('អាល់កុលនិងអេទែ', 'Alcohols-and-Ethers', 48),
('អាល់ដេអ៊ុតនិងសេតូន', 'Aldehydes-and-Ketones', 48),
('អាស៊ីតកាបុកស៊ីលិច', 'Carboxylic-Acids', 48),

-- Grade 11 Biology Topics
-- Cells (lesson_id = 49)
('សមាសធាតុគីមីក្នុងកោសិកា', 'Chemical-Composition-of-Cells', 49),
('រូបផ្តុំនិងនាទីកោសិកា', 'Cell-Structure-and-Function', 49),
('ដំណុះដំណាលកោសិកានិងរូបផ្តុំសារពាង្គកាយរស់', 'Cell-Development-and-Organization-of-Living-Organisms', 49),

-- Reproduction and Growth (lesson_id = 50)
('កំណកោសិកាបន្តពូជ', 'Reproductive-Cells', 50),
('ការលូតលាស់របស់អំប្រ៊ីយ៉ុង', 'Embryonic-Development', 50),

-- Heredity (lesson_id = 51)
('ច្បាប់តំណពូជ', 'Principles-of-Heredity', 51),
('ក្រូម៉ូសូម', 'Chromosomes', 51),

-- Human Nutrition and Digestion (lesson_id = 52)
('អាហារ', 'Nutrition', 52),
('ការរំលាយអាហារ', 'Digestion', 52),

-- Gas Exchange and Excretion in Animals (lesson_id = 53)
('បណ្តូរឧស្ម័នរបស់សត្វ', 'Gas-Exchange-in-Animals', 53),
('ការបញ្ចេញចោល', 'Excretion', 53),

-- Interaction between Organisms and Environment (lesson_id = 54)
('របត់ឈាមនិងភាពស៊ាំ', 'Blood-Circulation-and-Immunity', 54),
('ថេរលំនឹង', 'Homeostasis', 54),

-- Structure of Vascular Plants (lesson_id = 55)
('ជាលិការុក្ខជាតិ', 'Plant-Tissues', 55),
('ប្ញស', 'Roots', 55),
('ដើមនិងស្លឹក', 'Stems-and-Leaves', 55),

-- Biology and Health (lesson_id = 56)
('ការប្រយុទ្ធប្រឆាំងនឹងជំងឺ', 'Disease-Prevention-and-Control', 56),
('អាហារនិងសុខភាព', 'Nutrition-and-Health', 56),

-- Grade 10 Math Topics
-- Logic-Sets-and-Numbers (lesson_id = 57)
('តក្កវិទ្យា', 'Logic', 57),
('សំណុំ', 'Sets', 57),
('ចំនួន', 'Numbers', 57),

-- Polynomials (lesson_id = 58)
('ពហុធា', 'Polynomials', 58),
('ប្រមាណវិធីចែកពហុធា', 'Polynomial-Division-Operations', 58),

-- Equations-and-Inequalities (lesson_id = 59)
('សមីការដឺក្រេទី 2មានមួយអញ្ញាតិ', 'Quadratic-Equations-with-One-Variable', 59),
('ប្រព័ន្ធសមីការដឺក្រេលំដាប់ខ្ពស់', 'Systems-of-Higher-Degree-Equations', 59),
('វិសមីការ', 'Inequalities', 59),

-- Plane-Geometry (lesson_id = 60)
('កូអរដោនេនៃចំណុច', 'Coordinates-of-a-Point', 60),
('សមីការបន្ទាត់', 'Equation-of-a-Line', 60),
('សមីការរង្វង់', 'Equation-of-a-Circle', 60),
('ដំណោះស្រាយវិសមីការតាមក្រាប', 'Graphical-Solutions-of-Inequalities', 60),

-- Functions-and-Function-Graphs (lesson_id = 61)
('អនុគមន៍ និងក្រាបនៃអនុគមន៍', 'Functions-and-Graphs-of-Functions', 61),
('អនុគមន៍ដឺក្រេទី 2 និងក្រាបរបស់វា', 'Quadratic-Functions-and-Their-Graphs', 61),
('អនុគមន៍សនិទាន អនុគមន៍អសនិទាន', 'Rational-Functions-Irrational-Functions', 61),

-- Trigonometric-Ratios (lesson_id = 62)
('ផលធៀបត្រីកោណមាត្រ', 'Trigonometric-Ratios', 62),
('ការអនុវត្តនៃផលធៀបត្រីកោណមាត្រ', 'Application-of-Trigonometric-Ratios', 62),

-- Statistics (lesson_id = 63)
('បំណែងចែកប្រេកង់និងការតាងក្រាប', 'Frequency-Distribution-and-Graphing', 63),
('រង្វាស់ទីតាំង', 'Measures-of-Position', 63),

-- Permutations-and-Combinations (lesson_id = 64)
('ចម្លាស់', 'Permutations', 64),
('បន្សំ', 'Combinations', 64),

-- Vectors-in-a-Plane (lesson_id = 65)
('វ៉ិចទ័រនិងប្រមាណវិធីលើវ៉ិចទ័រ', 'Vectors-and-Operations-on-Vectors', 65),
('ការអនុវត្តនៃវ៉ិចទ័រ', 'Application-of-Vectors', 65),

-- Geometric-Transformations-in-a-Plane (lesson_id = 66)
('បំលែងកិល', 'Translation', 66),
('បំលែងឆ្លុះ', 'Reflection', 66),
('បំលែងវិល', 'Rotation', 66),
('បំលែងចាំង', 'Dilation', 66),

-- Geometry-in-Space (lesson_id = 67)
('រូបធរណីមាត្រក្នុងលំហ', 'Geometric-Figures-in-Space', 67),
('បន្ទាត់និងប្លង់ស្របក្នុងលំហ', 'Parallel-Lines-and-Planes-in-Space', 67),
('ភាពអរតួកូណាល់ក្នុងលំហ', 'Orthogonality-in-Space', 67),

-- Grade 10 Physics Topics
-- Mechanics (lesson_id = 68)
('ចលនាត្រង់', 'Rectilinear-Motion', 68),
('ច្បាប់ចលនារបស់ញូតុន', 'Newtons-Laws-of-Motion', 68),
('កម្មន្ត ថាមពល និងអានុភាព', 'Work-Energy-and-Power', 68),
('សម្ពាធនៃសន្ទនីយស្តាទិច', 'Pressure-of-Static-Fluids', 68),

-- Thermodynamics (lesson_id = 69)
('សីតុណ្ហភាព', 'Temperature', 69),
('ទ្រឹស្តីស៊ីនេទិចនៃរូបធាតុ', 'Kinetic-Theory-of-Matter', 69),
('កម្ដៅ', 'Heat', 69),

-- Electricity-and-Magnetism (lesson_id = 70)
('អេឡិចត្រូស្តាទិច', 'Electrostatics', 70),
('ចរន្តជាប់និងម៉ាញេទិច', 'Direct-Current-and-Magnetism', 70),
('ចរន្តឆ្លាស់', 'Alternating-Current', 70),

-- Optics (lesson_id = 71)
('ធម្មជាតិនិងដំណាលនៃពន្លឺ', 'Nature-and-Propagation-of-Light', 71),
('ឡង់ទី', 'Lenses', 71),

-- Energy-and-Life (lesson_id = 72)
('ការបំប្លែងថាមពលដែលមានប្រភពខុសៗគ្នាឱ្យទៅជាថាមពលអគ្គិសនី', 'Conversion-of-Energy-from-Different-Sources-into-Electrical-Energy', 72),
('ការបំប្លែងថាមពលអគ្គិសនីឱ្យទៅជាថាមពលផ្សេងៗ', 'Conversion-of-Electrical-Energy-into-Other-Forms-of-Energy', 72),

-- Grade 10 Chemistry Topics
-- Atom (lesson_id = 73)
('ទ្រឹស្តីអាតូម', 'Atomic-Theory', 73),
('ទម្រង់អាតូម', 'Atomic-Structure', 73),

-- Periodic-Table-of-Chemical-Elements (lesson_id = 74)
('លក្ខណៈនៃតារាងខួប', 'Characteristics-of-the-Periodic-Table', 74),
('សិក្សាធាតុតាមក្រុម', 'Study-of-Elements-by-Group', 74),

-- Chemical-Bonds-and-Solid-Structures (lesson_id = 75)
('សម្ព័ន្ធគីមី', 'Chemical-Bonds', 75),
('ទម្រង់អង្គធាតុរឹង', 'Solid-Structures', 75),

-- Organic-Chemistry (lesson_id = 76)
('ប្រេងកាតនិងឥន្ធនៈ', 'Petroleum-and-Fuels', 76),
('អ៊ីដ្រូកាបួឆ្អែត : អាល់កាន', 'Saturated-Hydrocarbons-Alkanes', 76),
('អ៊ីដ្រូកាបួមិនទាន់ឆ្អែត', 'Unsaturated-Hydrocarbons', 76),
('អ៊ីដ្រូកាបួប្រហើរ : បង់សែន', 'Aromatic-Hydrocarbons-Benzene', 76),
('ជីគីមី', 'Chemical-Fertilizers', 76),

-- Grade 10 Biology Topics
-- Diversity-of-Living-Organisms (lesson_id = 77)
('ចំណែកថ្នាក់និងដើមឈើ មែកធាងពូជអម្បូរ', 'Classification-and-Phylogenetic-Trees', 77),
('វីរុសនិងបាក់តេរី', 'Viruses-and-Bacteria', 77),
('ប្រូទីស', 'Protists', 77),
('ផ្សិត', 'Fungi', 77),
('រុក្ខជាតិ', 'Plants', 77),
('សត្វ', 'Animals', 77),

-- Uniformity-of-Living-Organisms (lesson_id = 78)
('កោសិកា', 'Cells', 78),
('ប្រការីយ៉ូតនិងអឺការីយ៉ូត', 'Prokaryotes-and-Eukaryotes', 78),

-- Metabolism (lesson_id = 79)
('រស្មីសំយោគ', 'Photosynthesis', 79),
('ដង្ហើមកោសិកា', 'Cellular-Respiration', 79),

-- Human-Biology (lesson_id = 80)
('ប្រព័ន្ធគ្រោងឆ្អឹង', 'Skeletal-System', 80),
('ប្រព័ន្ធសាច់ដុំ', 'Muscular-System', 80),

-- Biology-in-Agriculture (lesson_id = 81)
('ជី', 'Fertilizers', 81),
('ការបង្កាត់', 'Breeding', 81),

-- Grade 9 Math Topics
-- Irrational-Numbers (lesson_id = 82)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 82),

-- Proportion (lesson_id = 83)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 83),

-- Algebraic-Expressions (lesson_id = 84)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 84),

-- First-Degree-Equation-With-One-Unknown (lesson_id = 85)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 85),

-- First-Degree-Inequality-With-One-Unknown (lesson_id = 86)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 86),

-- Frequency-Distribution (lesson_id = 87)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 87),

-- Statistical-Mean (lesson_id = 88)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 88),

-- Probability (lesson_id = 89)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 89),

-- Distance-Between-Two-Points (lesson_id = 90)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 90),

-- Equation-of-a-Line (lesson_id = 91)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 91),

-- System-of-First-Degree-Equations-With-Two-Unknowns (lesson_id = 92)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 92),

-- Pythagorean-Theorem (lesson_id = 93)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 93),

-- Circle-and-Line (lesson_id = 94)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 94),

-- Properties-of-Angles-in-a-Circle (lesson_id = 95)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 95),

-- Thales-Theorem (lesson_id = 96)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 96),

-- Similar-Triangles (lesson_id = 97)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 97),

-- Polygon (lesson_id = 98)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 98),

-- Solids (lesson_id = 99)
('នឹងមកដល់ឆាប់នេះ', 'coming-soon', 99),

-- Grade 9 Physics Topics
-- Force-Rotation-Physics (lesson_id = 100)
('បង្គំនិងបំបែកកម្លាំង', 'Combining-and-Decomposing-Forces', 100),
('ម៉ូម៉ង់នៃកម្លាំង', 'Moment-of-Force', 100),
('ទីប្រជុំទម្ងន់', 'Center-of-Gravity', 100),

-- Simple-Machines (lesson_id = 101)
('ឃ្នាស់', 'Lever', 101),
('ប្លង់ទេរ', 'Inclined-Plane', 101),
('រ៉ូលីង', 'Rolling', 101),

-- Pressure (lesson_id = 102)
('សម្ពាធនៃរាវ', 'Pressure-of-Liquids', 102),
('ច្បាប់បាស្កាល់', 'Pascals-Law', 102),
('ច្បាប់អាកីមេដេស', 'Archimedes-Law', 102),

-- Electricity-and-Magnetism (lesson_id = 103)
('អេឡិចត្រូស្តាទិច', 'Electrostatics', 103),
('ចរន្តជាប់', 'Direct-Current', 103),
('ម៉ាញេទិច', 'Magnetism', 103),

-- Optics (lesson_id = 104)
('ធម្មជាតិនៃពន្លឺ', 'Nature-of-Light', 104),
('ការឆ្លុះនៃពន្លឺ', 'Reflection-of-Light', 104),
('ការឆ្លងនៃពន្លឺ', 'Refraction-of-Light', 104),

-- Grade 9 Chemistry Topics
-- Periodic-Table-of-Chemical-Elements (lesson_id = 105)
('តារាងខួបនៃធាតុគីមី', 'Periodic-Table-of-Chemical-Elements', 105),
('លក្ខណៈធាតុតាមក្រុម', 'Characteristics-of-Elements-by-Group', 105),

-- Carbon-Oxygen-and-Hydrogen (lesson_id = 106)
('កាបួន', 'Carbon', 106),
('អុកស៊ីសែន', 'Oxygen', 106),
('អ៊ីដ្រូសែន', 'Hydrogen', 106),

-- Water-and-Air (lesson_id = 107)
('ទឹក', 'Water', 107),
('ខ្យល់', 'Air', 107),

-- Grade 9 Biology Topics
-- Photosynthesis (lesson_id = 108)
('រូបផ្តុំនៃស្លឹករុក្ខជាតិ', 'Structure-of-Plant-Leaves', 108),
('ដំណើររស្មីសំយោគ', 'Process-of-Photosynthesis', 108),
('ដង្ហើមរុក្ខជាតិ', 'Plant-Respiration', 108),

-- Nervous-System (lesson_id = 109)
('ណឺរ៉ូន', 'Neuron', 109),
('មជ្ឈមណ្ឌលប្រសាទ', 'Central-Nervous-System', 109),
('បរិមណ្ឌលប្រសាទ', 'Peripheral-Nervous-System', 109),

-- Immune-System (lesson_id = 110)
('ប្រព័ន្ធស៊ាំ', 'Immune-System', 110),
('អង់ទីបូឌី', 'Antibodies', 110),
('វ៉ាក់សាំង', 'Vaccines', 110),

-- Ecosystem (lesson_id = 111)
('បរិស្ថានវិទ្យា', 'Ecosystem', 111),
('ចរន្តថាមពល', 'Energy-Flow', 111),
('វដ្តធាតុ', 'Material-Cycles', 111),

-- Health-and-Hygiene (lesson_id = 112)
('សុខភាព', 'Health', 112),
('អនាម័យ', 'Hygiene', 112),
('ការបង្ការជំងឺ', 'Disease-Prevention', 112);

select * from topics;
select * from lessons;
