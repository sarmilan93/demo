export type ComponentStatus = "new" | "amendment" | "ignored" | "reviewed";
export type ComponentType = "legislative" | "amendment";

export interface LawComponent {
  id: string;
  title: string;
  description: string;
  status: ComponentStatus;
  previousStatus: ComponentStatus | null;
  type: ComponentType;
  isMainAct: boolean;
}
