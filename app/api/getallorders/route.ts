const { BACKEND_API } = process.env;
const createQueryString = (params) => {
  return Object.entries(params)
    .filter(([key, value]) => value !== undefined && value !== "")
    .map(
      ([key, value]: [string, string]) => `${key}=${encodeURIComponent(value)}`,
    )
    .join("&");
};
const POST = async (req: any) => {
  const {
    orderPage,
    leadPage,
    search,
    category,
    city,
    status,
    fromDate,
    toDate,
  } = await req.json();
  try {
    const queryString = createQueryString({
      orderPage,
      leadPage,
      search,
      city,
      status,
      category,
      fromDate,
      toDate,
    });
    console.log(queryString);
    const res = await fetch(`${BACKEND_API}/getAllOrders?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZnVsbE5hbWUiOiJJYnJhaGltIFN1cnlhIiwidXNlcm5hbWUiOiJpYnJhaGltLnN1cnlhIiwiZW1haWwiOiJpYnJhaGltLnN1cnlhQGNhc2hrci5jb20iLCJyb2xlIjoiQWRtaW4ifQ.bVexhurmhuNwMTmHSUs86R3lpL6eSCBEcEWqsBsoReM",
      },
      cache: "no-cache",
    });

    const data = await res.json();
    console.log(data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
