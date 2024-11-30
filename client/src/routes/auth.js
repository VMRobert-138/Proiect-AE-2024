const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const result = await fetch(`${API_URL}/auth/login`, options);
  const response = await result.json();
  return response;
};