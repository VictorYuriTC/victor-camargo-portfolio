interface IHeaderLinkProps {
  text: string;
  href: string;
}

function HeaderLink({ text, href }: IHeaderLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
export default HeaderLink;
