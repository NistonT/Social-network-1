import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
          my posts
          <div>
            <textarea></textarea>
            <button>Add Post</button>
          </div>
          <div className={style.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
    );
}

export default MyPosts;