import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import PostList from "../postlist/postlist";

function InfiniteScrollPostList() {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const postsPerPage = 4;
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchPosts(page);
  }, []);

  const fetchPosts = async (currentPage) => {
    try {
      const res = await axios.get(
        `${API}/posts?_sort=id&_order=asc&_page=${currentPage}&_limit=${postsPerPage}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setPosts((prevPosts) => {
        const prevPostIds = new Set(prevPosts.map((post) => post.id));
        const uniqueNewPosts = res.data.filter(
          (post) => !prevPostIds.has(post.id)
        );
        return [...prevPosts, ...uniqueNewPosts];
      });

      if (res.data.length < postsPerPage) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      console.log(
        `Sayfa ${currentPage} için ${res.data.length} post yüklendi.`
      );
    } catch (err) {
      console.error("Yazılar yüklenirken hata oluştu:", err);
      setHasMore(false);
      alert("Yazılar yüklenirken bir hata oluştu.");
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      fetchPosts(nextPage);
      return nextPage;
    });
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <PostList currentPosts={posts} />
    </InfiniteScroll>
  );
}

export default InfiniteScrollPostList;
