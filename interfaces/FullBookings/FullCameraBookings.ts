import { deviceType } from "../devicetype";

export interface CameraFullBookingsInterface {
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
  accessories: string[];
  deviceage: string;
  bodycondition: string;
  lens: string;
  deviceclassid: number;
}

const CameraObject = {
  success: true,
  myBookings: {
    id: "LD1707651351",
    timestamp: "2024-02-11T11:35:51.000Z",
    devicename: "Sony Alpha A7r",
    devicebrandname: "Sony",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Cameras/Sony%20Alpha%20A7r.webp",
    devicetype: "camera",
    deviceoriginalprice: "32500",
    devicegeneratedprice: "34300",
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
    token: "LDCPCHBL9LE3MR",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    accessories: ["A1", "A3", "A4"],
    deviceage: "W1",
    bodycondition: "B1",
    lens: "1800",
    deviceclassid: 1,
  },
};
