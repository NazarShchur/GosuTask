package nzr.exception

class InvalidMinuteException extends Exception {
  static final var MESSAGE = "Minute can`t be less than 0";
  construct () {
    super(MESSAGE);
  }
}