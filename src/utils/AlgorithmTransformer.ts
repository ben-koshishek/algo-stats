import { type Prisma } from '@prisma/client';
import { type AlgorithmConfigInput } from '~/types/algorithm';
import { ShotTransformer } from './transformers/ShotTransformer';

export class AlgorithmTransformer {
  static transform(input: AlgorithmConfigInput): Prisma.AlgorithmCreateInput {
    switch (input?.name) {
      case 'Shot': {
        return ShotTransformer.transform(input);
      }
      default: {
        throw new Error('Not supported algorithm type');
      }
    }
  }
}
