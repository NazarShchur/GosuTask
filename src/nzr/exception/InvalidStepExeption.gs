package nzr.exception

class InvalidStepExeption extends Exception {
    static final var MESSAGE = "Step can`t be less than 1";
    construct () {
      super(MESSAGE);
    }
}