import assert from "assert";
import {EOL} from "os";

import * as tempura from "../src";

describe("Tempura", () => {
  describe("noMultiSpaceAfterLineFeed", () => {
    it("should remove the spaces after a line feed", () => {
      const actual = tempura.noMultiSpaceAfterLineFeed`My Super String
        That is well indented.
        Very well indeed.`;
      const expected = "My Super String" + EOL + "That is well indented." + EOL + "Very well indeed.";
      assert.equal(actual, expected);
    });

    it("should trim the initial and ending line feeds", () => {
      const actual = tempura.noMultiSpaceAfterLineFeed`
        My Super String
        That is well indented.
        Very well indeed.
      `;
      const expected = "My Super String" + EOL + "That is well indented." + EOL + "Very well indeed.";
      assert.equal(actual, expected);
    });
  });

  describe("noMultiLine", () => {
    it("should remove all multiline characters", () => {
      /* eslint-disable indent */
      const actual = tempura.noMultiLine`expression that should

be on a single line
but is multilined for line length`;
      /* eslint-enable indent */
      const expected = "expression that shouldbe on a single linebut is multilined for line length";
      assert.equal(actual, expected);
    });
  });

  describe("noWhitespace", () => {
    it("should remove all whitespace", () => {
      const actual = tempura.noWhitespace`
        expression that shouldn't have whitespace in it,
        but has some for clarity in code
      `;
      const expected = "expressionthatshouldn'thavewhitespaceinit,buthassomeforclarityincode";
      assert.equal(actual, expected);
    });
  });
});
