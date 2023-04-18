import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { goToHomePage, goToLoginPage } from "../../Router/Coordinator";
import { Header } from "../../Components/Header/Header";
import {
  Checkbox,
  Container,
  Content,
  DivButton,
  DivStyled,
  Input,
} from "./Style";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
 
  })

  const onChangeForm = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, [name]: value });
  };

  const signup = async (event) => {
    event.preventDefault();

    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(BASE_URL + "/users/signup", body);
      window.localStorage.setItem("Labeddit Token", response.data.token);
      goToHomePage(navigate);
    } catch (error) {
        alert(error.response.data)
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>

        <article>
          <form onSubmit={signup}  >
            <section>
              <Input
                placeholder="Apelido"
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
              />
            </section>

            <section>
              <Input
                placeholder="E-mail"
                name={"email"}
                value={form.email}
                onChange={onChangeForm}
              />
            </section>

            <section>
              <Input
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                name={"password"}
                value={form.password}
                onChange={onChangeForm}
              />
            </section>
            <DivStyled>
              <div>
                <h4>
                  Ao continuar, você concorda com o nosso{" "}
                  <a> Contrato de usuário </a> e{" "}
                  <a> nossa Política de Privacidade</a>
                </h4>
                <Checkbox>
                  <input type="checkbox" />
                  <h4>
                    Eu concordo em receber emails sobre coisas legais no
                    Labeddit
                  </h4>
                </Checkbox>
              </div>
              <DivButton>
                <button>Cadastrar</button>
              </DivButton>
            </DivStyled>
          </form>
        </article>
    
      </Content>
     
    </Container>
  );
};
