import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicroPhonePress = () => {
    console.log("Microphone");
  };

  const onSendPress = () => {
    console.log("Send");
    //send Message to Backend
    setMessage("");
  };

  const onPress = () => {
    if (!message) {
      onMicroPhonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name='cash-register' size={24} color='grey' />
        <TextInput
          style={styles.textInput}
          multiline
          onChangeText={setMessage}
          placeholder={"Type a Message"}
        />
        <Entypo name='attachment' size={24} color='grey' style={styles.icon} />
        {!message && (
          <Fontisto name='camera' size={24} color='grey' style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        {!message ? (
          <View style={styles.buttonContainer}>
            <MaterialCommunityIcons name='microphone' size={24} color='white' />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <MaterialIcons name='send' size={24} color='white' />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
