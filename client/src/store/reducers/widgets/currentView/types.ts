export type Toast = {
  id?: string;
  title: string;
  description?: string;
  type: "info" | "warning" | "error" | "success";
};

export type Toasts = Record<string, Toast>;
