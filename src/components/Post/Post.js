import { Image, Text, View } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const Post = ({ post }) => {
  return (
    <View style={styles.postPageContainer}>
      <View style={styles.postContainer}>
        <Image src={post.User.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.postUserHandle}>@{post.User.handle}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>3 hours ago</Text>
          <Entypo name="dots-three-horizontal" size={18} color="gray" />
        </View>
      </View>
      <Text style={styles.description}>{post.text}</Text>
      <Image src={post.image} style={styles.postImage} />
      <View style={styles.postIcons}>
        <AntDesign name="hearto" size={20} color="gray" style={styles.icon} />
        <FontAwesome5
          name="dollar-sign"
          size={20}
          color="gray"
          style={styles.icon}
        />
      </View>
      <Text style={styles.postLikes}>{post.likes} Likes</Text>
    </View>
  );
};

export default Post;
