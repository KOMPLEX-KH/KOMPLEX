export const FUNCTION_BODY = `const React = arguments[0];
                const InlineMath = arguments[1];
                const Calculator = arguments[2];
                const DefinitionBox = arguments[3];
                const TipBox = arguments[4];
                const ExampleBox = arguments[5];
                const ExerciseBox = arguments[6];
                const HintBox = arguments[7];
                const WarningBox = arguments[8];
                const CustomBox = arguments[9];
                const GraphBox = arguments[10];
                const ThreeDBox = arguments[11];
                const SummaryBox = arguments[12];
                const ExamQuestionBox = arguments[13];
                const ExerciseCreationBox = arguments[14];
                const TopicPracticeBox = arguments[15];
                const ThreeDExplanationBox = arguments[16];
                const GraphExplanationBox = arguments[17];
                const ImageExplanationBox = arguments[18];
                const VideoExplanationBox = arguments[19];
                const IconsRaw = arguments[20];
                
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
                });`