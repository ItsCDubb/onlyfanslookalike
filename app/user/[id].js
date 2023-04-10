import { FlatList, Text, View } from "react-native";
import { useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import UserProfileHeader from "../../src/components/userCard/userProfileHeader";
import Post from "../../src/components/Post";
import { FontAwesome5 } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import { User, Post as PostModel } from "../../src/models";
import styles from "./styles";

const Profile = () => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const { id } = useSearchParams();
  useEffect(() => {
    DataStore.query(User, id).then(setUser);
    DataStore.query(PostModel, (post) => post.userID.eq(id)).then(setPosts);
  }, [id]);
  if (!user) {
    return (
      <Text style={{ alignItems: "center", justifyContent: "center" }}>
        User not found!
      </Text>
    );
  }
  console.log(JSON.stringify(user, null, 2));
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
      renderItem={({ item }) => <Post post={item} user={user} />}
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
