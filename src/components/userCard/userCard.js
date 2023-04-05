import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";

export default function userCard({ user }) {
  return (
    <ImageBackground source={{ uri: user.coverImage }} style={styles.userCard}>
      <View style={styles.overlay} />
      <Image src={user.avatar} style={styles.userImage} />
      <View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userHandle}>@{user.handle}</Text>
      </View>
    </ImageBackground>
  );
}
