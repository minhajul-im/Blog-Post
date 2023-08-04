import { useEffect, useState } from "react";

const useFetchApi = (url, callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
};

export default useFetchApi;
