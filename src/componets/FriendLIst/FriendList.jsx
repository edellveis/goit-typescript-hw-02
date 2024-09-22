import FriendListItem from "../FriendListItem/FriendListItem";
import style from './FriendList.module.css'
export default function FriendList({ friendList }) {
  return (
    <ul className={style.list}>
      {friendList.map(friend => (
        <li className={style.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar} // 
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}