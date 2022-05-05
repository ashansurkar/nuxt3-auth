import createAuth0Client from "@auth0/auth0-spa-js";

let auth = await createAuth0Client({
  domain: "dev-......com",
  client_id: "Z0...................0T6I",
  redirect_uri: "http://localhost:3000",
});

export default auth;
