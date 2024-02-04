import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: "a81791aa-187a-466f-80ab-ee532c731ce5",
  environment: "gcp-starter",
});
const index = await pc.createIndex({
  name: "test",
  dimension: 8,
});

await index.namespace("ns1").upsert([
  {
    id: "vec1",
    values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    metadata: { genre: "drama" },
  },
  {
    id: "vec2",
    values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
    metadata: { genre: "action" },
  },
  {
    id: "vec3",
    values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
    metadata: { genre: "drama" },
  },
  {
    id: "vec4",
    values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
    metadata: { genre: "action" },
  },
]);
