import { deviceType } from "../devicetype";

export interface LaptopFullBookingsInterface {
  id: number;
  timestamp: string;
  devicename: string;
  devicebrandname: string;
  deviceimg: string;
  devicetype: deviceType;
  deviceoriginalprice: null | number;
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
  devicestorage: string;
  deviceram: string;
  deviceprocessor: string;
  screensize: string;
  laptopage: string;
  bodycondition: string;
  deviceclassid: number;
  accessoriesunavailable: string[];
}

const LaptopObject = {
  id: "LD1707634711",
  timestamp: "2024-02-11T06:58:30.000Z",
  devicename: "Acer Aspire Series",
  devicebrandname: "Acer",
  deviceimg:
    "https://cashkr.blr1.cdn.digitaloceanspaces.com/Products/Laptops/Aspire%20Series.webp",
  devicetype: "laptop",
  deviceoriginalprice: null,
  devicegeneratedprice: "18500",
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
  pickupdate: "2024-02-13",
  pickuptime: "01:00 PM - 04:00 PM",
  upino: "",
  bankacno: "",
  bankbeneficiaryname: "",
  bankifsccode: "",
  bankname: "",
  token: "LDLP2D880E3R50",
  failedcustomerexpectedamt: null,
  failedfinalofferedamt: null,
  cashboy: null,
  isCompleted: 1,
  isCallRequested: 0,
  desposition: null,
  createdBy: null,
  physicalcondition: ["P0"],
  devicestorage: "1 TB HDD",
  deviceram: "12",
  deviceprocessor: "AMD Ryzen 7 6th Gen",
  screensize: "S4",
  laptopage: "A1",
  bodycondition: "B1",
  deviceclassid: 3,
};
