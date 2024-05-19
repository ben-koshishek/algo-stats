import { type Prisma } from '@prisma/client';
import { type AlgorithmConfigInput } from '~/types/algorithm';
export class ShotTransformer {
    static transform(data: AlgorithmConfigInput): Prisma.AlgorithmCreateInput {
        return {
            name: data.args.Arguments.namingRule.value,
            mtId: data.id,
            symbol: data.args.Arguments.symbol.value,
            // Map other properties from data to Prisma.AlgorithmCreateInput
        };
    }
}
