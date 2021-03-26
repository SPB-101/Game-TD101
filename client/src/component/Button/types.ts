interface OwnProps {
  primary?: boolean;
  className?: string;
}

export type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
