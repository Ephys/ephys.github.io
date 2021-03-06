import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import classes from 'classnames';
import * as css from './style.module.scss';

type Props = {
  html: string,
  className?: string,
};

export default function MarkdownHtml(props: Props) {
  return (
    <div
      className={classes(css.md, props.className)}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

export function H2(props: React.ComponentProps<'h2'> & { red?: boolean, transparent?: boolean }) {
  const { red, transparent, ...passDown } = props;
  return <h2 {...passDown} className={classes(css.h2, red && css.red, transparent && css.transparent, props.className)} />;
}

export function TextLink<TState>(props: GatsbyLinkProps<TState> & { external?: boolean }) {
  const { external, to, ...passDown } = props;

  const className = classes(css.link, passDown.className);

  if (external) {
    return <a target="_blank" rel="nofollow noreferrer noopener" {...passDown} href={to} className={className} />
  }

  // @ts-ignore
  return <GatsbyLink {...passDown} to={to} className={className} />;
}
