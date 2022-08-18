import { getServer } from "./gql";

export async function start(): Promise<void> {
  const server = await getServer();

  await server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
