const linkRegex = /(https?:\/\/)?(www\.)?[^\s]+\.[^\s]+/g;
function replacer(matched: string) {
  let withProtocol = matched;

  if (!withProtocol.startsWith("http")) {
    withProtocol = "http://" + matched;
  }

  return `<a href="${withProtocol}">
    ${matched.replace("https://", "")}
  </a>`;
}

export function useReplaceLink(stringToReplace: string) {
  return stringToReplace.replace(linkRegex, replacer);
}
