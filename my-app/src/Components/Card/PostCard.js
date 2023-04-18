import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { BASE_URL } from "../../constants/url";
 
 
 
import { useNavigate } from "react-router-dom";

export const PostCard = (props) => {
  const { post } = props;
  const navigate = useNavigate();
  const showPost = (postId)=>{
    context.setUrlPost(postId)
    context.setModal(true)
    context.setActionModal("post")
}
  const context = useContext(GlobalContext);
  const { fetchPosts } = context;

  const like = async () => {
    try {
      const body = {
        like: true,
      };

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  const dislike = async () => {
    try {
      const body = {
        like: false,
      };

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <article>
    <p className="subText">Enviado por: {props.post.creator.username}</p>
    <p>{props.post.content}</p>
    <p className="menuPost">
        <span className="subTextBold">
            <img src={like} onClick={()=>like(props.post.id)} alt="botão-like"/>
            {props.post.likes}
            <img src={dislike} onClick={()=>dislike(props.post.id)} alt="botão-dislike"/> 
        </span> 
        <span className="subText" onClick={()=>showPost(props.post.id)}>
            <img src={""} alt="botão-comentários" />
            {props.post.comments}
        </span>
    </p>
</article>
  );
};
