import { FlatList, Text, View } from "react-native";
import { useSearchParams } from "expo-router";
import users from "../../assets/data/users";
import { useState } from "react";
import UserProfileHeader from "../../src/components/userCard/userProfileHeader";
import posts from "../../assets/data/posts";
import Post from "../../src/components/Post";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const Profile = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);
  if (!user) {
    return <Text>User not found!</Text>;
  }
  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
        <View style={styles.lockContainer}>
          <FontAwesome5 name="lock" size={50} color="gray" />
          <Text style={styles.lockText}>SUBSCRIBE TO SEE USER'S POSTS</Text>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      ListHeaderComponent={() => (
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
      )}
    />
  );
};

export default Profile;
