import { ogm } from "./gql";
import { connect  } from "./neo4j";

const Knowledge = ogm.model("Knowledge");

export async function createRootNode() {
  await connect();
  await ogm.init();

  const [root] = await Knowledge.find({
    where: { name: "root" },
  });

  if (!root) {
    await Knowledge.create({
      input: [
        {
          name: "root",
          content: "Root of the Tree",
        },
      ],
    });
  }
}
