/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  friends?: Array< FriendsInput | null > | null,
};

export type FriendsInput = {
  id: string,
  name: string,
  imageUri: string,
  status: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  imageUri?: string | null,
  status?: string | null,
  friends?:  Array<Friends | null > | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Friends = {
  __typename: "Friends",
  id?: string,
  name?: string,
  imageUri?: string,
  status?: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
  friends?: Array< FriendsInput | null > | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateChatRoomInput = {
  id?: string | null,
  users?: Array< FriendsInput | null > | null,
  lastMessage?: string | null,
};

export type ModelChatRoomConditionInput = {
  lastMessage?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id?: string | null,
  users?:  Array<Friends | null > | null,
  lastMessage?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateChatRoomInput = {
  id: string,
  users?: Array< FriendsInput | null > | null,
  lastMessage?: string | null,
};

export type DeleteChatRoomInput = {
  id?: string | null,
};

export type CreateChatsInput = {
  id?: string | null,
  chats?: Array< ChatInput | null > | null,
};

export type ChatInput = {
  user?: FriendsInput | null,
  message?: string | null,
};

export type ModelChatsConditionInput = {
  and?: Array< ModelChatsConditionInput | null > | null,
  or?: Array< ModelChatsConditionInput | null > | null,
  not?: ModelChatsConditionInput | null,
};

export type Chats = {
  __typename: "Chats",
  id?: string | null,
  chats?:  Array<Chat | null > | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Chat = {
  __typename: "Chat",
  user?: Friends,
  message?: string | null,
};

export type UpdateChatsInput = {
  id: string,
  chats?: Array< ChatInput | null > | null,
};

export type DeleteChatsInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelStringInput | null,
  lastMessage?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelChatsFilterInput = {
  id?: ModelStringInput | null,
  and?: Array< ModelChatsFilterInput | null > | null,
  or?: Array< ModelChatsFilterInput | null > | null,
  not?: ModelChatsFilterInput | null,
};

export type ModelChatsConnection = {
  __typename: "ModelChatsConnection",
  items?:  Array<Chats | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input?: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input?: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input?: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatsMutationVariables = {
  input?: CreateChatsInput,
  condition?: ModelChatsConditionInput | null,
};

export type CreateChatsMutation = {
  createChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatsMutationVariables = {
  input?: UpdateChatsInput,
  condition?: ModelChatsConditionInput | null,
};

export type UpdateChatsMutation = {
  updateChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatsMutationVariables = {
  input?: DeleteChatsInput,
  condition?: ModelChatsConditionInput | null,
};

export type DeleteChatsMutation = {
  deleteChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      friends?:  Array< {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id?: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id?: string | null,
      users?:  Array< {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null > | null,
      lastMessage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatsQueryVariables = {
  id?: string,
};

export type GetChatsQuery = {
  getChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatssQueryVariables = {
  filter?: ModelChatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatssQuery = {
  listChatss?:  {
    __typename: "ModelChatsConnection",
    items?:  Array< {
      __typename: "Chats",
      id?: string | null,
      chats?:  Array< {
        __typename: "Chat",
        message?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    friends?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id?: string | null,
    users?:  Array< {
      __typename: "Friends",
      id: string,
      name: string,
      imageUri: string,
      status: string,
    } | null > | null,
    lastMessage?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatsSubscription = {
  onCreateChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatsSubscription = {
  onUpdateChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatsSubscription = {
  onDeleteChats?:  {
    __typename: "Chats",
    id?: string | null,
    chats?:  Array< {
      __typename: "Chat",
      user?:  {
        __typename: "Friends",
        id: string,
        name: string,
        imageUri: string,
        status: string,
      } | null,
      message?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
