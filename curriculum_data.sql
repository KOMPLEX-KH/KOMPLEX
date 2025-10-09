-- Curriculum Data SQL
-- Generated from curriculum structure

-- Insert Grades
INSERT INTO grades (grade, grade_khmer) VALUES
('grade-12', 'ថ្នាក់ទី១២'),
('grade-11', 'ថ្នាក់ទី១១'),
('grade-10', 'ថ្នាក់ទី១០'),
('grade-9', 'ថ្នាក់ទី៩');

-- Insert Subjects
INSERT INTO subjects (subject, title, english_table, icon, grade_id) VALUES
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
('solids', 'សូលីត', 'Solids', 'Box', 13);

-- Note: Physics, Chemistry, and Biology lessons for grades 9-11 are not fully defined in the curriculum files
-- They appear to use ComingSoon components, so they are not included in this SQL file
-- Only the subject entries are created for these grades
