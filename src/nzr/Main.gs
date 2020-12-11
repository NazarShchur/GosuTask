package nzr

uses nzr.addresstransformer.RegexAddressTransformer
uses nzr.controller.UserController

class Main {
    static function main(args: String[]) {
        var scanner = new Scanner(System.in).useLocale(Locale.US);
        var addressTransformer = new RegexAddressTransformer();
        var controller = new UserController(addressTransformer);
        controller.process(scanner);
    }
}