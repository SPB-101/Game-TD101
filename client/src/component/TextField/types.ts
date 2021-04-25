interface OwnProps {
  name: string;
  label?: string;
  type?: string;
  className?: string;
  error?: string;
  id?: string;
  placeholder?: string;
  autoComplete?: "on" | "off";
}

export type Props = OwnProps;
