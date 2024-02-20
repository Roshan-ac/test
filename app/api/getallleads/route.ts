const { BACKEND_API } = process.env;

const GET = async () => {
  try {
    const res = await fetch(`${BACKEND_API}/getAllLeads`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
      },
    });

    const data = await res.json();
    // console.log(data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { GET };
