//css import
import "./App.css";
//hook import
import { useProfileData } from "./hooks/useProfileData";

//component imports
import Profile from "./components/profile/profile";
import Nav from "./components/socialNav/nav";

function App() {
  const { data, loading, error } = useProfileData(
    `${process.env.PUBLIC_URL}/profile.json`
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading profile data</div>;

  return (
    <main className="app-container">
      <Profile profile={data.profileData} />
      <Nav link={data.links} />
    </main>
  );
}

export default App;
