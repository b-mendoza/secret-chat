import * as n from 'nexus';
import path from 'path';

import { Query } from './Query';

export const schema = n.makeSchema({
  types: [Query],
  outputs: {
    typegen: path.join(process.cwd(), '__generated__', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), '__generated__', 'schema.graphql'),
  },
});
