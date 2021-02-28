import * as React from "react";
import { StyleSheet, View } from "react-native";
import ChatListItem from "../components/ChatListItems";

import { FlatList } from "react-native";

import ChatRooms from "../data/ChatRooms";
import { ChatRoom } from "../types";
import FloatingBox from "../components/FloatingButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ChatScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => String(Number(item.id) * Math.random())}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item as ChatRoom} />}
      ></FlatList>
      <FloatingBox />
    </View>
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
