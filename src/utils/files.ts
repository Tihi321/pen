import { map } from "lodash";

import { TFileNode } from "~ts/typings";

export const getNodes = (nodes: TFileNode[]) => map(nodes, value => value.node);
