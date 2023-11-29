const fetchCurrentUser = async (token) => {
  try {
    const res = await fetch("http://localhost:3000/auth/users/me", {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
export default fetchCurrentUser;
