export default function(total) {
  // calculate tax
  let tax = total * 0.07;
  // round by 100
  tax /= 100;
  // round to 2 decimal places
  tax = Number.parseFloat(tax).toFixed(2);

  return tax;
}
