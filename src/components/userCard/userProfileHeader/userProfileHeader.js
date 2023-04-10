import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
  const router = useRouter();
  return (
    <View>
      <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.coverImage}
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.userInfo}>
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back"
            size={28}
            color="white"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userStats}>
              1.4K Posts · 64.3k Likes · 15.3k Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Image src={user.avatar} style={styles.userAvatar} />
          <FontAwesome name="share-square-o" size={24} color="royalblue" />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.handle}>@{user.handle}</Text>
        <Text style={styles.bio} numberOfLines={5}>
          {user.bio}
        </Text>
        <Text style={styles.subscription}>SUBSCRIPTION</Text>
        <Pressable
          onPress={() => setIsSubscribed(!isSubscribed)}
          style={[
            styles.button,
            { backgroundColor: isSubscribed ? "white" : "royalblue" },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "royalblue" : "white" },
            ]}
          >
            {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Text>
          <Text
            style={[
              styles.buttonText,
              { color: isSubscribed ? "royalblue" : "white" },
            ]}
          >
            {user.subscriptionPrice === 0
              ? "FOR FREE"
              : `$${user.subscriptionPrice.toFixed(2)} / month`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserProfileHeader;
