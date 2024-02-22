const { BACKEND_API } = process.env;

const POST = async (req: any) => {
  const {
    leadid,
    vendorid,
    creditpoints,
    statuscode,
    statustype,
    label,
    description,
  } = await req.json();
  console.log(leadid,
    vendorid,
    creditpoints,
    statuscode,
    statustype,
    label,
    description);
  try {
    const res = await fetch(`${BACKEND_API}/setLeadStatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
      },
      body: JSON.stringify({
        leadid: leadid,
        vendorid: vendorid,
        statustype: statustype,
        statuscode: statuscode,
        creditpoints: creditpoints,
      }),
    });

    const data = await res.json();
    if (data.success) {
      const res = await fetch(`${BACKEND_API}/updateVendorCreditLogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
        },
        body: JSON.stringify({
          vendorid: vendorid,
          creditpoints: creditpoints,
          label: label,
          description: description,
        }),
      });
      const data = await res.json();
      return new Response(JSON.stringify(data));
    } else {
      return new Response(JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
