export default defineEventHandler(async (event) => {
  const usernames = await useStorage("users").getKeys();

  const users: User[] = [];

  for (const username of usernames) {
    const user: User = await useStorage("users").getItem(username);
    users.push(user);
  }

  return {
    success: true,
    message: "User List",
    data: users,
    count: users.length,
    userNames: usernames,
  };
});
