// src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Dev Blog" description="Gatsbyを使って作ったブログです" />
      <Hero />
        <PostLink />
	      <PostLink />
	      <PostLink />
    </Layout>
  )
}