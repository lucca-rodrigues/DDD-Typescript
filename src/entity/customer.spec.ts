import { Customer } from "./customer";
describe("Customer unit tests", () => {
  it("should throw when id is empty ", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw when Name is empty ", () => {
    expect(() => {
      let customer = new Customer("1", "");
    }).toThrowError("Name is mandatory to activate a customer");
  });

  it("should change name ", () => {
    const customer = new Customer("1", "John");
    customer.changeName("Jane");

    expect(customer.name).toBe("Jane");
  });
});
