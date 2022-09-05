import { ogm } from "./gql";
import { connect  } from "./neo4j";

const Knowledge = ogm.model("Knowledge");
const ROOT_NODE_NAME = 'Root';

export async function createRootNode() {
  await connect();
  await ogm.init();

  const [root] = await Knowledge.find({
    where: { name: ROOT_NODE_NAME },
  });

  if (!root) {
    await Knowledge.create({
      input: [
        {
          name: ROOT_NODE_NAME,
          content: "World Tree root",
        },
      ],
    });
  }
}
