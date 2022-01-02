import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
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
          <View>
            {props.admin ? (
              <View style={styles.statusAdmin}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      "Excluir Report?",
                      "Você está prestes a excluir um Report, deseja continuar?",
                      [
                        {
                          text: "Sim",
                          onPress: () => {
                            api
                              .delete(`/report/${props._id}`)
                              .then((response) => {
                                Alert.alert("Report Excluido com sucesso!");
                              })
                              .catch((error) => {
                                console.log(error);
                              });
                          },
                        },
                        {
                          text: "Não",
                          onPress: () => console.log("No Pressed"),
                          style: "cancel",
                        },
                      ],
                      { cancelable: true }
                    );
                  }}
                >
                  <Icon
                    name="trash"
                    size={22}
                    color="#ce4141"
                    style={styles.statusIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    api.put(`/report/${props._id}`, {
                      underInvestigation: true,
                      solved: false,
                    });
                  }}
                >
                  <Icon
                    name="search"
                    size={22}
                    color="#005018"
                    style={styles.statusIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    api.put(`/report/${props._id}`, {
                      underInvestigation: false,
                      solved: true,
                    });
                  }}
                >
                  <Icon
                    name="check"
                    size={22}
                    color="#3700fc"
                    style={styles.statusIcon}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.statusArea}>Status</Text>
            )}
          </View>
        </View>
      </View>
    </>
  );
}
