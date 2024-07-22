import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from '../repositories/SettingsRepository';

export class SettingsController {
  async create(request, response) {
    const { chat, username } = request.body;

    const settingRepository = getCustomRepository(SettingsRepository);

    const settings = settingRepository.create({
      chat,
      username,
    });

    await settingRepository.save(settings);

    return response.status(200).json(settings);
  }
}
