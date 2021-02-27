import { formatDistance, parseISO } from "date-fns";
import React from "react";
import { Text, View } from "react-native";
import Users from "../../data/Users";
import { Message, User } from "../../types";
import styles from "./style";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { content, id, createdAt, user } = message;
  const isMyMessage = (user: User) => {
    return user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage(user) ? "#DCF8C5" : "white",
            marginRight: isMyMessage(user) ? 0 : 50,
            marginLeft: isMyMessage(user) ? 50 : 0,
          },
        ]}>
        {!isMyMessage(user) ? (
          <Text style={styles.name}>{user.name}</Text>
        ) : null}
        <Text style={styles.message}>{content}</Text>
        <Text style={styles.time}>{`${formatDistance(
          parseISO(createdAt),
          new Date()
        )} ago`}</Text>{" "}
      </View>
    </View>
  );
};

export default ChatMessage;
