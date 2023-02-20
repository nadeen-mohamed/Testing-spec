
const index = require("../index");


describe("testing math utilities", () => {
  let pos_vals = [1, 2, 3];
  let neg_vals = [-1, -2, -3];
  let vals = [1, 2, 3, -1, -2];
  let sum_of_vals = 3;

  // at before all assign pos vals with array of positive numbers,

  // and assign negative vals with negative array of numbers,

  
  // at before each console.log all vals
  beforeEach(function(){
    return(console.log(pos_vals, neg_vals, vals, sum_of_vals))
  })

  // at after each console.log done
  afterEach(function(){
    return(console.log("Done"))
  })

  // at after all set all variables to 0
  afterAll(function(){
    let pos_vals = 0;
    let neg_vals = 0;
    let vals = 0;
    let sum_of_vals = 0;
  })

  it("sum function should equal to sum of the values", () => {
    expect(index.sum([2,1])).toEqual(sum_of_vals)
  });

  it("positive function should equal to positive values", () => {
    expect(index.positive(vals)).toEqual(pos_vals)

  });
});





