import { db } from "@/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();
  const id = data.id;
  const emailAddress = data.email_address[0].email_address;
  const firstName = data.first_name;
  const lastName = data.last_name;
  const imageUrl = data.image_url;

  await db.user.create({
    data: {
      id: id,
      emailAddress: emailAddress,
      firstName: firstName,
      lastName: lastName,
      imageUrl: imageUrl,
    },
  });
  console.log("clerk webhook received", data);
  return new Response("Webhook received", { status: 200 });
};
