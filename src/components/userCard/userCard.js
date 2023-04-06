import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

export default function userCard({ user }) {
  return (
    <Link href={`/user/${user.id}`} asChild>
      <Pressable>
        <ImageBackground
          source={{ uri: user.coverImage }}
          style={styles.userCard}
        >
          <View style={styles.overlay} />
          <Image src={user.avatar} style={styles.userAvatar} />
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userHandle}>@{user.handle}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}
