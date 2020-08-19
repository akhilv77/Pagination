import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./Posts";
import Pagination from "./Pagination"

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


  //get current Posts

  const indexOfLastPost= currentPage * postsPerPage;
  const indexOfFirstPost= indexOfLastPost - postsPerPage; 
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)


  const paginate=(pageNumber)=>{
   setCurrentPage(pageNumber)
  }


  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Pagination Example</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate}/>
    </>
  );
};
export default App;
