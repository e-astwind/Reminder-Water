import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { lightColors } from "../../global/colors";
import { styles } from "./style";

function HydrationLevel({ currentValue, meta, radius, strokeWidth }) {
  const screenStyles = styles();

  const percentage = (currentValue / meta) * 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2 - 40,
      }}
    >
      <Svg>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth / 14}
        />

        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={lightColors.primary}
          strokeWidth={strokeWidth / 14}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <View style={screenStyles.levelHydrationContainer}>
        <Text style={screenStyles.metaLabel}>Meta</Text>
        <Text>
          <Text style={screenStyles.currentValueLabel}>{currentValue}</Text>
          <Text>
            <Text style={screenStyles.metaValueLabel}>/{meta}ml</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default HydrationLevel;
