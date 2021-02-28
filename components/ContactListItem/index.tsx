import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom, ContactList } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";
import styles from "./style";
import { formatDistance, parseISO } from "date-fns";
import { createChatRoom, createChats } from "../../src/graphql/mutations";
import { graphqlOperation } from "aws-amplify";

export type ContactListItemProps = {
  contactList: ContactList;
};

const ChatListItem = ({ contactList }: ContactListItemProps) => {
  const { id, name, imageUri, status } = contactList;
  const navigation = useNavigation();

  const onClick = () => {
    console.log("clicked");
    graphqlOperation(createChats, { input: { id: uuidv4(), lastMessage: "" } });

    graphqlOperation(createChatRoom, {
      input: { id: uuidv4(), lastMessage: "" },
    });
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
