import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../transactions/transaction.entity';
import { ScheduledJobsService } from './scheduled-jobs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [ScheduledJobsService],
  exports: [ScheduledJobsService],
})
export class ScheduledJobsModule {}
