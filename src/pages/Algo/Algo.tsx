import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";

const Algo = () => {
  const { id } = useParams();
  const fileName = `${id}.md`;
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`./../../markdown/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Markdown>{post}</Markdown>
    </div>
  );
};

export default Algo;
