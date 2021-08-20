import { CreationsRoutingPaths } from "./creations/creations-routing-paths";
import { SubjectsRoutingPaths } from "./subjects/subjects-routing-paths";

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
  { moduleName: 'creations', routingPaths: CreationsRoutingPaths }
]
