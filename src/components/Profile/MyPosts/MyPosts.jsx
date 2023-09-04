import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.myPost}>
          my posts
          <div className={style.inputPost}>
            <textarea></textarea>
            <button>Add Post</button>
          </div>
          <div className={style.posts}>
            <Post message='—Знаете, для чего в самолётах нужны кислородные маски?' like='4'/>
            <Post message='— А чем вы занимаетесь? ' like='10' />
            <Post message='— Мыло!' like='0' />
            <Post message='— Что?' like='1' />
            <Post message='—Я произвожу мыло. Ведь мыло — критерий цивилизованности. ' like='2' />
          </div>
        </div>
    );
}

export default MyPosts;