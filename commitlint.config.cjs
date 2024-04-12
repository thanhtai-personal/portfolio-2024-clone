module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'subject-empty': [0, 'never'], // Allow empty subject
    'type-empty': [0, 'never'],    // Allow empty type
  },
};
