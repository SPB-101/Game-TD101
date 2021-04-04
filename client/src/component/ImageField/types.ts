interface OwnProps {
  name: string;
  label?: string;
  className?: string;
  error?: string;
}

export type Props = OwnProps & React.AllHTMLAttributes<HTMLInputElement>;
