import { useStorage } from "#imports";

export default defineEventHandler(async () => await useStorage("assets:server").getItem(`index.html`));
