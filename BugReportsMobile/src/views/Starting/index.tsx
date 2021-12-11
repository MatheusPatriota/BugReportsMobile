import React from "react";
import { Container, ImageBox } from "./styles";
import Logo from "../../assets/logo.png";

export default function Starting() {
  return (
    <>
      <Container>
        <ImageBox source={Logo} />
      </Container>
    </>
  );
}
