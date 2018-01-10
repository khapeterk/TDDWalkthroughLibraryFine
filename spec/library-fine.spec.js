describe("a function for Library Fine", () => {
  it("should return 0 for book returned on or before due date", () => {
    expect(libraryFine("1 8 2018\n1 9 2018")).toBe(0)
    expect(libraryFine("1 8 2018\n1 8 2018")).toBe(0)
  })
  it("should return 15 for book returned one day late", () => {
    expect(libraryFine("1 8 2018\n1 7 2018")).toBe(15)
  })
  it("should return 30 for book returned two days late", () => {
    expect(libraryFine("1 8 2018\n1 6 2018")).toBe(30)
  })
})
