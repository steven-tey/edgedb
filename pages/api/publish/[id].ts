import type { NextApiRequest, NextApiResponse } from "next";
import { client, edge } from "../../../lib/client";

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id as string;
  const post = await edge
    .update(edge.Post, (post) => ({
      filter: edge.op(post.id, "=", edge.uuid(postId)),
      set: {
        published: edge.std.datetime_of_statement(),
      },
    }))
    .run(client);
  res.json(post);
}
