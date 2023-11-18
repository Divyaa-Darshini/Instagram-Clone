import React, { useState } from "react";
import Post from "./post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Nika_",
      postImage:
        "https://i.insider.com/5fbe98c550e71a0011557672?width=1300&format=jpeg&auto=webp",
      likes: "1,50,000",
      timestamp: "2h",
    },
    {
      user: "Lee",
      postImage:
        "https://i.insider.com/5fbe9889037cbd0018612548?width=1300&format=jpeg&auto=webp",
      likes: 432,
      timestamp: "5h",
    },
    {
      user: "Victor",
      postImage:
        "https://i.insider.com/5fbe987d50e71a001155766b?width=1300&format=jpeg&auto=webp",
      likes: 140,
      timestamp: "10h",
    },
    {
      user: "Joe_shelly",
      postImage:
        "https://i.insider.com/5fbe9881037cbd0018612540?width=1300&format=jpeg&auto=webp",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;