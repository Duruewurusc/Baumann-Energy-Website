import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Category Badge */}
        {/* <span className="absolute top-3 left-3 bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {post.category || "Article"}
        </span> */}
      </div>
      <div className="p-5">
        {/* Author & Date Row */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{post.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date || "Recent"}</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#16a34a] transition-colors duration-300">
          {post.title}
        </h2>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="text-xs bg-green-50 text-[#16a34a] font-medium px-2.5 py-1 rounded-full border border-green-100 hover:bg-green-100 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-400 font-medium px-2.5 py-1">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        {/* Read More Link */}
        <Link 
          to={`/blog/${post.slug}`} 
          className="inline-flex items-center gap-2 text-[#16a34a] font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span>Read More</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover/link:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}