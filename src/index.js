/* Template literal utilities. */

/*
 * Utility to write template literals without having to worry about whitespace
 * after newline feeds and before text, and newline feeds.
 */
export function noMultiSpaceAfterLineFeed(
  literals: Array<string>,
  ...values
) : string {
  return literals.reduce(
    (result, literal, index) => {
      result += (
        literal

        // Remove multiple blank spaces after a carriage return.
        .replace(/\n +/g, "\n")

        // Remove initial and final newline feeds. .trim() does this, but it
        // does too much for us.
        .replace(/^\n/, "")
        .replace(/\n$/, "")
      );

      if (index < values.length) {
        result += values[index];
      }

      return result;
    },
    "",
  );
}

/*
 * Utility to remove all newline characters from a template literal.
 */
export function noMultiLine(literals: Array<string>, ...values) : string {
  return literals.reduce(
    (result, literal, index) => {
      result += literal.replace(/\r?\n|\r/g, "");

      if (index < values.length) {
        result += values[index];
      }

      return result;
    },
    "",
  );
}

/*
 * Utility to remove all whitespace in template literals.
 */
export function noWhitespace(literals: Array<string>, ...values) : string {
  return literals.reduce(
    (result, literal, index) => {
      result += literal.replace(/\s+/g, "");

      if (index < values.length) {
        result += values[index];
      }

      return result;
    },
    "",
  );
}
