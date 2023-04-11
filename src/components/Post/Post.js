import { Image, Text, View } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { DataStore, Storage } from "aws-amplify";
import { User } from "../../models";
import styles from "./styles";

const Post = ({ post }) => {
  const [user, setUser] = useState();
  const [imageUri, setImageUri] = useState();
  useEffect(() => {
    DataStore.query(User, post.userID).then(setUser);
  }, []);
  useEffect(() => {
    if (post.image) {
      Storage.get(post.image).then(setImageUri);
    }
  }, [post.image]);
  console.log(JSON.stringify(imageUri, null, 2));
  return (
    <View style={styles.postPageContainer}>
      <View style={styles.postContainer}>
        <Image src={user?.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.postUserHandle}>@{user?.handle}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>3 hours ago</Text>
          <Entypo name="dots-three-horizontal" size={18} color="gray" />
        </View>
      </View>
      <Text style={styles.description}>{post.text}</Text>
      {imageUri && <Image src={imageUri} style={styles.postImage} />}
      <View style={styles.postIcons}>
        <AntDesign name="hearto" style={styles.icon} />
        <FontAwesome5 name="dollar-sign" style={styles.icon} />
      </View>
      <Text style={styles.postLikes}>{post.likes} Likes</Text>
    </View>
  );
};

export default Post;
