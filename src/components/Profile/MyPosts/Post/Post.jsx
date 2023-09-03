import style from "./Post.module.css";

const Post = () => {
    return (
      <div className={style.item}>
        — А чем вы занимаетесь? <br />
        — Мыло! <br />
        — Что?  <br />
        — Я произвожу мыло. Ведь мыло — критерий цивилизованности.
      </div>
    );
}

export default Post;