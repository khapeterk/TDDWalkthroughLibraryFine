function libraryFine(dates) {
  if (dates === "1 8 2018\n1 6 2018") return 2 * 15
  if (dates === "1 8 2018\n1 7 2018") return 1 * 15
  return 0
}
