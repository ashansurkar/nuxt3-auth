import auth from "/authfile";
export default defineNuxtRouteMiddleware(async (to, from) => {
  let isAuthenticated = await auth.isAuthenticated();
  if (to.path === "/" && !to?.query?.code) {
    return;
  }
  if (!isAuthenticated) {
    const query = to?.query;
    if (query && query.code && query.state) {
      await auth.handleRedirectCallback();
    } else {
      await auth.loginWithRedirect();
    }
  } else {
    console.log("logged in ", to.path);
  }
  const router = useRouter();
  if (to.path === "/") {
    to.fullPath = "/";
  }
  navigateTo(to.path);
});
