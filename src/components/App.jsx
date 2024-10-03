//import components
import Profile from "./Profile/Profile";
import userData from "../userData.json";

import FriendList from "./FriendList/FriendList";
import friendsData from "../friendsData.json";

function App() {
	return (
		<>
			<Profile
				name={userData.name}
				tag={userData.tag}
				location={userData.location}
				image={userData.image}
				stats={userData.stats}
			/>
			<FriendList friends={friendsData} />
		</>
	);
}

export default App;
