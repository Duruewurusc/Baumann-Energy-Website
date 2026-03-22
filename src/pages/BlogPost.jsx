import { useParams } from "react-router-dom";
import { blogPosts } from "../components/BlogData";
import BlogContent from "../components/BlogContent";
import SEO from "../components/SEO";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="p-6">Post not found</div>;

  return (
    <div className="p-6">
      <SEO seo={post.seo} />
      <BlogContent post={post} />
    </div>
  );
}
