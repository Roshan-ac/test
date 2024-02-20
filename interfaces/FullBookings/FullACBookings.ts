import { deviceType } from "../devicetype";

export interface ACFullBookingsInterface {
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
  pincode: number;
  paymentmode: string; //Cash | " "
  ordertype: string;
  assignedvendor: null | string;
  status: null | string; // Note the union with `null`
  customersignature: null | string; // Note the union with `null`
  creditpoints: number;
  pickupdate: number;
  pickuptime: string;
  upino: string;
  bankacno: string;
  bankbeneficiaryname: string;
  bankifsccode: string;
  bankname: string;
  token: string;
  failedcustomerexpectedamt: null | number; // Note the union with `null`
  failedfinalofferedamt: null | number; // Note the union with `null`
  cashboy: null | string; // Note the union with `null`
  isCompleted: 0 | 1; // Assuming this is a boolean value represented as 0 or 1
  isCallRequested: 0 | 1; // Assuming this is a boolean value represented as 0 or 1
  desposition: null | string; // Note the union with `null`
  createdBy: null | string; // Note the union with `null`
  deviceclassid: number;
}

const obj1 = {
  success: true,
  myBookings: {
    id: "LD1707654539",
    timestamp: "2024-02-11T12:28:58.000Z",
    devicename: "Blue Star Split AC",
    devicebrandname: "Blue Star",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/ACs/Blue%20Star%20Split%20AC.webp",
    devicetype: "ac",
    deviceoriginalprice: "3000",
    devicegeneratedprice: "3000",
    devicefinalprice: null,
    deviceimei: null,
    ownername: "Roshan Acharya",
    owneraddress: "Alok Nagar, baneshwor, Guna airlines, pune, 400005",
    city: null,
    ownerphoneno: "919812345678",
    owneremail: "acharyaresham354@gmail.com",
    pincode: "121212",
    paymentmode: "Cash",
    ordertype: "online",
    assignedvendor: null,
    status: null,
    customersignature: null,
    creditpoints: 30,
    pickupdate: "2024-02-13",
    pickuptime: "01:00 PM - 04:00 PM",
    upino: "",
    bankacno: "",
    bankbeneficiaryname: "",
    bankifsccode: "",
    bankname: "",
    token: "LDAP4LVBJ0RZEI",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    deviceclassid: 2,
  },
};
