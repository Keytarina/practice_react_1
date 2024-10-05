import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
	avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
	name,
	isOnline,
}) {
	return (
		<li className={css.item}>
			<img className={css.avatar} src={avatar} alt="Avatar" width="48" />
			<p className={css.name}>{name}</p>
			<div className={isOnline ? css.iconOnline : css.iconOffline}>
				{isOnline ? "Online" : "Offline"}
			</div>
		</li>
	);
}

FriendListItem.propTypes = {
	avatar: PropTypes.string, // не обов'язковий, бо є значення за замовчуванням
	name: PropTypes.string.isRequired, // обов'язкове поле
	isOnline: PropTypes.bool.isRequired, // обов'язкове поле, очікується булеве значення
};
