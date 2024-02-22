const { BACKEND_API } = process.env;

const POST = async (req: any) => {
  const { leadid, vendorid, newPickupDate, newPickupTime, deviceType } =
    await req.json();
  console.log(leadid, vendorid, newPickupDate, newPickupTime, deviceType);
  try {
    const res = await fetch(`${BACKEND_API}/reschedulePickupCustomer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
      },
      body: JSON.stringify({
        leadid: leadid,
        newPickupDate: newPickupDate,
        newPickupTime: newPickupTime,
        deviceType: deviceType,
      }),
    });
    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
