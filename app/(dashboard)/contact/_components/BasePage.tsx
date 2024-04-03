import React from "react";
import Notifications from "./Notifications";
import Recycle from "./Recycle";
import Enterprise from "./Enterprise";
type InvoiceInterface ={
    success: boolean;
    pagelimit: number;
    data: {
      id: string;
      orderDate:string;
      title:string;
      status:string
    }[];
}
const BasePage = () => {
  return (
    <div>
      <Notifications />
      <Recycle />
      <Enterprise />
    </div>
  );
};

export default BasePage;
