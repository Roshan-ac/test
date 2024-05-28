import { deviceType } from "../devicetype";

export interface MobileFullBookingsInterface {
  id: number;
  timestamp: string;
  devicename: string;
  devicebrandname: string;
  deviceimg: string;
  devicetype: deviceType;
  deviceoriginalprice: number;
  devicegeneratedprice: number;
  devicefinalprice: string | null;
  deviceimei: string | null;
  ownername: string;
  owneraddress: string;
  city: string;
  ownerphoneno: string;
  owneremail: string;
  pincode: number;
  paymentmode: string;
  ordertype: string;
  assignedvendor: string | null;
  status: string | null;
  customersignature: string | null;
  creditpoints: number;
  pickupdate: string;
  pickuptime: string;
  upino: string;
  bankacno: string;
  bankbeneficiaryname: string;
  bankifsccode: string;
  bankname: string;
  token: string;
  failedcustomerexpectedamt: string | null;
  failedfinalofferedamt: string | null;
  cashboy: string | null;
  isCompleted: number;
  isCallRequested: number;
  desposition: string | null;
  createdBy: string | null;
  physicalcondition: string[];
  accessoriesunavailable: string[];
  screencondition: string;
  devicestorage: string;
  deviceram: string | null;
  warrantystatus: string;
  bodycondition: string;
  deviceclassid: number;
}


