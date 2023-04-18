import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToLoginPage } from "../../Router/Coordinator";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../context/GlobalContext";
import { Header } from "../../Components/Header/Header";
import { Container, PostContainer } from "./Style";
import { PostCard } from "../../Components/Card/PostCard";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const authorization = window.localStorage.getItem("Authorization Token");
    if (!authorization) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);
  const createPost = async ( ) => {
   
    try {
      const body = {
         content,
      };

      await axios.post(BASE_URL + "/posts", body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      setContent("");
      fetchPosts();
    } catch (error) {
       console.log(error)
    }
  };
  return (
    <Container>
      <Header />
      <PostContainer>
        <form onSubmit={createPost}>
          <section>
            <textarea
              maxLength={150}
              type="text"
              wrap="hard"
              placeholder="Escreva seu post..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </section>
          <button>Postar</button>
        </form>
      </PostContainer>

      <section>
        {posts &&
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </section>
    </Container>
  );
};
