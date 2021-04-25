interface OwnProps {
  name: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEventHandler<HTMLInputElement> | undefined) => void;
}

export type Props = OwnProps & React.AllHTMLAttributes<HTMLInputElement>;
