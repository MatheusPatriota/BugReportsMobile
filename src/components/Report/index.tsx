import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/Api";
import ReportType from "./Report-type";
import { styles } from "./styles";

type AuthorType = {
  name: string;
  avatar: string;
};

export default function Report(props: ReportType) {
  const [author, setAuthor] = useState<AuthorType>({
    name: "User",
    avatar: "avatar",
  });

  const loadAuthor = () => {
    api
      .get(`/user/${props.authorId}`)
      .then((response) => {
        setAuthor(response.data.res);
      })
      .catch((error) => {
        console.log(
          "ocorreu um erro ao tentar carregar os dados do Autor",
          error
        );
      });
  };

  useEffect(() => loadAuthor(), []);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.footer}>
          <View style={styles.userArea}>
            <View>
              {/* <Icon name="user" size={22} color={"#fff"} /> */}
              <Image
                style={styles.userAvatar}
                source={{ uri: author.avatar }}
              />
            </View>
            <Text style={styles.textDefault}>
              {author.name || "usuario padrao"}
            </Text>
          </View>
          <Text style={styles.statusArea}>Status</Text>
        </View>
      </View>
    </>
  );
}
