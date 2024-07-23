import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const usersService = new UsersService();

    const user = await usersService.create({ name, email });

    return response.json(user);
  }
}
