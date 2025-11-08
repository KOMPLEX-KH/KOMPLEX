import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Expression } from '@core-types/docs/boxProps';

export type DesmosGraphProps = {
    expressions: Expression[];
    width?: number;
    height?: number;
    options?: Record<string, any>;
};

export default function Graph({
    expressions,
    width,
    height = 400,
    options = {},
}: DesmosGraphProps) {
    // Generate HTML for Desmos calculator
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script src="https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
        <style>
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          #calculator {
            width: 100%;
            height: 100vh;
          }
        </style>
      </head>
      <body>
        <div id="calculator"></div>
        <script>
          var elt = document.getElementById('calculator');
          var calculator = Desmos.GraphingCalculator(elt, {
            expressions: true,
            keypad: true,
            settingsMenu: false,
            zoomButtons: true,
            showGrid: true,
            showXAxis: true,
            showYAxis: true,
            xAxisLabel: "x",
            yAxisLabel: "y",
            xAxisStep: 1,
            yAxisStep: 1,
            ${JSON.stringify(options).slice(1, -1)}
          });
          
          // Set expressions
          var expressions = ${JSON.stringify(expressions)};
          expressions.forEach(function(expr) {
            calculator.setExpression(expr);
          });
        </script>
      </body>
    </html>
  `;

    return (
        <View style={[styles.container, { width: width || '100%', height }]}>
            <WebView
                source={{ html: htmlContent }}
                style={styles.webview}
                scrollEnabled={false}
                bounces={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
    },
    webview: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});
