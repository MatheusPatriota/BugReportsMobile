import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import BugLogo from "../../assets/bug_logo.png";
import api from "../../services/Api";
import ReportType from "../../components/Report/Report-type";
import UserTypes from "../LoginPage/UserTypes";

export default function ReportDetailsPage({ route }: any) {
  const [report, setReport] = useState<ReportType>();
  const [author, setAuthor] = useState<UserTypes>();

  const loadReportInformation = () => {
    api
      .get(`/report/${route.params.reportId}`)
      .then((response) => setReport(response.data.res));

    api
      .get(`/user/${route.params.authorId}`)
      .then((response) => setAuthor(response.data.res));
  };

  useEffect(() => loadReportInformation(), []);

  return (
    <>
      {report && author ? (
        <View style={styles.container}>
          <Text style={styles.title}>Autor:</Text>
          <View style={styles.authorDisplay}>
            <Image source={{ uri: author.avatar }} style={styles.logo} />
            <Text style={styles.title}>{author.name}</Text>
          </View>
          <Text style={styles.title}>Titulo da Ocorrência</Text>
          <View>
            <Text style={styles.communText}>{report.title}</Text>
          </View>
          <Text style={styles.title}>Descrição da Ocorrência</Text>
          <View>
            <Text style={styles.communText}>{report.description}</Text>
          </View>
          <Text style={styles.title}>Data da Ocorrência</Text>
          <View>
            <Text style={styles.communText}>{report.created}</Text>
          </View>
          <Text style={styles.title}>Status da Ocorrência</Text>
          <View>
            <Text style={styles.communText}>
              {report.solved
                ? "Resolvido"
                : report.underInvestigation
                ? "Em investigação"
                : "Recebido pela Equipe de Desenvolvimento"}
            </Text>
          </View>
        </View>
      ) : (
        <Text>carregando...</Text>
      )}
    </>
  );
}
