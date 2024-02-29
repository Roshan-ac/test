import { CompleteMyLeadInterface } from "@/interfaces/completeMyLead/completeMyLeadInterface";

const { BACKEND_API } = process.env;

const POST = async (req: any) => {
  const {
    request,
  }: {
    request: CompleteMyLeadInterface;
  } = await req.json();
  try {
    console.log(request);
    const res = await fetch(`${BACKEND_API}/completeMyLead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
      },
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      console.log(res);
    }
    const result = await res.json();
    console.log(result);
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
