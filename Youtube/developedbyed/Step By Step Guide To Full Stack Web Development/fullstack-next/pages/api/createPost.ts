import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/client';

type PostsProps = {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const post: PostsProps = JSON.parse(req.body);

    if (req.method === 'POST') {
      if (!post.title.length) {
        return res.status(500).json({ message: "Plase don't leave the title empty." });
      }

      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
            authorId: post.authorId || 1,
          },
        });

        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: 'Error creating a new Post.' });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
