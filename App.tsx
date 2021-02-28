import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
// @ts-ignore
import config from "./src/aws-exports";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
import axios from "axios";

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const randomImage = async () => {
      const ImgaUri = await axios.get("https://source.unsplash.com/random");

      return ImgaUri.request.responseURL;
    };

    const fetchUser = async () => {
      //Get Authenticated from Auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      if (userInfo) {
        //Get the User Info from backend with ID

        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        if (userData.data.getUser) {
          console.log("User is already in DataBase");
          return;
        }

        //If there is no User in DB then create one

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.attributes.email,
          imageUri: await randomImage(),
          status: "This is First Status",
          friends: [],
        };

        const result = await API.graphql(
          graphqlOperation(createUser, { input: newUser })
        );
        console.log(result);
      }
    };

    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
