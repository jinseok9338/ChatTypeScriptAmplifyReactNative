import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { formatDistance, parseISO } from "date-fns";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = ({ chatRoom }: ChatListItemProps) => {
  const { users, lastMessage, id } = chatRoom;
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatDetailScreen", { name: users[1].name });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: users[1].imageUri }}></Image>
        </View>

        <View style={styles.midContainer}>
          <Text style={styles.userName}>{users[1].name}</Text>
          <Text style={styles.lastMessage}>{lastMessage.content}</Text>
        </View>
        <Text numberOfLines={1} style={styles.time}>
          {`${formatDistance(parseISO(lastMessage.createdAt), new Date())} ago`}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
