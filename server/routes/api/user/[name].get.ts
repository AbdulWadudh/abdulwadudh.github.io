// routes/users/[name].get.ts
export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  const user = await useStorage("users").getItem(name);
  console.log("🚀 ~ defineEventHandler ~ users:", user);

  return {
    success: true,
    message: "User List",
    data: user,
  };
});
