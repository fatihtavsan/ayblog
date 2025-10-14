import { useParams, useNavigate } from "react-router-dom";
import "./postpage.css";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";

function PostPage() {
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/posts/${id}`);
        if (!res.ok) throw new Error("Yazı bulunamadı");

        const postData = await res.json();
        setPost(postData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="container">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="container text-danger">Hata: {error}</div>;
  }

  if (!post) {
    return <div className="container">Yazı bulunamadı..</div>;
  }

  const handleTagClick = (tagName) => {
    navigate(`/taglist/${tagName}`);
  };

  return (
    <main>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 mx-auto">
              <header className="text-center">
                <h1>{post.title}</h1>
                <small className="mb-4 d-block">
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </small>
              </header>
              <div
                className="post-content ql-editor ql-snow"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content, {
                    ADD_TAGS: ["iframe"],
                    ADD_ATTR: [
                      "allow",
                      "allowfullscreen",
                      "frameborder",
                      "scrolling",
                      "src",
                      "height",
                      "width",
                    ],
                  }),
                }}
              ></div>
              {post.tags?.length > 0 && (
                <footer className="mb-4 text-center">
                  <hr className="footer-line" />
                  <div>
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag.id}
                        className="me-2 tagbadge"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTagClick(tag.name)}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </footer>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default PostPage;
