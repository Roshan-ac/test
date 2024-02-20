import { deviceType } from "../devicetype";

export interface WatchFullBookingsInterface {
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
  deviceage: string;
  bodycondition: string;
  deviceclassid: number;
  size: string;
  physicalcondition: string[];
  accessories: string[];
}

const WatchBookings = {
  success: true,
  myBookings: {
    id: "LD1707536252",
    timestamp: "2024-02-10T03:37:31.000Z",
    devicename: "Apple Watch Ultra 2 (GPS + Cellular)",
    devicebrandname: "Apple",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Watches/Apple%20Watch%20Ultra%202%20(GPS%20+%20Cellular).webp",
    devicetype: "watch",
    deviceoriginalprice: "35000",
    devicegeneratedprice: "34500",
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
    assignedvendor: "1669011838",
    status: null,
    customersignature: null,
    creditpoints: 30,
    pickupdate: "2024-02-10",
    pickuptime: "04:00 PM - 08:00 PM",
    upino: "",
    bankacno: "",
    bankbeneficiaryname: "",
    bankifsccode: "",
    bankname: "",
    token: "LDWPYQIBUOM992",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    deviceage: "W1",
    bodycondition: "B1",
    deviceclassid: 1,
    size: "49 mm",
    physicalcondition: [],
    accessories: ["A2"],
  },
};
