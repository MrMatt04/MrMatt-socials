//css import
import "./App.css";
//hook import
import { useProfileData } from "./hooks/useProfileData";

//component imports
import Profile from "./components/profile/profile";

function App() {
  const { data, loading, error } = useProfileData(
    `${process.env.PUBLIC_URL}/profile.json`
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading profile data</div>;

  return <Profile profile={data.profileData} />;
}

export default App;
