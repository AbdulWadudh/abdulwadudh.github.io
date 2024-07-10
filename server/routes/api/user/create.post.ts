export default defineEventHandler(async (event) => {
  const user = createSingleUser();

  await useStorage("users").setItem(user.username, JSON.stringify(user));

  return {
    success: true,
    message: "User created successfully",
    data: user,
  };
});
