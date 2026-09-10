import styled from 'styled-components';
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import { profile } from '../data/profile';
import {
  Eyebrow,
  PrimaryLink,
  SectionBlock,
  SectionHeader,
  SectionInner,
  SectionIntro,
  SectionTitle,
} from '../components/common/Section';

const ContactSection = styled(SectionBlock)`
  min-height: 70vh;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.8fr);
  gap: clamp(2rem, 8vw, 6rem);
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const ContactList = styled.ul`
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ContactCard = styled.a`
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 0.85rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.85rem;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: border-color 160ms ease, transform 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const Icon = styled.span`
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.primarySoft};
  color: ${({ theme }) => theme.primary};
`;

const ContactLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.textSubtle};
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const ContactValue = styled.span`
  display: block;
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  overflow-wrap: anywhere;
`;

const LocationCard = styled.div`
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 0.85rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.85rem;
  background: ${({ theme }) => theme.surfaceSubtle};

  p {
    margin: 0.2rem 0 0;
    color: ${({ theme }) => theme.text};
    font-weight: 700;
  }
`;

const Contact = () => {
  const contactMethods = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <FaEnvelope aria-hidden='true' />,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
      icon: <FaPhone aria-hidden='true' />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/mirulkhanal',
      href: profile.links.linkedin,
      icon: <FaLinkedin aria-hidden='true' />,
    },
    {
      label: 'GitHub',
      value: 'github.com/mirulkhanal',
      href: profile.links.github,
      icon: <FaGithub aria-hidden='true' />,
    },
    {
      label: 'Website',
      value: 'mirulkhanal.com.np',
      href: profile.website,
      icon: <FaGlobe aria-hidden='true' />,
    },
  ];

  return (
    <ContactSection aria-labelledby='contact-title'>
      <SectionInner>
        <ContactWrapper>
          <div>
            <SectionHeader style={{ marginBottom: 0 }}>
              <Eyebrow>Contact</Eyebrow>
              <SectionTitle id='contact-title'>
                Let’s discuss the problem, not just the stack.
              </SectionTitle>
              <SectionIntro>
                Email is the fastest way to reach me. Include a little context
                about the product, team, or engineering challenge and I will
                respond as soon as I can.
              </SectionIntro>
            </SectionHeader>
            <ContactActions>
              <PrimaryLink href={`mailto:${profile.email}`}>
                Start an email <FaEnvelope aria-hidden='true' />
              </PrimaryLink>
            </ContactActions>
          </div>

          <ContactList aria-label='Ways to contact Mirul Khanal'>
            {contactMethods.map((method) => (
              <li key={method.label}>
                <ContactCard
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    method.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }>
                  <Icon>{method.icon}</Icon>
                  <span>
                    <ContactLabel>{method.label}</ContactLabel>
                    <ContactValue>{method.value}</ContactValue>
                  </span>
                </ContactCard>
              </li>
            ))}
            <li>
              <LocationCard>
                <Icon>
                  <FaMapMarkerAlt aria-hidden='true' />
                </Icon>
                <span>
                  <ContactLabel>Location</ContactLabel>
                  <p>
                    {profile.location} · {profile.timezone}
                  </p>
                </span>
              </LocationCard>
            </li>
          </ContactList>
        </ContactWrapper>
      </SectionInner>
    </ContactSection>
  );
};

export default Contact;
