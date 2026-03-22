import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogContent({ post }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white">
      <main className="grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Image */}
          <div className="relative mb-8 rounded mt-20 overflow-hidden shadow-xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105" 
            />
            {/* Optional: Image Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Article Header */}
          <div className="text-center mb-8">
            {/* Category Badge */}
            {post.category && (
              <div className="mb-4">
                <span className="inline-block bg-[#16a34a]/10 text-[#16a34a] text-sm font-semibold px-4 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Author & Metadata */}
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-2">
                {/* Author Avatar Placeholder */}
                <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#16a34a] to-green-600 flex items-center justify-center text-white text-sm font-semibold">
                  {post.author?.charAt(0) || "A"}
                </div>
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date || "Recent"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime || "5 min read"}</span>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-8 pb-4 border-b border-gray-200">
              {post.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-sm bg-green-50 text-[#16a34a] font-medium px-3 py-1.5 rounded-full border border-green-100 hover:bg-green-100 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-green max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 first-letter:text-4xl first-letter:font-bold first-letter:text-[#16a34a] first-letter:mr-2 first-letter:float-left">
              {post.content}
            </p>
          </div>

          {/* Author Bio Section */}
          {post.authorBio && (
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#16a34a] to-green-600 flex items-center justify-center text-white text-lg font-bold shrink-0">
                  {post.author?.charAt(0) || "A"}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">About {post.author}</h3>
                  <p className="text-gray-600 text-sm">
                    {post.authorBio || "Passionate writer sharing insights and stories to inspire and educate readers."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">Enjoyed this article? Share it with others:</p>
              <div className="flex gap-3">
                <button className="p-2 bg-gray-100 hover:bg-[#16a34a] hover:text-white rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </button>
                <button className="p-2 bg-gray-100 hover:bg-[#16a34a] hover:text-white rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.78-.2-7.14-2-9.4-4.76-.4.7-.6 1.5-.6 2.3 0 1.58.8 2.97 2.02 3.78-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.18-1.37.27-2.1.27-.5 0-1-.05-1.48-.14 1 3.1 3.9 5.36 7.35 5.42-2.7 2.1-6.1 3.36-9.8 3.36-.63 0-1.26-.04-1.88-.1 3.5 2.24 7.65 3.55 12.1 3.55 14.5 0 22.4-12 22.4-22.4 0-.34-.02-.68-.05-1.02.77-.56 1.44-1.25 1.97-2.04z" />
                  </svg>
                </button>
                <button className="p-2 bg-gray-100 hover:bg-[#16a34a] hover:text-white rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer /></div>
    </div>
  );
}