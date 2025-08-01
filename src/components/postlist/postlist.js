import React from "react";
import PostCard from "../postcard/postcard";

function PostList({ currentPosts }) {
  return (
    <div className="container">
      <div className="row">
        {currentPosts.length === 0 && <p>Yazı bulunamadı.</p>}
        {currentPosts.map((post) => (
          <React.Fragment key={post.id}>
            <div className="col-12 col-md-6">
              <PostCard
                id={post.id}
                title={post.title}
                content={post.content}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default PostList;
