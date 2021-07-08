export const schema = {
  title: "quiz data",
  description:
    "the questions, answers and study references for a JavaScript quiz",
  type: "object",
  required: ["questions"],

  properties: {
    greeting: {
      type: "string",
      description: "a friendly greeting for the user",
    },

    questions: {
      type: "array",
      description: "the array of questions in the quiz",

      items: {
        type: "object",
        description: "a single question in the quiz",
        required: ["question", "answered", "answers"],

        properties: {
          question: {
            type: "string",
            description: "the question a user needs to answer",
          },
          answered: {
            type: "boolean",
            description: "whether or not the user has answered this question",
          },
          answers: {
            type: "array",
            description: "the possible answers for this question",

            items: {
              type: "object",
              required: ["text", "correct", "selected"],

              properties: {
                text: {
                  type: "string",
                  description: "the text a user sees for this answer",
                },
                correct: {
                  type: "boolean",
                  description: "whether or not this is a correct answer",
                },
                selected: {
                  type: "boolean",
                  description: "has the user selected this answer",
                },
              },
            },
          },

          links: {
            type: "array",
            items: {
              type: "object",
              required: ["url"],

              properties: {
                url: {
                  type: "string",
                  description:
                    "the url a student can open to learn more about this question",
                },
                text: {
                  type: "string",
                  description:
                    "the text to display for this question. if missing, the url is displayed",
                },
              },
            },
          },
        },
      },
    },
    results: {
      type: "object",
      description: "store all the results of hte test",
      required: [
        "totalQuestions",
        "attempts",
        "correctAnswers",
        "wrongAnswers",
        "percentage",
        "totalScore",
      ],
      properties: {
        totalQuestions: {
          type: "number",
          description: "total of questions in the test",
        },
        attempts: {
          type: "number",
          description: "number of tentative in the test",
        },
        correctAnswers: {
          type: "number",
          description: "total of user's correct answers",
        },
        wrongAnswers: {
          type: "number",
          description: "total of user's wrong answers",
        },
        percentage: {
          type: "number",
          description: "percentage of correct answers",
        },
        totalScore: {
          type: "number",
          description:
            "total of user's correct answer in based on number of questions",
        },
      },
    },
  },
};
