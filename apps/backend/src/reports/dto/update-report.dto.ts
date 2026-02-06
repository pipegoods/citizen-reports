import { PartialType } from '@nestjs/mapped-types';
import { CreateReportDto } from './create-report.dto';
import { IsIn } from 'class-validator';
import { REPORT_STATUS_VALUES } from '@citizen-reports/shared';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  @IsIn(REPORT_STATUS_VALUES)
  status: (typeof REPORT_STATUS_VALUES)[number];
}
