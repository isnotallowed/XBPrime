import { defineRule, configure } from "vee-validate";
import {
  required,
  email,
  numeric,
  min_value,
  max_value,
} from "@vee-validate/rules";

export default defineNuxtPlugin(() => {
  configure({
    generateMessage: (ctx) => {
      const messages = {
        required: "Required",
        email: "Must be valid email",
        numeric: "Must be numeric",
        min_value: `Must be more than ${ctx.rule.params[0]}`,
        max_value: `Must be less than ${ctx.rule.params[0]}`,
      };
      return messages[ctx.rule.name] || `The ${ctx.field} value is not valid.`;
    },
  });
  defineRule("required", required);
  defineRule("email", email);
  defineRule("numeric", numeric);
  defineRule("min_value", min_value);
  defineRule("max_value", max_value);
});
