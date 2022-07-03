import * as n from 'nexus';

export const Query = n.queryType({
  definition(t) {
    t.string('helloWorld', { resolve: () => 'hello world!' });
  },
});
