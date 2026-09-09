import { useProfileData } from "../../../../hooks/Profile-data";

export default function Profile() {
  const { data, loading, error } = useProfileData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile data</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
