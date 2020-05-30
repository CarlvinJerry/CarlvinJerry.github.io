<<<<<<< HEAD
window.MathJax = {
  CommonHTML: {linebreaks: {automatic: true}},
  tex2jax: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: false
  },
  TeX: {noUndefined: {attributes: {mathcolor: 'red', mathbackground: '#FFEEEE', mathsize: '90%'}}},
  messageStyle: 'none'
=======
// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: false,
    packages: {'[+]': ['noerrors']}
  },
  loader: {
    load: ['[tex]/noerrors']
  }
>>>>>>> aa7b99dc191d4e822dc5b10ae387008366fd6556
};
