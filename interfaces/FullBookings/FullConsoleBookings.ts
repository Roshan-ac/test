import { deviceType } from "../devicetype";

export interface ConsoleFullBookingsInterface {
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
  deviceage: string;
  bodycondition: string;
  deviceclassid: number;
  extracontrollers: string;
  numberofcds: string;
  physicalcondition: string[];
}

const ConsoleObject = {
  success: true,
  myBookings: {
    id: "LD1707638084",
    timestamp: "2024-02-11T07:54:43.000Z",
    devicename: "Xbox 360 S 4 GB",
    devicebrandname: "Microsoft",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Consoles/Xbox%20360%20S%204%20GB.webp",
    devicetype: "console",
    deviceoriginalprice: "3600",
    devicegeneratedprice: "6900",
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
    token: "LDCP6S16TTV08T",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    deviceage: "W1",
    bodycondition: "B1",
    deviceclassid: 5,
    extracontrollers: "E3",
    numberofcds: "CD3",
    physicalcondition: ["P0"],
  },
};
