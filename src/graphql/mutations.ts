/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createChats = /* GraphQL */ `
  mutation CreateChats(
    $input: CreateChatsInput!
    $condition: ModelChatsConditionInput
  ) {
    createChats(input: $input, condition: $condition) {
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
export const updateChats = /* GraphQL */ `
  mutation UpdateChats(
    $input: UpdateChatsInput!
    $condition: ModelChatsConditionInput
  ) {
    updateChats(input: $input, condition: $condition) {
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
export const deleteChats = /* GraphQL */ `
  mutation DeleteChats(
    $input: DeleteChatsInput!
    $condition: ModelChatsConditionInput
  ) {
    deleteChats(input: $input, condition: $condition) {
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
