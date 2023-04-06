import { FlatList, View } from "react-native";
import UserCard from "../src/components/userCard";
import users from "../assets/data/users";
import { Link } from "expo-router";
import styles from "./styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href={"/Post/newPost"}>New Post</Link>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
