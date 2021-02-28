import * as React from "react";
import { StyleSheet, View } from "react-native";
import ChatListItem from "../components/ChatListItems";

import { FlatList } from "react-native";

import { ContactList } from "../types";
import ContactListItem from "../components/ContactListItem";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";
import { useEffect, useState } from "react";

export default function ContactScreen() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUserId(userInfo.attributes.sub);
      console.log(userInfo.attributes.sub);
    };
    fetchUser();
  }, []);

  const [users, setUsers] = useState(null);

  React.useEffect(() => {
    //Fetch Users from DynamoDb
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(listUsers, {
            filter: { id: { eq: userId } },
          })
        );
        console.log(usersData.data.listUsers.items);
        setUsers(usersData.data.listUsers.items[0].friends);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [userId]);

  console.log(users);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={users}
        renderItem={({ item }) => (
          <ContactListItem contactList={item as ContactList} />
        )}
      ></FlatList>
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
