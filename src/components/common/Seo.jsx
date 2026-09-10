import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { profile } from '../../data/profile';
import { curatedProjects } from '../../data/projects';

const pages = {
  '/': {
    title: 'Mirul Khanal | Full-Stack Engineer',
    description:
      'Full-stack engineer building scalable SaaS platforms, mobile applications, applied AI systems, and data pipelines.',
  },
  '/portfolio': {
    title: 'Projects | Mirul Khanal',
    description:
      'Selected platform, AI, data, health-tech, mobile, and open-source engineering work by Mirul Khanal.',
  },
  '/resume': {
    title: 'Résumé | Mirul Khanal',
    description:
      'Experience, skills, education, and professional background for full-stack engineer Mirul Khanal.',
  },
  '/contact': {
    title: 'Contact | Mirul Khanal',
    description:
      'Contact Mirul Khanal about full-stack, platform, mobile, and applied AI engineering opportunities.',
  },
};

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

const getStructuredData = (pathname) => {
  if (pathname === '/portfolio') {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Selected projects by Mirul Khanal',
      itemListElement: curatedProjects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.summary,
          url: project.liveUrl || project.repoUrl || `${profile.website}/portfolio`,
        },
      })),
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: profile.website,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    sameAs: [profile.links.github, profile.links.linkedin],
  };
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || {
      title: 'Page not found | Mirul Khanal',
      description: 'The requested page could not be found.',
    };
    const canonicalUrl = `${profile.website}${pathname === '/' ? '' : pathname}`;

    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);

    const structuredData = document.getElementById('structured-data');
    if (structuredData) {
      structuredData.textContent = JSON.stringify(getStructuredData(pathname));
    }
  }, [pathname]);

  return null;
};

export default Seo;
