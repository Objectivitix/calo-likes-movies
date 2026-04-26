import './Review.css';
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Rating from "../../components/Rating/Rating";
import { reviewMetadata } from "../../data/reviews";

export default function Review() {
  const { slug } = useParams();
  const reviewMeta = reviewMetadata.find(r => r.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../../data/content/${slug}.md?raw`)
      .then(mod => setContent(mod.default))
      .catch(() => setContent("# Not found"));
  }, [slug]);

  if (!reviewMeta) return <p>Not found</p>;

  return (
    <article>
      <Link to="/" className="article__back-link">← Back to reviews</Link>

      <h1>{reviewMeta.title}</h1>
      <Rating rating={reviewMeta.rating} />

      <ReactMarkdown
        components={{
          h2: ({node, ...props}) => <h2 {...props} />,
          h3: ({node, ...props}) => <h3 {...props} />,
          p: ({node, ...props}) => <p {...props} />,
          li: ({node, ...props}) => <li {...props} />,
          ul: ({node, ...props}) => <ul {...props} />,
          ol: ({node, ...props}) => <ol {...props} />,
          blockquote: ({node, ...props}) => <blockquote {...props} />,
          code: ({node, ...props}) => <code {...props} />,
          pre: ({node, ...props}) => <pre {...props} />,
          img: ({node, ...props}) => {
            const src = typeof props.src === 'string' && !props.src.startsWith('/')
              ? `/review-assets/${slug}/${props.src}`
              : props.src;
            return <img {...props} src={src} className="article__image" />;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
