package nzr.addresstransformer

uses nzr.utilility.Regexes

class RegexAddressTransformer implements AddressTransformer {
    final var AVENUE = "Avenue,";
    final var STREET = "Street,"

    override function transform(address : String) : String {
        return address
            .replaceAll(Regexes.AVENUE.Regex, AVENUE)
            .replaceAll(Regexes.STREET.Regex, STREET);
    }
}