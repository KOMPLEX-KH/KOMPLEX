export const FUNCTION_BODY = `
                const React = arguments[0];
                const InlineMath = arguments[1];
                const BlockMath = arguments[2];
                const Calculator = arguments[3];
                const DefinitionBox = arguments[4];
                const TipBox = arguments[5];
                const ExampleBox = arguments[6];
                const ExerciseBox = arguments[7];
                const HintBox = arguments[8];
                const WarningBox = arguments[9];
                const CustomBox = arguments[10];
                const GraphBox = arguments[11];
                const ThreeDBox = arguments[12];
                const SummaryBox = arguments[13];
                const ExamQuestionBox = arguments[14];
                const ExerciseCreationBox = arguments[15];
                const TopicPracticeBox = arguments[16];
                const ThreeDExplanationBox = arguments[17];
                const GraphExplanationBox = arguments[18];
                const ImageExplanationBox = arguments[19];
                const VideoExplanationBox = arguments[20];
                const IconsRaw = arguments[21];
                // Safe icon wrapper to prevent crashes
                const SafeIcon = ({ name, ...props }) => {
                    const IconComponent = IconsRaw[name];
                    if (!IconComponent) {
                        return React.createElement('span', { 
                            style: { color: '#ef4444', fontSize: '12px' },
                            title: 'Icon not found: ' + name 
                        }, '⚠️ ' + name);
                    }
                    return React.createElement(IconComponent, props);
                };
                
                // Override Icons object to use SafeIcon
                const Icons = new Proxy(IconsRaw, {
                    get(target, prop) {
                        if (typeof prop === 'string' && target[prop]) {
                            return (props) => React.createElement(SafeIcon, { name: prop, ...props });
                        }
                        return (props) => React.createElement(SafeIcon, { name: prop, ...props });
                    }
                });`;
