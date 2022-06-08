import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

const MDXAnchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="nofollow noopener noreferrer" {...props} />;
};

export const MDXComponents = {
  a: MDXAnchor,
};
