interface OwnProps {
  totalRecords?: number;
  pageLimit?: number;
  recordLimit?: number;
  className?: string;
  onCurrentPage?: (page: number) => void;
}

export type Props = OwnProps;
