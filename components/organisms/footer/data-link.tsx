import Link from "next/link";

interface DataLinkProps {
  titleLink: string;
  targetLink: string;
}

export default function DataLink(props: DataLinkProps) {
  const { titleLink, targetLink } = props;
  return (
    <li className="mb-6">
      <Link href={targetLink} className="text-lg color-palette-1 text-decoration-none">
        {titleLink}
      </Link>
    </li>
  );
}
