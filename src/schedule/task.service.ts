import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly Logger = new Logger(TaskService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.Logger.debug('Service executing');
  }
}
