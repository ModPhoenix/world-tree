import * as server from "./server";
import * as neo4j from "./neo4j";
import { createRootNode } from "./seeder";

async function main() {
  await neo4j.connect();

  await createRootNode();

  await server.start();
}

main();
