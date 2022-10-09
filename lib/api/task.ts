import prisma from "/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Task } from ".prisma/client";

type AllTasks = {
  tasks: Array<Task>;
};

export async function getTask(req, res) {
  try {
    const sites = await prisma.task.findMany();
    return res.status(200).json(sites);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}
