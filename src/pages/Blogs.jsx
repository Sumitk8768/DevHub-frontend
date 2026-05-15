import React, { useContext, useState } from 'react'
import { Blog } from '../context/BlogContext'

import BlogHero from '../components/blogs/BlogHero'
import BlogSearch from '../components/blogs/BlogSearch'
import BlogGrid from '../components/blogs/BlogGrid'

const Blogs = () => {
  const { blogs, loading } = useContext(Blog)

  const [search, setSearch] = useState("")

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-(--text-primary)">
        Loading Blogs...
      </div>
    )
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <BlogHero />

      {/* SEARCH */}
      <BlogSearch
        search={search}
        setSearch={setSearch}
      />

      {/* GRID */}
      <BlogGrid blogs={filteredBlogs} />
    </main>
  )
}

export default Blogs