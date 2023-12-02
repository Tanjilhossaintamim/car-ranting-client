const fetchCurrentUser = async (token) => {
  try {
    const res = await fetch("https://dreamrent-server.vercel.app/auth/users/me", {
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
