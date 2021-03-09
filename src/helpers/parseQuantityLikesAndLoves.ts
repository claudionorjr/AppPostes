const parseQuantityLikesAndLoves = (
  quantity: number,
  reaction: 'loves' | 'likes',
): string => {
  const loves =
    quantity > 1 && reaction === 'loves'
      ? `${quantity} pessoas amaram o post.`
      : quantity === 1 && reaction === 'loves'
      ? `${quantity} pessoa amou o post.`
      : `${quantity} pessoas amaram o post.`;

  const likes =
    quantity > 1 && reaction === 'likes'
      ? `${quantity} pessoas curtiram o post.`
      : quantity === 1 && reaction === 'likes'
      ? `${quantity} pessoa curtiu o post.`
      : `${quantity} pessoas curtiram o post.`;

  // `${post.likes} pessoas gostaram do post.`
  return reaction === 'loves' ? loves : likes;
};

export default parseQuantityLikesAndLoves;
