import React from "react";
import { FlatList, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import { Message } from "../types";
import Chats from "../data/Chats";
import InputBox from "../components/InputBox";

const ChatDetailScreen = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Chats.messages}
        inverted
        renderItem={({ item }) => (
          <ChatMessage message={item as Message} />
        )}></FlatList>
      <InputBox />
    </View>
  );
};

export default ChatDetailScreen;
