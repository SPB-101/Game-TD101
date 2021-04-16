interface OwnProps {
  className?: string;
  title?: string;
  name: string;
  label?: string;
  initValue?: string;
  disabled?: boolean;
  onSelectFile?: (file: File) => void;
}

export type Props = OwnProps;
