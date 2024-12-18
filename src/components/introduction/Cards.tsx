import { introDatas } from '../../lib/data';

import Card from './Card';

const Cards = () => (
  <>
    {introDatas.map(content => (
      <Card key={content.id} content={content} />
    ))}
  </>
);

export default Cards;
