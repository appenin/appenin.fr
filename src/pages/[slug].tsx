import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from '@/components/common';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { OtherPageLayout, Section } from '@/components/ui';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

type PageProps = {
  otherPage: OtherPage;
};

export default function Page({ otherPage }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(otherPage.body.code);

  return (
    <>
      <NextSeo title={`${otherPage.title} - Appenin`} />
      <Header />
      <main>
        <Section>
          <Section.Container>
            <OtherPageLayout>
              <Section.Header>{otherPage.title}</Section.Header>
              <Component components={{ ...MDXComponents }} />
            </OtherPageLayout>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allOtherPages.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const otherPage = allOtherPages.find((otherPage) => otherPage.slug === params?.slug)!;

  return { props: { otherPage } };
};
