import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { styles } from "./style";
import { lightColors } from "../../global/colors";
export default function SelectionBar() {
  const [data, setData] = useState([
    {
      id: "1",
      label: "200ml",
      selected: true,
    },
    {
      id: "2",
      label: "300ml",
      selected: false,
    },
    {
      id: "3",
      label: "400ml",
      selected: false,
    },
    {
      id: "4",
      label: "500ml",
      selected: false,
    },
    {
      id: "5",
      label: "600ml",
      selected: false,
    },
    {
      id: "6",
      label: "700ml",
      selected: false,
    },
    {
      id: "7",
      label: "800ml",
      selected: false,
    },
  ]);

  const screenStyles = styles();

  const handleSelectWaterFill = (id: string) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: true,
        };
      }
      return {
        ...item,
        selected: false,
      };
    });

    setData(newData);
  };

  const flatListRef = useRef(null);

  const handleScrollToDistance = (side: string) => {
    const distanceToScroll = `${side}200`;

    flatListRef.current.scrollToOffset({
      animated: true,
      offset: parseInt(distanceToScroll),
    });
  };

  return (
    <View style={screenStyles.container}>
      <Entypo
        onPress={() => handleScrollToDistance("-")}
        name="chevron-small-left"
        size={32}
        color={lightColors.tertiary}
      />

      <FlatList
        data={data}
        horizontal
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              screenStyles.buttonWater,
              {
                backgroundColor: item.selected
                  ? lightColors.primary
                  : lightColors.secondary,
              },
            ]}
            key={item.id}
            onPress={() => handleSelectWaterFill(item.id)}
          >
            {item.selected && (
              <FontAwesome6
                name="glass-water-droplet"
                size={24}
                color={lightColors.secondary}
              />
            )}

            <Text
              style={{
                color: item.selected
                  ? lightColors.secondary
                  : lightColors.tertiary,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <Entypo
        onPress={() => handleScrollToDistance("+")}
        name="chevron-small-right"
        size={32}
        color={lightColors.tertiary}
      />
    </View>
  );
}
