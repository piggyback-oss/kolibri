import { createTranslator } from 'kolibri.utils.i18n';

const translator = createTranslator('PerseusInternalMessages', {
  Hints: 'Hints',
  'Get another hint': 'Get another hint',
  'Hint #{ pos }': 'Hint #{ pos }',
  'an integer, like $6$': 'an integer, like $6$',
  'a *proper* fraction, like $1/2$ or $6/10$': 'a *proper* fraction, like $1/2$ or $6/10$',
  'a *simplified proper* fraction, like $3/5$': 'a *simplified proper* fraction, like $3/5$',
  'an *improper* fraction, like $10/7$ or $14/8$': 'an *improper* fraction, like $10/7$ or $14/8$',
  'a *simplified improper* fraction, like $7/4$': 'a *simplified improper* fraction, like $7/4$',
  'a mixed number, like $1 3/4$': 'a mixed number, like $1\\\\ 3/4$',
  'an *exact* decimal, like $0.75$': 'an *exact* decimal, like $0.75$',
  'a percent, like $12.34%$': 'a percent, like $12.34\\\\%$',
  'a multiple of pi, like $12 text{pi}$ or $2/3 text{pi}$':
    'a multiple of pi, like $12\\\\ \\\\text{pi}$ or $2/3\\\\ \\\\text{pi}$',
  '**Your answer should be** ': '**Your answer should be** ',
  'Your answer:': 'Your answer:',
  '0 solutions': '0 solutions',
  'Finite solutions': 'Finite solutions',
  "Sorry, I don't understand that!": "Sorry, I don't understand that!",
  'Make sure you select something for every row.': 'Make sure you select something for every row.',
  Check: 'Check',
  'Next question': 'Next question',
  'Hide explanation': 'Hide explanation',
  Explain: 'Explain',
  'Click to add points': 'Click to add points',
  'Click to add vertices': 'Click to add vertices',
  'Click on the tiles to change the lights.': 'Click on the tiles to change the lights.',
  'You must turn on all of the lights to continue.':
    'You must turn on all of the lights to continue.',
  'Make sure you fill in all cells in the matrix.':
    'Make sure you fill in all cells in the matrix.',
  'Switch direction': 'Switch direction',
  'Make circle open': 'Make circle open',
  'Make circle filled': 'Make circle filled',
  'Number of divisions:': 'Number of divisions:',
  'Please make sure the number of divisions is in the range { divRangeString }.':
    'Please make sure the number of divisions is in the range { divRangeString }.',
  'The symbol { questionSymbol } indicates that question { questionNumber } references this portion of the passage.':
    'The symbol { questionSymbol } indicates that question { questionNumber } references this portion of the passage.',
  ' The symbol { sentenceSymbol } indicates that the following sentence is referenced in a question.':
    ' The symbol { sentenceSymbol } indicates that the following sentence is referenced in a question.',
  'Beginning of reading passage.': 'Beginning of reading passage.',
  'Beginning of reading passage footnotes.': 'Beginning of reading passage footnotes.',
  'End of reading passage.': 'End of reading passage.',
  'line { lineNumber }': 'line { lineNumber }',
  'lines { lineRange }': 'lines { lineRange }',
  'Run simulation': 'Run simulation',
  Translate: 'Translate',
  Translation: 'Translation',
  translation: 'translation',
  'Translation by { vector }': 'Translation by { vector }',
  Rotate: 'Rotate',
  Rotation: 'Rotation',
  rotation: 'rotation',
  'Rotation by { degrees } about { point }': 'Rotation by { degrees } about { point }',
  'Rotation about { point } by { degrees }': 'Rotation about { point } by { degrees }',
  Reflect: 'Reflect',
  Reflection: 'Reflection',
  reflection: 'reflection',
  'Reflection over the line from { point1 } to { point2 }':
    'Reflection over the line from { point1 } to { point2 }',
  Dilate: 'Dilate',
  Dilation: 'Dilation',
  dilation: 'dilation',
  'Dilation of scale { scale } about { point }': 'Dilation of scale { scale } about { point }',
  'Dilation about { point } by { scale }': 'Dilation about { point } by { scale }',
  Undo: 'Undo',
  'Your transformation must use a { type }.': 'Your transformation must use a { type }.',
  'Use the interactive graph to define a correct transformation.':
    'Use the interactive graph to define a correct transformation.',
  "I don't understand that": "I don't understand that",
  "I couldn't understand those units.": "I couldn't understand those units.",
  'Check your significant figures.': 'Check your significant figures.',
  'That answer is numerically incorrect.': 'That answer is numerically incorrect.',
  'Check your units.': 'Check your units.',
  'Your answer is almost correct, but it is missing a <code>%</code> at the end.':
    'Your answer is almost correct, but it is missing a <code>\\\\%</code> at the end.',
  'Your answer is almost correct, but it needs to be simplified.':
    'Your answer is almost correct, but it needs to be simplified.',
  'Your answer is close, but you may have approximated pi. Enter your answer as a multiple of pi, like <code>12 text{pi}</code> or <code>2/3 text{pi}</code>':
    'Your answer is close, but you may have approximated pi. Enter your answer as a multiple of pi, like <code>12\\\\ \\\\text{pi}</code> or <code>2/3\\\\ \\\\text{pi}</code>',
  'We could not understand your answer. Please check your answer for extra text or symbols.':
    'We could not understand your answer. Please check your answer for extra text or symbols.',
  False: 'False',
  True: 'True',
  No: 'No',
  Yes: 'Yes',
  'None of the above': 'None of the above',
  'Please choose the correct number of answers.': 'Please choose the correct number of answers.',
  "'None of the above' may not be selected when other answers are selected.":
    "'None of the above' may not be selected when other answers are selected.",
  'Keep trying': 'Keep trying',
  'Try again': 'Try again',
  'Correct!': 'Correct!',
  '[Marker for question { number }]': '[Marker for question { number }]',
  '[Circle marker { number }]': '[Circle marker { number }]',
  '[Sentence { number }]': '[Sentence { number }]',
  'Math input box': 'Math input box',
  'Choose { numCorrect } answers:': 'Choose { numCorrect } answers:',
  'Choose all answers that apply:': 'Choose all answers that apply:',
  'Choose 1 answer:': 'Choose 1 answer:',
  'Add highlight': 'Add highlight',
  Plus: 'Plus',
  Minus: 'Minus',
  Negative: 'Negative',
  Multiply: 'Multiply',
  Divide: 'Divide',
  Decimal: 'Decimal',
  Percent: 'Percent',
  'Equals sign': 'Equals sign',
  'Not-equals sign': 'Not-equals sign',
  'Greater than sign': 'Greater than sign',
  'Less than sign': 'Less than sign',
  'Greater than or equal to sign': 'Greater than or equal to sign',
  'Less than or equal to sign': 'Less than or equal to sign',
  'Fraction, with current expression in numerator':
    'Fraction, with current expression in numerator',
  'Fraction, excluding the current expression': 'Fraction, excluding the current expression',
  'Custom exponent': 'Custom exponent',
  Square: 'Square',
  Cube: 'Cube',
  'Square root': 'Square root',
  'Cube root': 'Cube root',
  'Radical with custom root': 'Radical with custom root',
  'Left parenthesis': 'Left parenthesis',
  'Right parenthesis': 'Right parenthesis',
  'Natural logarithm': 'Natural logarithm',
  'Logarithm with base 10': 'Logarithm with base 10',
  'Logarithm with custom base': 'Logarithm with custom base',
  Sine: 'Sine',
  Cosine: 'Cosine',
  Tangent: 'Tangent',
  Pi: 'Pi',
  Theta: 'Theta',
  'Up arrow': 'Up arrow',
  'Right arrow': 'Right arrow',
  'Down arrow': 'Down arrow',
  'Left arrow': 'Left arrow',
  'Navigate right out of a set of parentheses': 'Navigate right out of a set of parentheses',
  'Navigate right out of an exponent': 'Navigate right out of an exponent',
  'Navigate right out of a base': 'Navigate right out of a base',
  'Navigate right into the numerator of a fraction':
    'Navigate right into the numerator of a fraction',
  'Navigate right out of the numerator and into the denominator':
    'Navigate right out of the numerator and into the denominator',
  'Navigate right out of the denominator of a fraction':
    'Navigate right out of the denominator of a fraction',
  Delete: 'Delete',
  Dismiss: 'Dismiss',
  'Remove highlight': 'Remove highlight',
  '(Choice { letter }, Checked, Correct)': '(Choice { letter }, Checked, Correct)',
  '(Choice { letter }, Checked, Incorrect)': '(Choice { letter }, Checked, Incorrect)',
  '(Choice { letter }, Checked)': '(Choice { letter }, Checked)',
  '(Choice { letter }, Correct Answer)': '(Choice { letter }, Correct Answer)',
  '(Choice { letter })': '(Choice { letter })',
  'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z':
    'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
  correct: 'correct',
  incorrect: 'incorrect',
  '(selected)': '(selected)',
});

export default translator;
