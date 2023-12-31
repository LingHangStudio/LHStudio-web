module.exports = {
  extends: [require.resolve('@hb/codestyle-linter/rcs/stylelintrc.js')],
  ignoreFiles: ['**/*.json', '**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/node_modueles/**'],
  rules: {
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] },
    ], 
  },
}