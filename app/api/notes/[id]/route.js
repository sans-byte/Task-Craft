export async function GET(request, response) {
  console.log(response);
  return new Response("hello world", {
    status: 200,
  });
}
