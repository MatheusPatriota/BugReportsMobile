import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background: #2b2d42;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoBox = styled.Image`
  height: 52.85px;
  width: 251.42px;
  margin: 10px;
`;

export const LoginInput = styled.TextInput`
  height: 50px;
  background: #fff;
  width: 320px;
  border-color: gray;
  border-width: 1px;
  margin: 10px;
  border-radius: 8px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 320px;

  align-items: center;
  justify-content: center;

  background: #0066e8;
  border-radius: 10px;
`;

export const TextBox = styled.Text`
  color: #fff;
`;
