import { deviceType } from "../devicetype";

export interface MacFullBookingsInterface {
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
  bodycondition: string;
  deviceclassid: number;
  macage: string;
  ram: string;
  storage: string;
  physicalcondition: string[];
  accessories: string[];
}

const MacBookings = {
  id: "LD1707637666",
  timestamp: "2024-02-11T07:47:46.000Z",
  devicename: "MacBook Air M1 13-inch 2020",
  devicebrandname: "MacBook Air",
  deviceimg:
    "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Macs/MacBook%20Air%20M1%2013-inch%202020.webp",
  devicetype: "mac",
  deviceoriginalprice: "65000",
  devicegeneratedprice: "65000",
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
  creditpoints: 100,
  pickupdate: "2024-02-13",
  pickuptime: "01:00 PM - 04:00 PM",
  upino: "",
  bankacno: "",
  bankbeneficiaryname: "",
  bankifsccode: "",
  bankname: "",
  token: "LDMPOWOKWIGR7X",
  failedcustomerexpectedamt: null,
  failedfinalofferedamt: null,
  cashboy: null,
  isCompleted: 1,
  isCallRequested: 0,
  desposition: null,
  createdBy: null,
  bodycondition: "B1",
  deviceclassid: "2",
  macage: "W1",
  ram: "16",
  storage: "512",
  physicalcondition: ["P0"],
};
