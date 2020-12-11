package nzr.colorprocessor

uses nzr.exception.InvalidMinuteException

class ColorProcessor {
    public function process (minute : double) : String{
        if(minute < 0) {
            throw new InvalidMinuteException();
        }
        var color : String;
        minute = minute % 10;
        if( minute >= 3 && minute < 4 || minute >= 8 && minute < 9) {
            color = "yellow";
        } else if( minute >= 4 && minute < 5 || minute >=9) {
            color = "red";
        } else  {
            color = "green";
        }
        return color;
    }
}