import * as server from "./server";
import * as neo4j from "./neo4j";

async function main() {
  await neo4j.connect();

  await server.start();
}

main();
