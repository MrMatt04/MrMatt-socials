//css import
import "./App.css";
//hook import
import { useProfileData } from "./hooks/useProfileData";

//component imports
import Profile from "./components/profile/profile";
import Nav from "./components/socialNav/nav";
import Bio from "./components/bio/bio";
import Gallery from "./components/gallery/gallery";

function App() {
  const { data, loading, error } = useProfileData(
    `${process.env.PUBLIC_URL}/profile.json`,
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading profile data</div>;

  return (
    <main className="app-container">
      <Profile profile={data.profileData} />
      <Nav link={data.links} />
      <Bio bio={data.Bio} />
      <Gallery gallery={data.Gallery} />
    </main>
  );
}

export default App;
