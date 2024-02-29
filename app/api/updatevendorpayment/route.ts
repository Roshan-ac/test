const { BACKEND_API } = process.env;

const POST = async (req: Request) => {
  const { id, vendorid, action } = await req.json();
  try {
    const res = await fetch(`${BACKEND_API}/updateVendorPayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
      },
      body: JSON.stringify({
        paymentid: id,
        vendorid: vendorid,
        action: action,
      }),
    });
    const data = await res.json();
    console.log(data, res);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
