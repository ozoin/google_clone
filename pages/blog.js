import React from "react";
import { useRouter } from "next/router";
import Header from "../components/BlogHeader";
import BlogPage from "../components/BlogPage";
import BlogPost from "../components/BlogPost";

export async function getStaticProps(context) {
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=Apple&from=2021-05-07&sortBy=popularity&apiKey=${process.env.React_App_NEWS_KEY}`
  )
    .then((response) => response.json())
    .catch((err) => alert(err));
  return {
    props: {
      posts: data.articles,
    },
  };
}

function Blog({ posts }) {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="flex w-full flex-row justify-center flex-wrap ">
        {posts.map((post) => (
          <BlogPost
            title={post.title}
            description={post.description}
            author={post.author}
            content={post.content}
            date={post.publishedAt}
            img={post.urlToImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
