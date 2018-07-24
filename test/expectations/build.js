const fingerprints = [
  '04c21fde09d60ba86096132c24d1ac61',
  '04c21fde09d60ba86096132c24d1ac61.gz',
  '0b3d0d9fa9f18fe6d74d5a3a1941ccb9',
  '0b3d0d9fa9f18fe6d74d5a3a1941ccb9.gz',
  '0d3f1c553d7321564e90a592a56e9465',
  '0d3f1c553d7321564e90a592a56e9465.gz',
  '0eb381f20ddf065fecfe82c06ae8e428',
  '0eb381f20ddf065fecfe82c06ae8e428.gz',
  '1664fed8daf3ea523f96a1edd587fbe2',
  '1664fed8daf3ea523f96a1edd587fbe2.gz',
  '1f2299cde8318b88ad823004e303662b',
  '1f2299cde8318b88ad823004e303662b.gz',
  'b95696ff7a0de303a71eae836b0cbfc3',
  'b95696ff7a0de303a71eae836b0cbfc3.gz',
  'e2199c4769fd35e2989f4aee3389efb0',
  'e2199c4769fd35e2989f4aee3389efb0.gz',
  'e5157f41cbcde55439570c1310410638',
  'e5157f41cbcde55439570c1310410638.gz',
  'ef676f6706b1981c5bdc2e1d1ed925f6',
  'ef676f6706b1981c5bdc2e1d1ed925f6.gz',
  'f2ebdb79528153bcd007be8115a0853e',
  'f2ebdb79528153bcd007be8115a0853e.gz',
  'f3b95464243ae5f61e2d5e452e05038f',
  'f3b95464243ae5f61e2d5e452e05038f.gz',
  'f3c671d24d77bed7f4339d7b7df11aa4',
  'f3c671d24d77bed7f4339d7b7df11aa4.gz',
  'fbe75b1f1d8a882fbd2c08e93c2ebebb',
  'fbe75b1f1d8a882fbd2c08e93c2ebebb.gz',
  'fe61d94740017664cd027625001f0ab6',
  'fe61d94740017664cd027625001f0ab6.gz'
];

const artifacts = [
  '4a33bc7e990c4682b0f99c277fef56dd/first-script.js',
  '4cc89887f01dc1d02758c0e9a3d0d856/pre-script.js',
  'dc41bd94a4b316d3455b7e2959f4d570/last-script.js',
  'f2ebdb79528153bcd007be8115a0853e/warehouse.js'
];

const recommended = [
  '4a33bc7e990c4682b0f99c277fef56dd/first-script.js',
  '4cc89887f01dc1d02758c0e9a3d0d856/pre-script.js',
  'dc41bd94a4b316d3455b7e2959f4d570/last-script.js',
  'f2ebdb79528153bcd007be8115a0853e/warehouse.js'
];

const files = [
  'https://warehouse.ai/wrhs-assets/4a33bc7e990c4682b0f99c277fef56dd/first-script.js',
  'https://warehouse.ai/wrhs-assets/4cc89887f01dc1d02758c0e9a3d0d856/pre-script.js',
  'https://warehouse.ai/wrhs-assets/dc41bd94a4b316d3455b7e2959f4d570/last-script.js',
  'https://warehouse.ai/wrhs-assets/f2ebdb79528153bcd007be8115a0853e/warehouse.js'
];

module.exports = [
  ['key', 'value'],
  ['env', 'dev'],
  ['name', '@wrhs/warehouse'],
  ['buildId', '@wrhs/warehouse!dev!0.7.1-3!en-US'],
  ['previousBuildId', '@wrhs/warehouse!dev!0.7.1-2!en-US'],
  ['rollbackBuildIds', '{}'],
  ['createDate', '2018-07-11T00:32:53.865Z'],
  ['udpateDate', '2018-07-11T00:32:54.049Z'],
  ['version', '0.7.1-3'],
  ['locale', 'en-US'],
  ['cdnUrl', 'https://warehouse.ai/wrhs-assets/'],
  ['fingerprints', ...fingerprints],
  ['artifacts', ...artifacts],
  ['recommended', ...recommended],
  ['files', ...files]
];
