import style from './Profile.module.css'
export default function Profile({name,tag,location,image,stats}) {
  return (
    <div className={style.profile}>
  <div className={style.abautme}>
    <img 
      className={style.me}
      src={image}
      alt="User avatar"
    />
    <p className={style.name}>{name}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>
  <ul className={style.stats}>
    <li className={style.item}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={style.item}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={style.item}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

