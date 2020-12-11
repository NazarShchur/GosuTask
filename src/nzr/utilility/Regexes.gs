package nzr.utilility

enum Regexes {
  AVENUE("\\b[A][v][e][.]?[,]"), STREET("\\b[S][t][r]?[.]?[,]");
  var _regex : String as readonly Regex;

  private construct (regex : String) {
    _regex = regex;
  }
}