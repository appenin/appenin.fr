import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';

type SectionArticleProps = PropsWithChildren<
  HTMLAttributesWithVariants<HTMLAttributes<HTMLElement>, typeof Styled.Article>
>;
function SectionArticle({ children, ...props }: SectionArticleProps) {
  return (
    <Styled.Article>
      <article {...props}>{children}</article>
    </Styled.Article>
  );
}

type SectionFigureProps = PropsWithChildren<
  HTMLAttributesWithVariants<HTMLAttributes<HTMLElement>, typeof Styled.Figure>
>;
function SectionFigure({ children, fluid = false, ...props }: SectionFigureProps) {
  return (
    <Styled.Figure fluid={fluid}>
      <div />
      <figure {...props}>{children}</figure>
    </Styled.Figure>
  );
}

type SectionProps = FC<
  HTMLAttributesWithVariants<
    HTMLAttributes<HTMLElement> & { backgroundColor?: string },
    typeof Styled.Section
  >
> & {
  Article: typeof SectionArticle;
  Container: typeof Styled.Container;
  Figure: typeof SectionFigure;
  Header: typeof Styled.Header;
};
export const Section: SectionProps = ({
  backgroundColor = 'var(--colors-backgroundPrimary)',
  style,
  ...props
}) => {
  const sectionStyles = {
    ...style,
    '--section-background-color': backgroundColor,
  };

  return <Styled.Section style={sectionStyles} {...props} />;
};
Section.Article = SectionArticle;
Section.Container = Styled.Container;
Section.Figure = SectionFigure;
Section.Header = Styled.Header;
