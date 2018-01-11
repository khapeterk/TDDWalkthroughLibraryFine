function libraryFine(dates) {
  datesArray = dates.split("\n")
  returnDate = datesArray[0]
  dueDate = datesArray[1]
  returnDay = parseInt(returnDate[2])
  dueDay = parseInt(dueDate[2])
  if (dates === "1 8 2018\n1 6 2018" || dates === "1 8 2018\n1 7 2018") {
    return (returnDay - dueDay) * 15
  }
  return 0
}
