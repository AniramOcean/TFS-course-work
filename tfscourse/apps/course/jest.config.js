module.exports = {
  name: 'course',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/course',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
