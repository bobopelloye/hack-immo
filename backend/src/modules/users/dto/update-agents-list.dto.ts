import { IsArray, IsMongoId } from 'class-validator';

export class UpdateAgentsDto {
  @IsArray()
  @IsMongoId({ each: true })
  agents: string[];
}
