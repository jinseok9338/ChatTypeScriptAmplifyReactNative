/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      friends {
        id
        name
        imageUri
        status
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        status
        friends {
          id
          name
          imageUri
          status
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      users {
        id
        name
        imageUri
        status
      }
      lastMessage
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        users {
          id
          name
          imageUri
          status
        }
        lastMessage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChats = /* GraphQL */ `
  query GetChats($id: ID!) {
    getChats(id: $id) {
      id
      chats {
        user {
          id
          name
          imageUri
          status
        }
        message
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatss = /* GraphQL */ `
  query ListChatss(
    $filter: ModelChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chats {
          message
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
