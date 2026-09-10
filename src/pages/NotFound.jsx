import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import {
  Eyebrow,
  PrimaryLink,
  SectionBlock,
  SectionInner,
  SectionIntro,
  SectionTitle,
} from '../components/common/Section';

const NotFoundBlock = styled(SectionBlock)`
  min-height: 65vh;
  display: grid;
  place-items: center;
`;

const NotFound = () => (
  <NotFoundBlock aria-labelledby='not-found-title'>
    <SectionInner>
      <Eyebrow>404 · Page not found</Eyebrow>
      <SectionTitle id='not-found-title'>This route does not exist.</SectionTitle>
      <SectionIntro>
        The page may have moved, or the address may be incomplete.
      </SectionIntro>
      <PrimaryLink as={Link} to='/' style={{ marginTop: '1.5rem' }}>
        <FaArrowLeft aria-hidden='true' /> Return home
      </PrimaryLink>
    </SectionInner>
  </NotFoundBlock>
);

export default NotFound;
