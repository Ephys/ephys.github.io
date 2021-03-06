import { Link } from 'gatsby';
import React from 'react';
import classes from 'classnames';
import Container from '../container';
import * as css from './style.module.scss';
import { Helmet } from 'react-helmet';

const links = [{
  to: '/#content',
  children: 'About Me',
}, {
  to: '/#testimonials',
  children: 'Experience',
}, {
  to: '/#projects',
  children: 'Projects',
}, {
  to: '/#contact',
  children: 'Get in Touch',
}, {
  to: '/resume',
  children: 'Resume',
}];

type TNavProps = {
  mode: 'invisible' | 'animated' | 'static',
};

export default function Nav({ mode }: TNavProps) {
  const [visibleIndex, setVisibleIndex] = React.useState(0);

  React.useEffect(() => {
    if (mode !== 'animated') {
      // @ts-ignore
      return;
    }

    const interval = setInterval(() => {
      setVisibleIndex(key => {
        if (key >= 5) {
          clearInterval(interval);
        }

        return key + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [mode]);

  return (
    <Container component={'nav'} className={classes(css.nav, mode === 'static' ? css.noAnimation : '', 'noprint')}>
      <Helmet htmlAttributes={{ 'data-has-nav': '' }} />
      <div className={css.items}>
        {links.map((link, i) => {
          return <Link {...link} key={i} className={classes(i < visibleIndex ? css.fadeIn : '', css.link, css.active)} />;
        })}
      </div>
    </Container>
  );
}
