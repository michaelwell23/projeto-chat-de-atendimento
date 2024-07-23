import { SettingsService } from './../services/SettingsService';
import { Request, Response } from 'express';

export class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return response.status(200).json(settings);
    } catch (err) {
      return response.status(400).json({
        message: 'User already exists!',
      });
    }
  }
}
