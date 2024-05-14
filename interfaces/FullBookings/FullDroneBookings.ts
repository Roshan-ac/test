import { deviceType } from "../devicetype";

export interface DroneFullBookingsInterface {
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
  pincode: string; // Changed to string as per the provided data
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
  accessories: string[];
}

const DroneObject = {
  success: true,
  myBookings: {
    id: "LD1707638800",
    timestamp: "2024-02-11T08:06:39.000Z",
    devicename: "DJI Mavic Air 2",
    devicebrandname: "DJI",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Drones/Mavic%20Air%202.webp",
    devicetype: "drone",
    deviceoriginalprice: "2000",
    devicegeneratedprice: "2000",
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
    creditpoints: 30,
    pickupdate: "2024-02-13",
    pickuptime: "04:00 PM - 08:00 PM",
    upino: "",
    bankacno: "",
    bankbeneficiaryname: "",
    bankifsccode: "",
    bankname: "",
    token: "LDDPYV8L2NB694",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    deviceage: "W1",
    bodycondition: "B1",
    deviceclassid: 3,
  },
};
