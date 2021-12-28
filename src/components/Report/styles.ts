import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight: "bold",
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#FFFF',
    margin: 10,
    borderRadius:10,
    padding:10,
  },
  description: {
    color: '#000',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000',
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  userArea:{
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    height:40,
    width:40,
    backgroundColor: '#0066E8',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 10,
  },
  statusArea: {
    color: '#0066E8',
  },
  textDefault:{
    marginLeft: 10,
    color: '#000',
  },
  statusAdmin:{
    display: 'flex',
    flexDirection: 'row',
  },
  statusIcon: {
    marginLeft: 10,
    marginRight: 10,
  }
})