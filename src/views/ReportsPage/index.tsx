import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import Report from "../../components/Report";
import api from "../../services/Api";
import { styles } from "./styles";
import ReportType from "../../components/Report/Report-type";
import TabBar from "../../components/TabBar";

export default function ReportsPage({ route, navigation }: any) {
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState("all");

  const callbackFunction = (childData: any) => {
    setFilter(childData);
  };

  const loadReports = () => {
    console.log(route.params.roomId);
    api
      .get(`/reports/${route.params.roomId}/filter/${filter}`)
      .then((response) => {
        setReports(response.data.res);
      })
      .catch((error) => {
        console.log("ocorreu um erro ao tentar carregar os dados", error);
      });
  };

  useEffect(() => {
    loadReports();
  }, [filter]); // useEffect will run once and when id changes
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Project Name</Text>
          <TouchableOpacity
            style={styles.newReportButton}
            onPress={() =>
              navigation.navigate("NewReport", {
                roomId: route.params.roomId,
                authorId: route.params.authorId,
              })
            }
          >
            <Icon name="plus-circle" size={22} color="#fff" />
            <Text style={styles.buttonContent}>Criar nova OcorrĂȘncia</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {reports.length > 0 ? (
            reports.map((report: ReportType, index: number) => {
              return (
                <Report
                  key={index}
                  admin={false}
                  description={report.description}
                  title={report.title}
                  authorId={report.authorId}
                  active={report.active}
                  recived={report.recived}
                  underInvestigation={report.underInvestigation}
                  solved={report.solved}
                  _id={report._id}
                  created={report.created}
                />
              );
            })
          ) : (
            <Text style={styles.buttonContent}>
              nĂŁo existem reports cadastrados
            </Text>
          )}
        </ScrollView>
        <TabBar parentCallBack={callbackFunction} />
      </View>
    </>
  );
}
