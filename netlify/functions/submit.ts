import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { name, favouriteColour } = JSON.parse(event.body);

  console.log({ name, favouriteColour });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favouriteColour,
      message: `Sup! My name is ${name} and I absolutely love the colour ${favouriteColour}.`,
    }),
  };
};
