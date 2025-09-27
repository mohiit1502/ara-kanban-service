import { ITask } from '@src/models/task.model';
import orm from './MockOrm';

async function getTasksByBoardId(boardId: number): Promise<ITask[]> {
  const db = await orm.openDb();
  const tasks = Array.isArray(db.tasks) ? db.tasks : [];
  return tasks.filter((task: ITask) => task.boardId === boardId);
}

async function getTaskByBoardId(boardId: number, taskId: number):
	Promise<ITask | null> {
  const db = await orm.openDb();
  const tasks = Array.isArray(db.tasks) ? db.tasks : [];
  return tasks.find((task: ITask) => task.boardId === boardId && 
		task.id === taskId) || null;
}

async function createTask(boardId: number, task: ITask): Promise<ITask> {
  const db = await orm.openDb();
  if (!Array.isArray(db.tasks)) db.tasks = [];
  task.id = Date.now();
  task.boardId = boardId;
  task.createdAt = new Date().toISOString();
  task.updatedAt = task.createdAt;
  db.tasks.push(task);
  await orm.saveDb(db);
  return task;
}

async function updateTask(boardId: number, taskId: number, taskData:
	Partial<ITask>): Promise<ITask | null> {
  const db = await orm.openDb();
  const tasks = Array.isArray(db.tasks) ? db.tasks : [];
  const task = tasks.find((t: ITask) => t.boardId === boardId &&
		t.id === taskId);
  if (task) {
    Object.assign(task, taskData, { updatedAt: new Date().toISOString() });
    await orm.saveDb(db);
    return task;
  }
  return null;
}

async function deleteTask(boardId: number, taskId: number): Promise<boolean> {
  const db = await orm.openDb();
  const tasks = Array.isArray(db.tasks) ? db.tasks : [];
  const idx = tasks.findIndex((t: ITask) => t.boardId === boardId &&
		t.id === taskId);
  if (idx !== -1) {
    tasks.splice(idx, 1);
    await orm.saveDb(db);
    return true;
  }
  return false;
}

export default {
  getTasksByBoardId,
  getTaskByBoardId,
  createTask,
  updateTask,
  deleteTask,
};
