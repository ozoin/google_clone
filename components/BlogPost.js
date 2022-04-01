import React from "react";
function BlogPost({ title, description, author, content, date, img }) {
  return (
    <section class="m-2 font-sans leading-normal flex">
      <div class="max-w-lg flex flex-col align-center self-center items-center shadow-lg rounded overflow-hidden m-4 sm:flex">
        <div className="w-max w-full justify-items-center items-center flex">
          <img
          src={img}
          className="blog_img"
          
          />
        </div>

        <div class="px-6 py-4">
          <h2 class="mb-2 font-black">{title}</h2>
          <p class="mb-4 text-grey-dark text-sm">{description}</p>
          <p>
            {date} , {author}
          </p>
          <button class="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
            Hey, click me.
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
