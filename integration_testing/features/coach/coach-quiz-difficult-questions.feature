Feature: Coach reviews quiz to discover difficult questions
Coach needs to be able to determine which questions in a quiz are difficult
# START testing this scenario with a FRESH DB (make a copy of the current if you want to reuse it later), and use the `kolibri manage importusers your-csv-file.csv` command to import a set of users for this case.
# Prepare two browsers, or two windows/tabs of the same browser, one of them being incognito/private mode, in order to sign in into one as a learner user, and as a coach in the other
  
  Background:
    Given I have both sessions visible in two browser windows/tabs (signed into one as learner, and in the other as coach)
      And there are 3 learners enrolled in the class <class>: <learner1>, <learner2> and <learner3>
      And there is quiz <quiz> with 1 exercise <exercise> assigned to class <class>
      And all 3 learners opened the exercise <exercise>

  Scenario: 1 learner gives incorrect answer
    When I as a <learner1> give incorrect answer to question <question> in the <exercise>
    Then I as a coach <coach> go to *Coach > Reports > Quizzes > '<quiz>' > Difficult questions* subtab
    	And I see the question <question> under the *Question* column
    	And I see *1 of 1 needs help* under the *Help needed* column

  Scenario: 2 learners give incorrect answers
    When I as a <learner1> give incorrect answer to question <question> in the <exercise>
      And I as a <learner2> also give incorrect answer to question <question> in the <exercise>
    Then I as a coach <coach> go to *Coach > Reports > Quizzes > '<quiz>' > Difficult questions* subtab
    	And I see the question <question> under the *Question* column
    	And I see *2 of 2 need help* under the *Help needed* column

  Scenario: 2 learners give correct answers
    When I as a <learner1> give correct answer to question <question> in the <exercise>
      And I as a <learner2> also give correct answer to question <question> in the <exercise>
    Then I as a coach <coach> go to *Coach > Reports > Quizzes > '<quiz>' > Difficult questions* subtab
    	And I don't see any question under the *Question* column

Examples:
| class | quiz    | exercise | question   |
| First | Conting | Under 10 | Question 1 |
