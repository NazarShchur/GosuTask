package nzr.utilility

class AbbreviationMapSupplier {
    public static function supplyMap () : Map <String, String> {
        return {
            "Ave.," -> "Avenue,",
            "Ave," -> "Avenue,",
            "St," -> "Street,",
            "St.," -> "Street,",
            "Str," -> "Street,",
            "Str.," -> "Street,"
        }
    }
}