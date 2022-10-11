import prisma from "/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Task } from ".prisma/client";

type AllTasks = {
  tasks: Array<Task>;
};

export async function getTask(req, res) {
  try {
    const sites = await prisma.task.findMany({
      where: {
        completed: false,
      },
    });
    return res.status(200).json(sites);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function createTask(req, res) {
  const { task } = req.body;
  try {
    const response = await prisma.task.create({
      data: {
        task: task,
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

export async function updateTask(req, res) {
  const { id, completed } = req.body;
  try {
    const response = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        completed: completed,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function deleteTask(req, res) {
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
