import { FlatList, Text, View } from "react-native";
import UserCard from "../src/components/userCard";
import { Link } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { User } from "../src/models";
import styles from "./styles";

export default function Page() {
  const [users, setUsers] = useState([]);
  const { signOut } = useAuthenticator();
  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);
  return (
    <View style={styles.container}>
      <Link href={"/Post/newPost"}>New Post</Link>
      <Text onPress={() => signOut()}>Sign Out</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
