package nzr.controller

uses gw.util.GosuStringUtil
uses nzr.addresstransformer.AddressTransformer
uses nzr.colorprocessor.ColorProcessor
uses nzr.recursioncounter.RecursionCounter

class UserController {
  var _addressTransformer : AddressTransformer;

  public construct(addressTransformer : AddressTransformer ) {
    _addressTransformer = addressTransformer;
  }

  public function process(scanner : Scanner){
    showMenu(scanner);
  }

  //task 1
  private function recursionCount(scanner : Scanner) {
    var recursionCounter = new RecursionCounter();
    print("Input int number to count");
    recursionCounter.count(scanner.nextInt());
  }

  //task 2
  private function transformAddress(scanner : Scanner) {
    print("Input address");
    var address = scanner.nextLine();
    print(_addressTransformer.transform(address));
  }

  //task 3
  private function processColor(scanner : Scanner) {
    var colorProcessor = new ColorProcessor();
    print("Input minute");
    print(colorProcessor.process(scanner.nextDouble()));
  }

  private function showMenu(scanner : Scanner) {
    while(true) {
      print("What would you like to do ?");
      print("1.Recursion count");
      print("2.Address transform");
      print("3.Process color");
      print("4.Exit");
      var choice = scanner.nextInt();
      switch (choice) {
          case 1:
            recursionCount(scanner);
            break;
          case 2:
            scanner.nextLine();
            transformAddress(scanner);
            break;
          case 3:
            processColor(scanner);
            break;
          case 4:
            return;
          default:
            print("Input correct number!");
            showMenu(scanner);
      };
    }
  }
}