// export const GET = async (req: Request, res: Response) => {
//   console.log("GET REQUEST");
// };

// export const PUT = async (req: Request) => {
//   console.log("GET");
// };

export const POST = async (req: Request, res: Response) => {
  console.log("POST REQUEST");

  return Response.json({
    data: "test",
  });
};
