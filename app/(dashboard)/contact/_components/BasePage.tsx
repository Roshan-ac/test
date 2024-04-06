"use client";
import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import Recycle from "./Recycle";
import Enterprise from "./Enterprise";

export type MessageInterface = {
  success: boolean;
  pagelimit: number;
  data: {
    id: string;
    fullname: string;
    email: string;
    category: string;
    date: string;
  }[];
};
const BasePage = () => {
  const [message, setMessage] = useState<MessageInterface>();
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/getMessage");
      const invoice = await response.json();
      setMessage(invoice)
    })();
  }, []);
  console.log(message);
  return (
    <div>
      <Notifications />
      <Recycle message={message} />
    </div>
  );
};

export default BasePage;
