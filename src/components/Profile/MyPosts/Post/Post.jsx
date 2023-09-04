import style from "./Post.module.css";

const Post = (props) => {
    return (
      <div className={style.item}>
        <div>{props.message}</div>
        <div className={style.like}>like: {props.like}</div>
      </div>
    );
}

export default Post;