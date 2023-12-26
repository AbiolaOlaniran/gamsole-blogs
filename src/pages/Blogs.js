import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/blog").then((response) => {
      if (mounted) {
        setPosts(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Gamsole - Blogs</title>
        <meta
          name="description"
          content="Gamsole Blogs Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div>COMING SOON</div>
      </Suspense>
    </Layout>
  );
}

export default Blogs;
