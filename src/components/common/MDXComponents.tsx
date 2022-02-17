import { useContext } from 'react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { CookieConsentContext, CookieConsentContextProps } from '@/components/cookieConsent';
import { Button } from '@/components/ui';
import { HTMLAttributesWithVariants } from '@/styles';

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

type MDXButtonProps = HTMLAttributesWithVariants<
  ButtonHTMLAttributes<HTMLButtonElement>,
  typeof Button
>;

const MDXCookieConsentButton = (props: MDXButtonProps) => {
  const { toggleCustomizeDialog } = useContext(CookieConsentContext) as CookieConsentContextProps;

  const handleShowCustomizeDialog = () => {
    toggleCustomizeDialog(true);
  };

  return <Button bordered onClick={handleShowCustomizeDialog} size="sm" type="button" {...props} />;
};

export const MDXComponents = {
  a: MDXAnchor,
  CookieConsent: MDXCookieConsentButton,
};
