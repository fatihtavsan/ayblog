import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ListGroup, Dropdown, Badge, ListGroupItem } from "react-bootstrap";
import PostCard from "../postcard/postcard";
import "./tagsidebar.css";

function TagSidebar() {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { tagName } = useParams();
  const decodedTagName = tagName ? decodeURIComponent(tagName) : null;
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postRes, tagsRes] = await Promise.all([
          fetch(`${API}/posts`),
          fetch(`${API}/tags`),
        ]);

        if (!postRes.ok) throw new Error("Yazılar alınamadı");
        if (!tagsRes.ok) throw new Error("Etiketler alınamadı");

        const postData = await postRes.json();
        const tagsData = await tagsRes.json();

        setPosts(postData);

        const postCounts = {};
        postData.forEach((post) => {
          post.tags?.forEach((tag) => {
            postCounts[tag.id] = (postCounts[tag.id] || 0) + 1;
          });
        });

        const tagsWithCount = tagsData.map((tag) => ({
          ...tag,
          postCount: postCounts[tag.id] || 0,
        }));

        setTags(tagsWithCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (decodedTagName) {
      setSelectedTag(decodedTagName);
    } else {
      setSelectedTag(null);
    }
  }, [decodedTagName]);

  const handleSelect = (tagName) => {
    setSelectedTag(tagName);
    navigate(`/taglist/${encodeURIComponent(tagName)}`);
  };

  const filteredPosts = selectedTag
    ? posts.filter((post) =>
        post.tags?.some(
          (tag) => tag.name.toLowerCase() === selectedTag.toLowerCase()
        )
      )
    : [];

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div className="text-danger">Hata: {error}</div>;

  return (
    <aside className="tag-sidebar">
      {/* Masaüstü görünüm */}
      <div className="d-none d-md-block mb-4 large-taglist">
        <div className="row">
          <div className="col-3">
            <ListGroup>
              {tags.map((tag) => (
                <ListGroup.Item
                  action
                  key={tag.id}
                  active={selectedTag === tag.name}
                  onClick={() => handleSelect(tag.name)}
                  className="custom-listgroup d-flex"
                >
                  {tag.name}
                  <Badge className="post-count ms-auto">{tag.postCount}</Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="col-9">
            {selectedTag && (
              <>
                <h5 className="mb-3">
                  "{decodedTagName}" etiketine sahip yazılar:
                </h5>
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
                {filteredPosts.length === 0 && (
                  <p className="text-muted">Bu etikete ait yazı bulunamadı.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobil görünüm */}
      <div className="d-block d-md-none mb-4 mobile-taglist">
        <Dropdown className="mb-4" onSelect={handleSelect}>
          <Dropdown.Toggle variant="outline-secondary" className="w-100">
            ETIKETLER
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {tags.map((tag) => (
              <Dropdown.Item key={tag.id} eventKey={tag.name}>
                {tag.name} ({tag.postCount})
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {selectedTag && (
          <>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <PostCard key={post.id} {...post} />)
            ) : (
              <p className="text-muted">Bu etikete ait yazı bulunamadı.</p>
            )}
          </>
        )}
      </div>
    </aside>
  );
}

export default TagSidebar;
