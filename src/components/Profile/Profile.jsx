import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={style.content}>
        <div className={style.backgroundImg}>
          <img src="https://static3.coolconnections.ru/images/11176/standard/hd/4023cda6252e6e6846e98133da9aaaa25cbc05c0.jpg?1561021808" alt="background" />
        </div>
        <div className={style.avaDesc}>
          <div className={style.ava}>
            <img src='https://stickerpacks.ru/wp-content/uploads/2023/01/nabor-stikerov-s-tajlerom-derdenom-2-dlja-telegram-1.webp' alt="ava" />
          </div>
          <div className={style.description}>
            <div className={style.name}>Тайлер Дёрден</div>
            <div className={style.status}>"Если у тебя перо в заднице, это еще не значит, что ты павлин."</div>
          </div>
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;