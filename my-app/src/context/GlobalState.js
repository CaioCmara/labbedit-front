import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

export const GlobalState = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("Labeddit Token");

    if (token) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(BASE_URL + "/posts", {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      setPosts(response.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(BASE_URL + "/comments", {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return {
    posts,
    setPosts,
    fetchPosts,
    comments,
    setComments,
    fetchComments,
  };
};
