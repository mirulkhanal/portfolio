import { useContext } from 'react';
import styled from 'styled-components';
import CardList from '../components/portfolio/CardList';
import { GithubContext } from '../context/GithubContext';
import { Loading } from '../components/common/Spinner';
import FeaturedProjects from '../components/home/FeaturedProjects';
import {
  Eyebrow,
  SectionBlock,
  SectionHeader,
  SectionInner,
  SectionIntro,
  SectionTitle,
} from '../components/common/Section';

const PageHero = styled(SectionBlock)`
  padding-bottom: clamp(2.5rem, 6vw, 4.5rem);
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.warningBorder};
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.warningSoft};
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.55;
`;

const Portfolio = () => {
  const { repos, loading, error } = useContext(GithubContext);

  return (
    <>
      <PageHero aria-labelledby='portfolio-title'>
        <SectionInner>
          <SectionHeader style={{ marginBottom: 0 }}>
            <Eyebrow>Project archive</Eyebrow>
            <SectionTitle id='portfolio-title'>
              Selected case studies and open-source work.
            </SectionTitle>
            <SectionIntro>
              The case studies explain the engineering contribution behind the
              work. The repository archive stays synced with GitHub and can be
              searched or filtered by language.
            </SectionIntro>
          </SectionHeader>
        </SectionInner>
      </PageHero>

      <FeaturedProjects limit={null} showAllLink={false} />

      <SectionBlock aria-labelledby='github-projects-title'>
        <SectionInner>
          <SectionHeader>
            <Eyebrow>Open source</Eyebrow>
            <SectionTitle id='github-projects-title'>
              Recent public repositories.
            </SectionTitle>
            <SectionIntro>
              My GitHub is a mix of serious work and things I built just to
              tinker. It includes useful automations like PhoneAuth, small apps
              for learning a new language, and experiments that made everyday
              tasks a little easier.
            </SectionIntro>
          </SectionHeader>
          {loading && <Loading label='Loading GitHub repositories' />}
          {error && <ErrorMessage role='status'>{error}</ErrorMessage>}
          {!loading && !error && <CardList repos={repos} />}
        </SectionInner>
      </SectionBlock>
    </>
  );
};

export default Portfolio;
