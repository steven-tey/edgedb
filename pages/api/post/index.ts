import type { NextApiRequest, NextApiResponse } from "next";
import { client, edge } from "../../../lib/client";

// POST /api/post
// body {title: string; content: string; authorName: string}
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content, authorName } = req.body;

  const newPost = await edge.insert(edge.Post, {
    title,
    content,
    authorName: authorName,
  });

  const result = edge
    .select(newPost, () => ({
      title: true,
      content: true,
      authorName: true,
    }))
    .run(client);
  res.json(result);
}
