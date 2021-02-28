/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateChats = /* GraphQL */ `
  subscription OnCreateChats {
    onCreateChats {
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
export const onUpdateChats = /* GraphQL */ `
  subscription OnUpdateChats {
    onUpdateChats {
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
export const onDeleteChats = /* GraphQL */ `
  subscription OnDeleteChats {
    onDeleteChats {
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
