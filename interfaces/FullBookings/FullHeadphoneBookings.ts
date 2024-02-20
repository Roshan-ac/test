import { deviceType } from "../devicetype";

export interface HeadphoneFullBookingsInterface {
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
  deviceclassid: number;
  accessories: string[];
}

const HeadphoneObject = {
  success: true,
  myBookings: {
    id: "LD1707638692",
    timestamp: "2024-02-11T08:04:52.000Z",
    devicename: "Apple AirPods Max",
    devicebrandname: "Apple",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Headphones/Apple%20AirPods%20Max.webp",
    devicetype: "headphone",
    deviceoriginalprice: "20000",
    devicegeneratedprice: "19500",
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
    pickupdate: "2024-02-12",
    pickuptime: "01:00 PM - 04:00 PM",
    upino: "",
    bankacno: "",
    bankbeneficiaryname: "",
    bankifsccode: "",
    bankname: "",
    token: "LDAPJ0V7FGS0RM",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    deviceage: "W1",
    deviceclassid: 5,
    accessories: ["A3", "A1", "A4"],
  },
};
