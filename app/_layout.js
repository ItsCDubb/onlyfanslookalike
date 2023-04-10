import { Stack } from "expo-router";
import { API, Amplify, DataStore, Hub } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react-native";
import { useEffect } from "react";
import { User } from "../src/models";

Amplify.configure(awsconfig);

export default function RootLayout() {
  const CreateUserMutation = `  
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      handle
      bio
      subscriptionPrice
    }
  }
  `;
  useEffect(() => {
    const removeListener = Hub.listen("auth", async (data) => {
      if (data.payload.event === "signIn") {
        const userInfo = data.payload.data.attributes;
        console.log(JSON.stringify(userInfo, null, 2));
        // DataStore.save(new User({ id: userInfo.sub, name: userInfo.name }));
        const newUser = {
          id: userInfo.sub,
          name: userInfo.name,
          handle: userInfo.nickname,
          subscriptionPrice: 0,
        };
        await API.graphql({
          query: CreateUserMutation,
          variables: { input: newUser },
        });
        console.log("user save in database");
      }
    });
    return () => {
      removeListener();
    };
  }, []);
  return (
    <Authenticator.Provider>
      <Authenticator>
        <Stack screenOptions={{ headerShown: false }} />
      </Authenticator>
    </Authenticator.Provider>
  );
}
