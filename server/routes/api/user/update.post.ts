// routes/users.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user: User = await useStorage("users").getItem(body.username);

  if (!user) {
    return createError({
      status: 404,
      message: "User not found",
      data: body,
    }).cause;
  }

  await useStorage("users").setItem(user.username, JSON.stringify({ ...user, ...body.update }));

  // Do something with body like saving it to a database

  return { updated: true, data: user };
});
