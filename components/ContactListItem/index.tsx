import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom, ContactList } from "../../types";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { formatDistance, parseISO } from "date-fns";

export type ContactListItemProps = {
  contactList: ContactList;
};

const ChatListItem = ({ contactList }: ContactListItemProps) => {
  const { id, name, imageUri, status } = contactList;
  const navigation = useNavigation();

  const onClick = () => {
    console.log("clicked");
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: imageUri }}></Image>
        </View>

        <View style={styles.midContainer}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.lastMessage}>{status}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
