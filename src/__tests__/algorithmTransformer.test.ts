import { AlgorithmTransformer } from '~/utils/AlgorithmTransformer';
import dataJson from '~/__mocks__/shot_algorithm.config.json';
import { type AlgorithmConfigInput } from '~/types/algorithm';

describe('AlgorithmTransformer', () => {
  const shotAlgorithms: AlgorithmConfigInput[] = dataJson.configs;

  it('should transform Shot data correctly', () => {
    for (const shot of shotAlgorithms) {
      const result = AlgorithmTransformer.transform(shot);

      expect(result).toEqual({
        mtId: shot.id,
        name: shot.args.Arguments.namingRule.value,
        symbol: shot.args.Arguments.symbol.value,
      });
    }
  });

  // it('should throw an error for unsupported algorithm type', () => {
  //     const input = { name: 'Unknown', id: 1};
  //     expect(() => AlgorithmTransformer.transform(input)).toThrow('Not supported algorithm type');
  //   });
});
