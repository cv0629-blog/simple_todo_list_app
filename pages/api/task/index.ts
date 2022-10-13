import { getTask, createTask, deleteTask, updateTask } from "/lib/api/task";
import { unstable_getServerSession as getServerSession }  from "next-auth/next";
import { authOptions } from "/pages/api/auth/[...nextauth]";

import { HttpMethod } from "/types/http";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function task(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).end();

  switch (req.method) {
    case HttpMethod.GET:
      return getTask(req, res, session);
    case HttpMethod.POST:
      return createTask(req, res, session);
    case HttpMethod.DELETE:
      return deleteTask(req, res);
    case HttpMethod.PUT:
      return updateTask(req, res);
    default:
      res.setHeader("Allow", [
        HttpMethod.GET,
        HttpMethod.POST,
        HttpMethod.DELETE,
        HttpMethod.PUT,
      ]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
