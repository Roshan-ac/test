import { NextRequest } from "next/server";

const { BACKEND_API } = process.env;

const GET = async (request: NextRequest) => {

  try {
    const res = await fetch(`${BACKEND_API}/getAdminInfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authororization: key,
      },
    });
  } catch (error) {
    // console.log(error);
    return error
  }
};

export { GET };
