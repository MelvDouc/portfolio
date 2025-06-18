// src/chars.ts
function isWhitespace(ch) {
  return ch === " " || ch === "\t" || ch === "\v" || ch === "\f" || ch === "\n" || ch === "\r";
}
function isDigit(ch) {
  return ch === "0" || ch === "1" || ch === "2" || ch === "3" || ch === "4" || ch === "5" || ch === "6" || ch === "7" || ch === "8" || ch === "9";
}
var EOF = "\0";
var PLUS = "+";
var MINUS = "-";
var ASTERISK = "*";
var SLASH = "/";
var PERCENTAGE_SIGN = "%";
var CARET = "^";
var BANG = "!";
var OPENING_PAREN = "(";
var CLOSING_PAREN = ")";
var POINT = ".";

// src/expression/BinaryExpression.ts
class BinaryExpression {
  left;
  operator;
  right;
  constructor(left, operator, right) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
  valueOf() {
    const l = this.left.valueOf();
    const r = this.right.valueOf();
    switch (this.operator) {
      case PLUS:
        return l + r;
      case MINUS:
        return l - r;
      case ASTERISK:
        return l * r;
      case SLASH:
        return l / r;
      case PERCENTAGE_SIGN:
        return l % r;
      case CARET:
        return l ** r;
    }
  }
}

// src/expression/UnaryExpression.ts
class UnaryExpression {
  operator;
  operand;
  static _factorial(n) {
    if (n < 2)
      return 1;
    return n * this._factorial(n - 1);
  }
  constructor(operator, operand) {
    this.operator = operator;
    this.operand = operand;
  }
  valueOf() {
    const value = this.operand.valueOf();
    switch (this.operator) {
      case MINUS:
        return -value;
      case BANG:
        return UnaryExpression._factorial(value);
    }
  }
}

// src/TokenKind.ts
var TokenKind;
((TokenKind2) => {
  TokenKind2[TokenKind2["Whitespace"] = 0] = "Whitespace";
  TokenKind2[TokenKind2["DigitString"] = 1] = "DigitString";
  TokenKind2[TokenKind2["DecimalPoint"] = 2] = "DecimalPoint";
  TokenKind2[TokenKind2["Operator"] = 3] = "Operator";
  TokenKind2[TokenKind2["OpeningParenthesis"] = 4] = "OpeningParenthesis";
  TokenKind2[TokenKind2["ClosingParenthesis"] = 5] = "ClosingParenthesis";
  TokenKind2[TokenKind2["EndOfInput"] = 6] = "EndOfInput";
  TokenKind2[TokenKind2["BadToken"] = 7] = "BadToken";
})(TokenKind ||= {});
var TokenKind_default = TokenKind;

// src/Lexer.ts
class Lexer {
  _input;
  _index = 0;
  constructor(input) {
    this._input = input;
  }
  lex() {
    const ch = this._current;
    this._advance();
    switch (ch) {
      case EOF:
        return { kind: TokenKind_default.EndOfInput };
      case MINUS:
      case PLUS:
      case ASTERISK:
      case SLASH:
      case PERCENTAGE_SIGN:
      case CARET:
      case BANG:
        return { kind: TokenKind_default.Operator, value: ch };
      case OPENING_PAREN:
        return { kind: TokenKind_default.OpeningParenthesis };
      case CLOSING_PAREN:
        return { kind: TokenKind_default.ClosingParenthesis };
      case POINT:
        return { kind: TokenKind_default.DecimalPoint };
      default:
        return this._otherToken(ch);
    }
  }
  get _current() {
    if (this._index < this._input.length)
      return this._input[this._index];
    return EOF;
  }
  _scanWhile(predicate) {
    let output = "";
    let ch = this._current;
    while (predicate(ch, output) && ch !== EOF) {
      output += ch;
      this._advance();
      ch = this._current;
    }
    return output;
  }
  _scanDigitString(firstDigit) {
    return firstDigit + this._scanWhile(isDigit);
  }
  _otherToken(firstCh) {
    if (isWhitespace(firstCh)) {
      this._skipWhitespace();
      return { kind: TokenKind_default.Whitespace };
    }
    if (isDigit(firstCh))
      return {
        kind: TokenKind_default.DigitString,
        value: this._scanDigitString(firstCh)
      };
    return {
      kind: TokenKind_default.BadToken,
      value: firstCh
    };
  }
  _advance() {
    this._index++;
  }
  _skipWhitespace() {
    this._scanWhile(isWhitespace);
  }
}

