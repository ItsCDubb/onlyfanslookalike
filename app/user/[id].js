import { FlatList, Text, View } from "react-native";
import { useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import UserProfileHeader from "../../src/components/userCard/userProfileHeader";
import posts from "../../assets/data/posts";
import Post from "../../src/components/Post";
import { FontAwesome5 } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { User } from "../../src/models";
import styles from "./styles";

const Profile = () => {
  const [user, setUser] = useState();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { id } = useSearchParams();
  useEffect(() => {
    DataStore.query(User, id).then(setUser);
  }, [id]);
  // const user = users.find((u) => u.id === id);
  if (!user) {
    return (
      <Text style={{ alignItems: "center", justifyContent: "center" }}>
        User not found!
      </Text>
    );
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
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Profile;
