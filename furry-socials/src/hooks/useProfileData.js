import { useEffect, useState } from "react";

export function useProfileData(jsonPath = "../public/profile.json") {
  //component state where data holds the JSON object and error boolean for missing or failing data so the app does not crash
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //checks for valid JSON response
    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error("failed to load JSON");
        return res.json();
      })
      //if successful, update state with JSON data and complete loading
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      //if the whole JSON is missing
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [jsonPath]);

  return { data, loading, error };
}
