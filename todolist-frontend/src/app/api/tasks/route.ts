export const GET = async (req: Request, res: Response) => {
  try {
    const response = await fetch("http://localhost:3001/tasks");

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({
      message: "Something went wrong doing the request to the backend",
      error: JSON.stringify(error),
    });
  }
};

// export const PUT = async (req: Request) => {
//   console.log("GET");
// };

export const POST = async (req: Request, res: Response) => {
  try {
    console.log("FIRST LOG");

    const reqData = await req.json();

    console.log("reqData", reqData);

    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(reqData),
    });

    console.log("response", response);

    const data = await response.json();

    console.log("data", data);

    return Response.json(data);
  } catch (error) {
    return Response.json({
      message: "Something went wrong doing the request to the backend",
      error: JSON.stringify(error),
    });
  }
};
