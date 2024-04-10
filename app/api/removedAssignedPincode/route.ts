const { BACKEND_API } = process.env;

const POST = async (req: any) => {
  const { pincodes, vendorId } = await req.json();
  console.log(pincodes,vendorId)
  try {
    const res = await fetch(
      `${BACKEND_API}/removedAssignedPincode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
        },
        cache: "no-cache",
        body: JSON.stringify({
          pincodes: pincodes,
          vendorid: vendorId,
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
