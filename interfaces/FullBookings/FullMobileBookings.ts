import { deviceType } from "../devicetype";

export interface MobileFullBookingsInterface {
  id: number;
  timestamp: string;
  devicename: string;
  devicebrandname: string;
  deviceimg: string;
  devicetype: deviceType;
  deviceoriginalprice: number;
  devicegeneratedprice: number;
  devicefinalprice: string | null;
  deviceimei: string | null;
  ownername: string;
  owneraddress: string;
  city: string;
  ownerphoneno: string;
  owneremail: string;
  pincode: number;
  paymentmode: string;
  ordertype: string;
  assignedvendor: string | null;
  status: string | null;
  customersignature: string | null;
  creditpoints: number;
  pickupdate: string;
  pickuptime: string;
  upino: string;
  bankacno: string;
  bankbeneficiaryname: string;
  bankifsccode: string;
  bankname: string;
  token: string;
  failedcustomerexpectedamt: string | null;
  failedfinalofferedamt: string | null;
  cashboy: string | null;
  isCompleted: number;
  isCallRequested: number;
  desposition: string | null;
  createdBy: string | null;
  physicalcondition: string[];
  accessoriesunavailable: string[];
  screencondition: string[];
  devicestorage: string;
  deviceram: string | null;
  warrantystatus: string;
  bodycondition: string;
  deviceclassid: number;
}

const MobileBookings = {
  success: true,
  myBookings: [
    {
      id: "LD1707456402",
      timestamp: "2024-02-09T05:26:41.000Z",
      devicename: "Apple iPhone 15 Plus",
      devicebrandname: "Apple",
      deviceimg:
        "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Phones/Apple%20iPhone%2015.webp",
      devicetype: "mobile",
      deviceoriginalprice: "8000",
      devicegeneratedprice: "0",
      devicefinalprice: null,
      deviceimei: null,
      ownername: "Roshan Acharya",
      owneraddress: "koteshwor 32, kathamandu, Nepal",
      city: "",
      ownerphoneno: "919812345678",
      owneremail: "acharyaresham354@gmail.com",
      pincode: "121212",
      paymentmode: "Cash",
      ordertype: "online",
      assignedvendor: "1669011838",
      status: null,
      customersignature: null,
      creditpoints: 90,
      pickupdate: "2024/02/09",
      pickuptime: "4:00 PM - 06:00 PM",
      upino: "",
      bankacno: "",
      bankbeneficiaryname: "",
      bankifsccode: "",
      bankname: "",
      token: "CK-MO-NAN-486591696592720",
      failedcustomerexpectedamt: null,
      failedfinalofferedamt: null,
      cashboy: null,
      isCompleted: 1,
      isCallRequested: 0,
      desposition: null,
      createdBy: null,
      physicalcondition: [],
      accessoriesunavailable: ["A1", "A2", "A3", "A4"],
      screencondition: ["S1"],
      devicestorage: "256",
      deviceram: "null",
      warrantystatus: "W1",
      bodycondition: "B1",
      deviceclassid: 13,
    },
  ],
};
