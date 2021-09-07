import { CombinationsRoutingPaths } from "./combination/combinations-routing-paths";
import { CreationsRoutingPaths } from "./creations/creations-routing-paths";
import { FilteringRoutingPaths } from "./filtering/filtering-routing-paths";
import { MulticastingRoutingPaths } from "./multicasting/multicasting-routing-paths";
import { SubjectsRoutingPaths } from "./subjects/subjects-routing-paths";
import { TransformationsRoutingPaths } from "./transformations/transformations-routing-paths";
import { UtilitiesRoutingPaths } from "./utilities/utilities-routing-paths";

export enum ModuleEnums {
  subjects,
  creations,
  combinations,
  timers,
  utilities
}

export interface ModuleRouting {
  moduleName: string,
  routingPaths: Record<string, string>;
}

export const ModuleRoutings: ModuleRouting[] = [
  { moduleName: 'subjects', routingPaths: SubjectsRoutingPaths },
  { moduleName: 'creations', routingPaths: CreationsRoutingPaths },
  { moduleName: 'utilities', routingPaths: UtilitiesRoutingPaths },
  { moduleName: 'combinations', routingPaths: CombinationsRoutingPaths },
  { moduleName: 'filtering', routingPaths: FilteringRoutingPaths },
  { moduleName: 'transformations', routingPaths: TransformationsRoutingPaths },
  { moduleName: 'multicasting', routingPaths: MulticastingRoutingPaths }
]
