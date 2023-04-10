import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { DataStore, Storage } from "aws-amplify";
import { Post } from "../../src/models";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import * as Crypto from "expo-crypto";
import styles from "./styles";

const NewPost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const { user } = useAuthenticator();
  const router = useRouter();
  const onPost = async () => {
    console.warn("Post: ", text);
    const imageKey = await uploadImage();
    await DataStore.save(
      new Post({ text, likes: 0, userID: user.attributes.sub, image: imageKey })
    );
    setText("");
    setImage("");
  };
  async function uploadImage() {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const fileKey = `${Crypto.randomUUID()}.png`;
      await Storage.put(fileKey, blob, {
        contentType: "image/jpeg", // contentType is optional
      });
      return fileKey;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  }
  const selectImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.inputContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          size={28}
          color="black"
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "500" }}>New Post</Text>
      </View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Compose new post..."
        multiline
        numberOfLines={3}
      />
      <View style={styles.iconRow}>
        <Feather onPress={selectImage} name="image" size={24} color="gray" />
      </View>
      {image && <Image src={image} style={{ width: "100%", aspectRatio: 1 }} />}
      <Button title="Post" onPress={onPost} />
    </SafeAreaView>
  );
};

export default NewPost;
