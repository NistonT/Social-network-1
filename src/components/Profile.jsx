import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.content}>
        <div>
          <img src="https://pm1.aminoapps.com/7054/a2e53fb0507027f5894d1f9004c8ecbb2c887847r1-1500-844v2_hq.jpg" alt="background" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div className={style.posts}>
            <div className={style.item}>
              post1
            </div>
            <div className={style.item}>
              post2
            </div>
          </div>
        </div>
      </div>
      // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFHFJarkXhzp-5D0c_vUFvSegpXsJEZikv9LdZdxdof1GXUt9rF3UgLnQ7Yvj87rT70k&usqp=CAU
    );
}

export default Profile;