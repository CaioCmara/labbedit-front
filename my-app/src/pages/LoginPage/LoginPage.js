import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { StyleMain, StyleSectionLoginSignup } from "../../constants/stylePages";
import { goToHomePage, goToSignUpPage } from "../../Router/Coordinator";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");
    if (token) {
      goToHomePage(navigate);
    }
  }, [navigate]);
  const Login = async () => {
    try {
      let body = {
        email: email,
        password: password,
      };

      const response = await axios.post(`${BASE_URL}/users/login`, body);
      console.log("response", response);

      window.localStorage.setItem("TokenApi-Labeddit", response.data.token);

      if (response.data.token !== undefined) {
        goToHomePage(navigate);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StyleMain>
        <StyleSectionLoginSignup>
          <div>
            <img src={""} alt="Logo Labeddit" />
            <h1>LabEdddit</h1>
            <h3>O projeto de rede social da Labenu</h3>
          </div>
    
          <section>
            <input
              value={email}
              name="email"
              onChange={onChangeEmail}
              placeholder="E-mail"
            />
            <input
              value={password}
              name="password"
              onChange={onChangePassword}
              type="password"
              placeholder="Senha"
            />
          </section>
          <div>
            <button onClick={() => Login()}>Continuar</button>
            <button
              onClick={() => goToSignUpPage(navigate)}
              className="signUpButton"
            >
              Crie uma conta
            </button>
          </div>
        </StyleSectionLoginSignup>
      </StyleMain>
    </>
  );
}
 
