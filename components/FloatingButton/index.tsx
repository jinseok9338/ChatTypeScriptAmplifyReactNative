import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const FloatingBox = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ContactScreen");
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialIcons name='message' size={28} color='black' />
      </View>
    </TouchableOpacity>
  );
};

export default FloatingBox;
