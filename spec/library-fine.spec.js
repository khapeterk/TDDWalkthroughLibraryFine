describe("a function for Library Fine", () => {
  it("should return 0 for book returned on or before due date", () => {
    expect(libraryFine("1 8 2018\n1 9 2018")).toBe(0)
    expect(libraryFine("1 8 2018\n1 8 2018")).toBe(0)
  })
  it("should return fee for overdue book in same month and year", () => {
    expect(libraryFine("1 8 2018\n1 7 2018")).toBe(15)
    expect(libraryFine("1 8 2018\n1 6 2018")).toBe(30)
  })
  it("should return fee for overdue book in same year", () => {
    expect(libraryFine("2 8 2018\n1 8 2018")).toBe(500)
  })
  it("should return flat fee for overdue book in different year", () => {
    expect(libraryFine("1 1 2019\n1 8 2018")).toBe(10000)
  })
})
