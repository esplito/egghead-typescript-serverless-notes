# Notes

This is from Jason Lengstorf's course [Create a TypeScript Powered Serverless React Application](https://egghead.io/courses/create-a-typescript-powered-serverless-react-application-cf0acfbf), but with my own notes.

Github repo: https://github.com/jlengstorf/egghead-serverless-typescript

When running `netlify dev` (shorthand: `ntl dev`) it will auto-detect that we have a vite-server running. It will also detect that we have netlify functions and will proceed with running that on another port. We can access it by navigating to:

```
http://localhost:8888/.netlify/functions/<name of function file>
```

The output returned from that function will be shown.

To test the serverless functions that take arguments we can do a post request using curl:

```
curl -X POST -d '{"name": "Test name", "favouriteColour": "purple"}' http://localhost:8888/.netlify/functions/submit
```
