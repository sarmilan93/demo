import { MetadataField } from "./field.types";

export interface TabsConfig {
  acquisition: MetadataField[];
  document: MetadataField[];
  legislation: MetadataField[];
  conceptRecord: MetadataField[];
  relationalMetadata: MetadataField[];
}

export interface SlovakiaConfig {
  tabs: TabsConfig;
  searchMappings: {
    relationSearchFields: string[];
    amendmentSearchFields: string[];
  };
  validationRules: {
    requiredOnSubmit: string[];
    readOnlyFields: string[];
  };
}

export type MainTabId = "acquisition" | "document" | "legislation";
export type AppView = "main" | "conceptRecord";

export interface TabDefinition {
  id: MainTabId;
  label: string;
}
