const { BACKEND_API } = process.env;
const POST = async (req: any) => {
  const { leadId, devicetype } = await req.json();

  console.log(leadId, devicetype);
  try {
    const response = await fetch(
      `${BACKEND_API}/get${devicetype}BookingsFullDetail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NDg2MzgxNjQiLCJuYW1lIjoiQ3VzdDEiLCJwaG9uZSI6IjkzOTMzNSIsImVtYWlsIjoiY3VzdDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTVlZdFlMQ2laS3dsYkFsejNnVXEzLkRHLlhjSzRyTWNPSTludk4ySUVReENlMnloMFJiRDIiLCJhZGRyZXNzIjoiQ2Fyb2wgYmFnaCwgRGVsaGkifQ.NjzEYWpEcA2e83wGugFadmTfS1UmWF_6FK_Be0a-lrE",
        },
        body: JSON.stringify({
          leadid: leadId,
        }),
      }
    );

    if (!response.ok) {
      console.log(response);
    }

    const data = await response.json();
    // console.log(data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    // console.error(error);
    return new Response(JSON.stringify(error));
  }
};

export { POST };
