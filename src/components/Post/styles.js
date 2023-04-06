import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postPageContainer: {
    marginVertical: 15,
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  postUserHandle: {
    color: "gray",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  timeText: {
    color: "gray",
    marginRight: 5,
  },
  avatar: {
    aspectRatio: 1,
    width: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  name: {
    marginBottom: 3,
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    margin: 10,
    lineHeight: 18,
  },
  postImage: {
    aspectRatio: 1,
    width: "100%",
  },
  postIcons: {
    flexDirection: "row",
    margin: 10,
  },
  icon: {
    marginRight: 15,
  },
  postLikes: {
    marginHorizontal: 10,
    fontWeight: "500",
  },
});

export default styles;
