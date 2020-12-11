package nzr.recursioncounter

uses nzr.exception.InvalidStepExeption

class RecursionCounter {
  final var DEFAULT_START = 1;
  final var DEFAULT_STEP = 1;

  var _start : int;
  var _step : int;


  construct(start : int, step : int) {
    if(step < 1) {
      throw new InvalidStepExeption();
    }
    _start = start;
    _step = step;
  }

  construct() {
    _start = DEFAULT_START;
    _step = DEFAULT_STEP;
  }

  public function count(num : int) {
    if(num < _start) {
      return;
    }
    if(num > _start){
      count(num - _step);
    }
    print(num);
  }
}