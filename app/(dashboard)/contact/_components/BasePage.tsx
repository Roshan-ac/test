"use client";
import React, { useEffect, useState } from "react";
import Recycle from "./Recycle";

export type MessageInterface = {
  success: boolean;
  pagelimit: number;
  data: {
    id: number;
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
      setMessage(invoice);
    })();
  }, []);
  return (
    <div>
      <Recycle message={message} />
    </div>
  );
};

export default BasePage;
