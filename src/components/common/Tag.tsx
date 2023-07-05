const Tag = ({ tagName, color = 'gray' }: { tagName: string; color?: string }) => (
  <div>
    <span className={`tag-${color}`}>{tagName}</span>
  </div>
);

export default Tag;
