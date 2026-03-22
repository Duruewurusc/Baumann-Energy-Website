import { blogPosts } from "../components/BlogData";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogHero from "../assets/install.jpg";

export default function BlogList() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white">
      
      <main className="grow ">
        {/* Hero Section with Image and Dark Overlay */}
        <div className="relative h-100 md:h-125 mb-12">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${blogHero})`,
              filter: 'brightness(70%)'
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Hero Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Our Blog
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
                Discover insights, tutorials, and stories from our team
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid Section */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200">
            <button className="px-4 py-2 rounded-full bg-[#16a34a] text-white font-medium hover:bg-green-700 transition-colors">
              All
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Tutorials
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              News
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Case Studies
            </button>
          </div>

          {/* Blog Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-[#16a34a]">{blogPosts.length}</span> articles
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-[#16a34a] text-[#16a34a] font-semibold rounded-lg hover:bg-[#16a34a] hover:text-white transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </main>

      <Footer /></div>
    </div>
  );
}