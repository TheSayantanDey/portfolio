import "twin.macro";

import React, { type FC } from "react";

import type { Post } from "../../../../types/hashnode";
import PostItem from "../../../molecules/blog/PostItem";
import SectionHeader from "../../../molecules/SectionHeader";

interface Props {
  posts: Post[];
}

const HomeBlog: FC<Props & JSX.IntrinsicElements["section"]> = ({
  posts,
  ...props
}) => {
  return (
    <section tw="w-full" {...props}>
      <SectionHeader
        title="Blogs"
        href="https://sayantandey.hashnode.dev/?source=top_nav_blog_home"
      />

      <div tw="space-y-5">
        {posts.map((post, i) => {
          return (
            <PostItem
              id={`home-post-${post.id}`}
              key={`home-post-${i}`}
              post={post}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HomeBlog;
