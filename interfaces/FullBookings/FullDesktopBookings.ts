import { deviceType } from "../devicetype";

export interface DesktopFullBookingsInterface {
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
  devicestorage: string;
  deviceram: string;
  deviceclassid: number;
  deviceprocessor: string;
  graphiccard: string;
  screensize: string;
  screentype: string;
  physicalcondition: string[];
}

const DesktopObject = {
  success: true,
  myBookings: {
    id: "LD1707638760",
    timestamp: "2024-02-11T08:06:00.000Z",
    devicename: " assembled desktop",
    devicebrandname: "Assembled",
    deviceimg:
      "https://cashkr.blr1.cdn.digitaloceanspaces.com/Brands/sell-branded-desktop.webp",
    devicetype: "desktop",
    deviceoriginalprice: "2000",
    devicegeneratedprice: "44200",
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
    creditpoints: 50,
    pickupdate: "2024-02-12",
    pickuptime: "10:00 AM - 1:00 PM",
    upino: "",
    bankacno: "",
    bankbeneficiaryname: "",
    bankifsccode: "",
    bankname: "",
    token: "LDDTPLEAYUN5CEH",
    failedcustomerexpectedamt: null,
    failedfinalofferedamt: null,
    cashboy: null,
    isCompleted: 1,
    isCallRequested: 0,
    desposition: null,
    createdBy: null,
    devicestorage: "1 TB HDD",
    deviceram: "1 TB HDD",
    deviceclassid: 2,
    deviceprocessor: "AMD Ryzen 7 6th Gen",
    graphiccard: "1200",
    screensize: "40 Inches To 80 Inches",
    screentype: "Curved",
    physicalcondition: ["P0"],
  },
};
