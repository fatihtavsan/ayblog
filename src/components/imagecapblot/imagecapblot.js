import { Quill } from "react-quill-new";

const BlockEmbed = Quill.import("blots/block/embed");

class ImageCapBlot extends BlockEmbed {
  static blotName = "imageFigure";
  static tagName = "figure";
  static className = "ql-image-figure";

  static create(value) {
    const node = super.create();
    if (!value || !value.url) {
      throw new Error("ImageCapBlot: 'url' is required.");
    }

    const img = document.createElement("img");
    img.setAttribute("src", value.url);
    if (value.alt) img.setAttribute("alt", value.alt);
    if (value.title) img.setAttribute("title", value.title);
    img.setAttribute("style", "max-width: 100%; display: block;");

    const caption = document.createElement("figcaption");
    caption.innerText = value.caption || "";

    node.appendChild(img);
    node.appendChild(caption);

    return node;
  }

  static value(node) {
    const img = node.querySelector("img");
    const caption = node.querySelector("figcaption");
    return {
      url: img?.getAttribute("src") || "",
      alt: img?.getAttribute("alt") || "",
      title: img?.getAttribute("title") || "",
      caption: caption?.innerText || "",
    };
  }
}

export default ImageCapBlot;
