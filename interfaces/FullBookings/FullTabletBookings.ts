import { deviceType } from "../devicetype";

export interface TabletFullBookingsInterface {
  id: string;
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
  physicalcondition: string[];
  accessoriesunavailable: string[];
  screencondition: string;
  devicestorage: string;
  deviceram: null | string;
  warrantystatus: string;
  bodycondition: string;
  deviceclassid: number;
}

const TabletObject = {
  success: true,
  myBookings: [
    {
      id: "LD1707631007",
      timestamp: "2024-02-11T05:56:47.000Z",
      devicename: "iPad Pro 12.9 inch 6th Generation M2 WiFi 2022",
      devicebrandname: "Apple",
      deviceimg:
        "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Tablets/iPad%20Pro%2012.9%20inch%206th%20Generation%20M2%20WiFi%202022.webp",
      devicetype: "tablet",
      deviceoriginalprice: "70000",
      devicegeneratedprice: "24200",
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
      creditpoints: 80,
      pickupdate: "2024-02-13",
      pickuptime: "01:00 PM - 04:00 PM",
      upino: "",
      bankacno: "",
      bankbeneficiaryname: "",
      bankifsccode: "",
      bankname: "",
      token: "LDTPHJ86BAZRSV",
      failedcustomerexpectedamt: null,
      failedfinalofferedamt: null,
      cashboy: null,
      isCompleted: 1,
      isCallRequested: 0,
      desposition: null,
      createdBy: null,
      physicalcondition: ["P0", "P4", "P13"],
      accessoriesunavailable: ["A2"],
      screencondition: ["S5"],
      devicestorage: "256",
      deviceram: null,
      warrantystatus: "W4",
      bodycondition: "B3",
      deviceclassid: 98,
    },
  ],
};
