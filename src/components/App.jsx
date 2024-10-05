//import components
import Profile from "./Profile/Profile";
import userData from "../userData.json";

import FriendList from "./FriendList/FriendList";
import friendsData from "../friendsData.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";

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
			<TransactionHistory items={transactions} />
		</>
	);
}

export default App;
