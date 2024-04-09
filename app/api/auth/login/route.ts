const { BACKEND_API } = process.env;

const POST = async (req: Request) => {
  const { username, password } = await req.json();

  try {
    const res = await fetch(`${BACKEND_API}/loginAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NDg2MzgxNjQiLCJuYW1lIjoiQ3VzdDEiLCJwaG9uZSI6IjkzOTMzNSIsImVtYWlsIjoiY3VzdDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTVlZdFlMQ2laS3dsYkFsejNnVXEzLkRHLlhjSzRyTWNPSTludk4ySUVReENlMnloMFJiRDIiLCJhZGRyZXNzIjoiQ2Fyb2wgYmFnaCwgRGVsaGkifQ.NjzEYWpEcA2e83wGugFadmTfS1UmWF_6FK_Be0a-lrE",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export { POST };
