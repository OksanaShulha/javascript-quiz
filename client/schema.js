export const schema = {
  title: 'starter data',
  description: 'some dummy data so the demo starter code will work',
  type: 'object',
  properties: {
    greeting: {
      type: 'string',
      description: 'a friendly greeting to be displayed in each page',
    },
  },
  required: ['greeting'],
};
