import { FlatList, View } from "react-native";
import UserCard from "../src/components/userCard";
import users from "../assets/data/users";
import styles from "./styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
