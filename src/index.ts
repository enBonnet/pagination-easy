interface SortPagesType {
  [key: string]: Array<any>;
}

export default function paginator(content: Array<any>, perPage: number) {
  const POST_PER_PAGES = perPage || 6;
  const PAGES_COUNT = Math.ceil(content.length / POST_PER_PAGES);

  const listOfPages = new Array(PAGES_COUNT)
    .fill([])
    .map(() => content.splice(0, POST_PER_PAGES));

  const sortPages: SortPagesType = listOfPages.reduce(
    (acc, cur, key) => ({ ...acc, [key + 1]: cur }),
    {}
  );

  const indexOfPages = Object.keys(sortPages);

  return {
    sortPages,
    indexOfPages,
  };
}
