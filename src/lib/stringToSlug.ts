
export function stringToSlug(str: string) {

  return str
    .toLowerCase()
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "-")

}
