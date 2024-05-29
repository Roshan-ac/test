const { BACKEND_API } = process.env;
const POST = async (req: any) => {
  const { leadid } = await req.json();
  try {
    const response = await fetch(`${BACKEND_API}/viewDeviceConditionImages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",

        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NDg2MzgxNjQiLCJuYW1lIjoiQ3VzdDEiLCJwaG9uZSI6IjkzOTMzNSIsImVtYWlsIjoiY3VzdDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTVlZdFlMQ2laS3dsYkFsejNnVXEzLkRHLlhjSzRyTWNPSTludk4ySUVReENlMnloMFJiRDIiLCJhZGRyZXNzIjoiQ2Fyb2wgYmFnaCwgRGVsaGkifQ.NjzEYWpEcA2e83wGugFadmTfS1UmWF_6FK_Be0a-lrE",
      },
      body: JSON.stringify({
        leadid: leadid,
      }),
      cache: "no-cache",
    });

    const data = await response.json();
    console.log(leadid,data)
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export { POST };
