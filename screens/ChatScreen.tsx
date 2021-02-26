import * as React from "react";
import { StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItems";

import { FlatList } from "react-native";

import ChatRooms from "../data/ChatRooms";
import { ChatRoom } from "../types";

export default function ChatScreen() {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={ChatRooms}
      renderItem={({ item }) => (
        <ChatListItem chatRoom={item as ChatRoom} />
      )}></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // scrollView: {
  //   marginHorizontal: 20,
  // },
});
