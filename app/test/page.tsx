import { getCurrentUser } from "@/lib/session";

const Page = async () => {
  const user = await getCurrentUser();
  return <div>{JSON.stringify(user, null, 2)}</div>;
};

export default Page;
