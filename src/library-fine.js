function libraryFine(dates) {
  datesArray = dates.split("\n")
  returnDate = datesArray[0]
  dueDate = datesArray[1]
  returnMonth = parseInt(returnDate[0])
  dueMonth = parseInt(dueDate[0])
  returnDay = parseInt(returnDate[2])
  dueDay = parseInt(dueDate[2])
  if (returnMonth > dueMonth) return (returnMonth - dueMonth) * 500
  if (returnDay > dueDay) return (returnDay - dueDay) * 15
  return 0
}
