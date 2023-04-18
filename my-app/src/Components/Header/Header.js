import { useLocation, useNavigate, useParams } from "react-router-dom";
 import { Container } from "./Style";
import { goToHomePage, goToLoginPage } from "../../Router/Coordinator";
 
 

 export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const logout = () => {
    window.localStorage.removeItem("Labeddit Token");
    goToLoginPage(navigate);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div>
             <h1>fdsff</h1>
            </div>
            <span>
              <h2>
                <a onClick={() => logout()}>Logout</a>
              </h2>
            </span>
          </Container>
        );
      case "/signup":
        return (
          <Container>
            <div>
              <img src={""} />
            </div>
            <span>
              <h2>
                <a onClick={() => goToLoginPage(navigate)}>Entrar</a>
              </h2>
            </span>
          </Container>
        );
      case `/posts/comment/${params.postId}`:
        return (
          <Container>
            <div>
              <img src={""} />
            </div>
            <span>
              <img src={""} onClick={() => goToHomePage(navigate)} />
            </span>
            <span>
              <h2>
                <a onClick={() => logout()}>Logout</a>
              </h2>
            </span>
          </Container>
        );
    }
  };
  return <Container>{renderHeader()}</Container>;
};

 