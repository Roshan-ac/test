const { BACKEND_API } = process.env;

const POST = async (req: any) => {
  const { devicetype, pincode } = await req.json();
  try {
    const res = await fetch(
      `${BACKEND_API}/getAllVendorsByPincodeAndDevicetype`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
        },
        cache: "no-cache",
        body: JSON.stringify({
          pincode: pincode,
          devicetype: devicetype,
        }),
      },
    );

    const data = await res.json();

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
