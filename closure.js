function foo() {
  var bar;
  quux = null;
  function zip () {
    var quux = 1;
    bar = true;
  }
  return zip;
}