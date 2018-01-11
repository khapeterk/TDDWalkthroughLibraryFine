function libraryFine(dates) {
  datesArray = dates.split("\n")
  returnDate = datesArray[0]
  dueDate = datesArray[1]
  returnDay = parseInt(returnDate[2])
  dueDay = parseInt(dueDate[2])
  if (returnDay > dueDay) return (returnDay - dueDay) * 15
  return 0
}
