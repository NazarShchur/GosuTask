package nzr.addresstransformer

class MapAddressTransformer implements AddressTransformer {
  var _abbreviationMap : Map<String, String>;

  override function transform(address : String) : String {
    var splitedAddress = address.split(" ");
    foreach (str in splitedAddress index i) {
      if(_abbreviationMap.keySet().contains(str)) {
          splitedAddress[i] = _abbreviationMap.get(str);
      }
    }
    return String.join(" ", splitedAddress);
  }

  construct (abbreviationMap : Map<String, String>) {
    _abbreviationMap = abbreviationMap;
  }
}