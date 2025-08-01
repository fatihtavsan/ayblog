import React, { useState, useEffect } from "react";
import "./postform.css";
import ReactQuill, { Quill } from "react-quill-new";
import ResizeModule from "@botom/quill-resize-module";
import TagInput from "../../taginput/taginput";
import "quill/dist/quill.snow.css";
import ImageCapBlot from "../../imagecapblot/imagecapblot";
import { useSearchParams, useNavigate } from "react-router-dom";

Quill.register("modules/imageResize", ResizeModule);
Quill.register(ImageCapBlot, true);
const API = process.env.REACT_APP_API_URL;

function convertYouTubeToEmbed(url) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname.includes("youtube.com") && parsedUrl.searchParams.has("v")) {
      const videoId = parsedUrl.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return null;
  } catch {
    return null;
  }
}

function imageHandler() {
  const url = prompt("görsel url:");
  if (!url) return;

  const alt = prompt("görsel içeriği:");
  const title = prompt("opsiyonel bilgi:");
  const caption = prompt("görsel açıklaması:");

  const range = this.quill.getSelection(true);
  this.quill.insertEmbed(range.index, "imageFigure", {
    url,
    alt,
    title,
    caption,
  });
  this.quill.setSelection(range.index + 1);
}

function videoHandler() {
  const url = prompt("video url:");
  if (!url) return;

  const embedUrl = convertYouTubeToEmbed(url);
  if (!embedUrl) {
    alert("Geçerli bir YouTube bağlantısı girin.");
    return;
  }

  const range = this.quill.getSelection(true);
  this.quill.insertEmbed(range.index, "video", embedUrl);
  this.quill.setSelection(range.index + 1);
}

/* ——————————  Quill config  —————————— */
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image", "link", "video"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
      video: videoHandler,
    },
  },
  history: {
    delay: 1000,
    maxStack: 50,
    userOnly: true,
  },
  imageResize: {},
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "image",
  "link",
  "blockquote",
  "background",
  "imageFigure",
  "video",
];

function PostForm({ onPostAdded }) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetch(`${API}/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
          const formattedTags = data.tags.map((tag) => ({
            value: tag.id,
            label: tag.name,
          }));
          setTags(formattedTags);
          setDate(data.date);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTags = tags.filter(
        (tag) => !tag.value || typeof tag.value !== "number"
      );

      const savedTags = [];

      for (const tag of newTags) {
        const res = await fetch(`${API}/tags`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: tag.label }),
        });
        const saved = await res.json();
        savedTags.push({ label: saved.name, value: saved.id });
      }

      const allTags = [
        ...tags.filter((tag) => tag.value && typeof tag.value === "number"),
        ...savedTags,
      ];

      const postData = {
        title,
        content,
        date,
        tags: allTags.map((tag) => ({ id: tag.value, name: tag.label })),
      };

      const res = await fetch(
        `${API}/posts${id ? "/" + id : ""}`,
        {
          method: id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      );

      if (!res.ok)
        throw new Error(id ? "Güncelleme başarısız" : "Kaydetme başarısız");

      if (!id) {
        setTags([]);
        setTitle("");
        setContent("");
      }

      if (onPostAdded) onPostAdded();
      alert(id ? "Yazı güncellendi!" : "Yazı kaydedildi!");
      navigate("/admin/posts");
    } catch (error) {
      alert("Hata: " + error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <div className="row mb-4">
          <div className="col-8">
            <input
              className="input-soft"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="metin ana başlığı"
            ></input>
          </div>
          <div className="col-4">
            <input
              className="input-soft"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            ></input>
          </div>
        </div>
        <ReactQuill
          className="mb-4"
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
        <TagInput value={tags} onChange={setTags} />
        <button type="submit" className="btn-soft mt-4 d-block">
          {id ? "Güncelle" : "Kaydet"}
        </button>
      </form>
    </>
  );
}

export default PostForm;
