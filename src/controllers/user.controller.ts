import { Request, Response } from 'express';
import UserRepo from '@src/repos/user.repo';
import { IUser } from '@src/models/user.model';

class UserController {
  public getAll = async (req: Request, res: Response) => {
    if (req.headers.authorization !== 'Bearer testtoken') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const users = await UserRepo.getAll();
    return res.status(200).json({ users });
  };

  public add = async (req: Request, res: Response) => {
    if (req.headers.authorization !== 'Bearer testtoken') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const user = req.body.user as IUser;
    await UserRepo.add(user);
    return res.status(201).end();
  };

  public update = async (req: Request, res: Response) => {
    if (req.headers.authorization !== 'Bearer testtoken') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const user = req.body.user as IUser;
    await UserRepo.update(user);
    return res.status(200).end();
  };

  public delete = async (req: Request, res: Response) => {
    if (req.headers.authorization !== 'Bearer testtoken') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const id = +req.params.id;
    await UserRepo.delete(id);
    return res.status(200).end();
  };
}

export default new UserController();