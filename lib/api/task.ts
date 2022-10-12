import prisma from "/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Session } from "next-auth";
import type { Task } from ".prisma/client";

export async function getTask(
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) {
  const userId = session?.user?.id;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        completed: false,
        userId: userId,
      },
    });
    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function createTask(
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) {
  const { task } = req.body;
  const userId = session?.user?.id;
  try {
    const response = await prisma.task.create({
      data: {
        task: task,
        userId: userId,
      },
    });
    return res.status(201).json({
      task: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function updateTask(req: NextApiRequest, res: NextApiResponse) {
  const { id, completed, task } = req.body;

  try {
    const response = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        completed: completed,
        task: task,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function deleteTask(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  try {
    await prisma.task.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}
