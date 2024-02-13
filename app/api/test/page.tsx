import { getCurrentUser } from "@/lib/session";

const Page = async () => {
  const user = await getCurrentUser();
  console.log(user);

  return <div>{JSON.stringify(user, null, 2)}</div>;
};

export default Page;
