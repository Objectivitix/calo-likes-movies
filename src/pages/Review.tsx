import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { reviewMetadata } from "../data/reviews";

export default function Review() {
  const { slug } = useParams();
  const reviewMeta = reviewMetadata.find(r => r.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../data/content/${slug}.md?raw`)
      .then(mod => setContent(mod.default))
      .catch(() => setContent("# Not found"));
  }, [slug]);

  if (!reviewMeta) return <p>Not found</p>;

  return (
    <article style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <h1>{reviewMeta.title}</h1>

      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 style={{ fontSize: "2rem" }} {...props} />,
          h2: ({node, ...props}) => <h2 style={{ marginTop: "1.5rem" }} {...props} />,
          p: ({node, ...props}) => <p style={{ lineHeight: "1.6" }} {...props} />,
          li: ({node, ...props}) => <li style={{ marginLeft: "1rem" }} {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
