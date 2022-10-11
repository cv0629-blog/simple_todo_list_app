import { getTask, createTask, deleteTask, updateTask } from "/lib/api/task";

import { HttpMethod } from "/types/http";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function task(req, res) {
  switch (req.method) {
    case HttpMethod.GET:
      return getTask(req, res);
    case HttpMethod.POST:
      return createTask(req, res);
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
