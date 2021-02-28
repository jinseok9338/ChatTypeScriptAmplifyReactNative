import * as React from "react";
import { StyleSheet, View } from "react-native";
import ChatListItem from "../components/ChatListItems";

import { FlatList } from "react-native";

import Users from "../data/Users";
import { ContactList } from "../types";
import ContactListItem from "../components/ContactListItem";

export default function ContactScreen() {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Users}
        renderItem={({ item }) => (
          <ContactListItem contactList={item as ContactList} />
        )}></FlatList>
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
