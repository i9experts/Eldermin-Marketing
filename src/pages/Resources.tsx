import { motion } from 'framer-motion'

const posts = [
  { title: '10 Ways Eldermin Reduces Administrative Burden in Schools', date: 'June 15, 2025', category: 'Guide', readTime: '5 min', emoji: '📋' },
  { title: 'How to Successfully Implement a School Management System', date: 'June 8, 2025', category: 'Tutorial', readTime: '8 min', emoji: '🚀' },
  { title: 'The Future of Education Technology in Africa', date: 'May 30, 2025', category: 'Insight', readTime: '6 min', emoji: '🌍' },
  { title: 'Parent Engagement: Building Stronger School Communities', date: 'May 22, 2025', category: 'Guide', readTime: '4 min', emoji: '👨‍👩‍👧' },
  { title: 'Data Security Best Practices for Schools', date: 'May 15, 2025', category: 'Security', readTime: '7 min', emoji: '🔐' },
  { title: 'Maximizing Your Eldermin ROI: A Step-by-Step Guide', date: 'May 5, 2025', category: 'Guide', readTime: '10 min', emoji: '💡' },
]

export default function Resources() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-navy-deep mb-4">Resources & Insights</h1>
          <p className="text-gray-500 text-xl">Guides, tutorials, and best practices for school administrators</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article key={post.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden cursor-pointer group">
              <div className="bg-blue-pale h-40 flex items-center justify-center group-hover:bg-blue/10 transition-colors">
                <span className="text-6xl">{post.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-amber/10 text-amber-dark px-2 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime} read</span>
                </div>
                <h3 className="font-bold text-navy-deep group-hover:text-amber transition-colors leading-snug mb-2">{post.title}</h3>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}