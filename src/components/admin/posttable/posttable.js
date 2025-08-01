import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Badge, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./posttable.css";

function PostTable() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API}/posts`);
        const postsData = await res.json();

        setPosts(postsData);
      } catch (err) {
        console.error("Yükleme hatası:", err);
      }
    };

    fetchPost();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Bu postu silmek istediğinize emin misiniz?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`${API}/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Silme hatası:", err);
    }
  };

  return (
    <Container>
      <Table striped bordered hover responsive className="mt-4 post-table">
        <thead>
          <tr>
            <th>Başlık</th>
            <th>Yayın Tarihi</th>
            <th>Etiketler</th>
            <th>
              İşlemler
              <i
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/admin/post/form`)}
                className="bi bi-plus-square-fill float-end"
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr
              key={post.id}
              className={index % 2 === 0 ? "row-even" : "row-odd"}
            >
              <td>{post.title}</td>
              <td>{new Date(post.date).toLocaleDateString()}</td>
              <td>
                {post.tags && post.tags.length > 0 ? (
                  <div>
                    {post.tags.map((tag) => {
                      return (
                        <Badge key={tag.id} className="me-2 tag-name">
                          {tag ? tag.name : "Bilinmeyen"}
                        </Badge>
                      );
                    })}
                  </div>
                ) : (
                  "—"
                )}
              </td>
              <td>
                <Button
                  className="crud-btn"
                  onClick={() => navigate(`/admin/post/form?id=${post.id}`)}
                >
                  Düzenle
                </Button>
                <Button
                  className="crud-btn ms-2"
                  onClick={() => handleDelete(post.id)}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PostTable;
