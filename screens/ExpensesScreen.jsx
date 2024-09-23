import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import CustomHeader from '../components/CustomHeader';

const screenWidth = Dimensions.get("window").width;

export default function ExpensesScreen() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    const chartConfig = {
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#eff3ff", 
        backgroundGradientTo: "#efefef",  
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
        propsForBackgroundLines: {
            strokeDasharray: ""
        },
    };

    return (
        <View>
            <View>
                <CustomHeader
                centertitle='Expenses'
                lefttext='Back'
                righttext='New'
                />
            </View>
            <View>
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    yAxisLabel="" 
                    chartConfig={chartConfig}
                    withHorizontalLabels={false} 
                    withVerticalLabels={true} 
                />
            </View>
        </View>
    );
}
