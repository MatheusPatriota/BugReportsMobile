import React from "react";
import Logo from "../../assets/logo.png";
import { Button, Container, LoginInput, LogoBox, TextBox } from "./styles";

export default function LoginPage() {
  return (
    <>
      <Container>
        <LogoBox source={Logo} />
        <TextBox>Realizar Login</TextBox>
        <LoginInput placeholder={"Insira Seu Login"} />
        <LoginInput placeholder={"Insira Sua Senha"} />
        <Button
          onPress={() => {
            console.log("teste");
          }}
          accessibilityLabel="Realizar Login no sistema do BugReports"
        >
          <TextBox>Realizar Login</TextBox>
        </Button>
      </Container>
    </>
  );
}
