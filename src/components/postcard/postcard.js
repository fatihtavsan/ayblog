import React from "react";
import { Link } from "react-router-dom";
import "./postcard.css";
import DOMPurify from "dompurify";

function getPlainText(html, maxLength = 300) {

  const cleanHtml = DOMPurify.sanitize(html);
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = cleanHtml;

  tempDiv.querySelectorAll("img, video, iframe, blockquote, figure").forEach((el) => el.remove());

  let text = tempDiv.textContent || tempDiv.innerText || "";

  if (text.length > maxLength) {
    text = text.slice(0, maxLength) + "...";
  }
  return text;
}

function PostCard({ id, title, content, date }) {
  const previewText = getPlainText(content, 100);

  return (
    <Link to={`/post/${id}`} className="text-decoration-none postcard-link">
      <div className="d-flex flex-column justify-content-between content mb-4">
        <h3>{title}</h3>
        <p className="post-preview-text">{previewText}</p>
        <small className="text-muted">
          {new Date(date).toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </small>
      </div>
    </Link>
  );
}

export default PostCard;
