import { deviceType } from "../devicetype";

export interface TvFullBookingsInterface {
  id: number;
  timestamp: string;
  devicename: string;
  devicebrandname: string;
  deviceimg: string;
  devicetype: deviceType;
  deviceoriginalprice: number;
  devicegeneratedprice: number;
  devicefinalprice: null | number;
  deviceimei: null | string;
  ownername: string;
  owneraddress: string;
  city: null | string;
  ownerphoneno: string;
  owneremail: string;
  pincode: string;
  paymentmode: string; // Cash | " "
  ordertype: string;
  assignedvendor: null | string;
  status: null | string;
  customersignature: null | string;
  creditpoints: number;
  pickupdate: string;
  pickuptime: string;
  upino: string;
  bankacno: string;
  bankbeneficiaryname: string;
  bankifsccode: string;
  bankname: string;
  token: string;
  failedcustomerexpectedamt: null | number;
  failedfinalofferedamt: null | number;
  cashboy: null | string;
  isCompleted: 0 | 1;
  isCallRequested: 0 | 1;
  desposition: null | string;
  createdBy: null | string;
  bodycondition: string;
  screencondition: string;
  screentype: string;
  resolution: string;
  deviceType: string;
  deviceclassid: number;
}

const TvBookings = {
  success: true,
  myBookings: {
    id: "LD1707638854",
    timestamp: "2024-02-11T08:07:33.000Z",
    devicename: "Acer 65 To 80 Inches TV",
    devicebrandname: "Acer",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/TVs/Acer%20TV.webp",
    devicetype: "tv",
    deviceoriginalprice: "7000",
    devicegeneratedprice: "200",
    devicefinalprice: null,
    deviceimei: null,
    ownername: "Roshan Acharya",
    owneraddress: "Alok Nagar, baneshwor, Guna airlines, pune, 400005",
    city: null,
    ownerphoneno: "919812345678",
    owneremail: "acharyaresham354@gmail.com",
    pincode: " 400005",
    paymentmode: "Cash",
    ordertype: "online",
    assignedvendor: null,
    status: null,
    customersignature: null,
    creditpoints: 100,
    pickupdate: "2024-02-12",
    pickuptime: "01:00 PM - 04:00 PM",
    upino: "",
    bankacno: "",
    bankbeneficiaryname: "",
    bankifsccode: "",
    bankname: "",
    token: "LDTPTY01MYHDUC",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    bodycondition: "B1",
    screencondition: "S1",
    screentype: "T3",
    resolution: "R4",
    deviceType: "D3",
    deviceclassid: 1,
  },
};