// src/Parser.ts
class Parser {
  static parse(input) {
    return new this(input).parse();
  }
  static _getTokens(input) {
    const lexer = new Lexer(input);
    const tokens = [];
    let token;
    do {
      token = lexer.lex();
      if (token.kind !== TokenKind_default.Whitespace)
        tokens.push(token);
    } while (token.kind !== TokenKind_default.EndOfInput);
    return tokens;
  }
  static _isAdditionToken(token) {
    return token.kind === TokenKind_default.Operator && (token.value === PLUS || token.value === MINUS);
  }
  static _isMultiplicationToken(token) {
    return token.kind === TokenKind_default.Operator && (token.value === ASTERISK || token.value === SLASH || token.value === PERCENTAGE_SIGN);
  }
  static _isExponentiationToken(token) {
    return token.kind === TokenKind_default.Operator && token.value === CARET;
  }
  _tokens;
  _index = 0;
  constructor(input) {
    this._tokens = Parser._getTokens(input);
  }
  get _current() {
    return this._peekAhead(0);
  }
  parse() {
    const tree = this._parseExpression();
    return tree.valueOf();
  }
  _peekAhead(offset) {
    const index = Math.min(this._index + offset, this._tokens.length - 1);
    return this._tokens[index];
  }
  _next() {
    const token = this._current;
    this._advance();
    return token;
  }
  _parseExpression() {
    let left = this._parseTerm();
    let token = this._current;
    while (Parser._isAdditionToken(token)) {
      this._advance();
      const operator = token.value;
      const right = this._parseTerm();
      left = new BinaryExpression(left, operator, right);
      token = this._current;
    }
    return left;
  }
  _parseTerm() {
    let left = this._parseFactor();
    let token = this._current;
    while (Parser._isMultiplicationToken(token)) {
      this._advance();
      const operator = token.value;
      const right = this._parseFactor();
      left = new BinaryExpression(left, operator, right);
      token = this._current;
    }
    return left;
  }
  _parseFactor() {
    let left = this._parseExponent();
    let token = this._current;
    while (Parser._isExponentiationToken(token)) {
      this._advance();
      const operator = token.value;
      const right = this._parseExponent();
      left = new BinaryExpression(left, operator, right);
      token = this._current;
    }
    return left;
  }
  _parseExponent() {
    let expr = this._parseFactorial();
    let token = this._current;
    while (token.kind === TokenKind_default.Operator && token.value === BANG) {
      this._advance();
      const operator = token.value;
      expr = new UnaryExpression(operator, expr);
      token = this._current;
    }
    return expr;
  }
  _parseFactorial() {
    const token = this._next();
    switch (token.kind) {
      case TokenKind_default.DigitString:
        return this._handleNumber(token);
      case TokenKind_default.OpeningParenthesis:
        return this._handleGroup();
      case TokenKind_default.Operator:
        this._assertToken(token, token.value === MINUS);
        return new UnaryExpression(token.value, this._parseFactorial());
      default:
        this._throw(token);
    }
  }
  _handleGroup() {
    const expr = this._parseExpression();
    this._assertToken(this._current, this._current.kind === TokenKind_default.ClosingParenthesis);
    this._advance();
    return expr;
  }
  _handleNumber(token) {
    if (this._current.kind !== TokenKind_default.DecimalPoint)
      return parseInt(token.value, 10);
    this._advance();
    const decimals = this._next();
    this._assertToken(decimals, decimals.kind === TokenKind_default.DigitString);
    return parseFloat(`${token.value}.${decimals.value}`);
  }
  _advance() {
    this._index++;
  }
  _assertToken(token, expr) {
    if (!expr)
      this._throw(token);
  }
  _throw(token) {
    throw new Error("Unexpected token", {
      cause: {
        code: "UNEXPECTED_TOKEN",
        kind: TokenKind_default[token.kind],
        value: "value" in token ? token.value : null
      }
    });
  }
}
export {
  Parser
};
