import * as neo4j from "neo4j-driver";
import { NEO_PASSWORD, NEO_URL, NEO_USER } from "./settings";

export const driver = neo4j.driver(
  NEO_URL,
  neo4j.auth.basic(NEO_USER, NEO_PASSWORD)
);

export async function connect() {
  await driver.verifyConnectivity();
}

export function disconnect() {
  return driver.close();
}
