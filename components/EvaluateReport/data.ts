import { deviceType } from "@/interfaces/devicelist";

// type issueTypes = bodycondition || screencondition ||  accessoriesunavailable || cameralens;

// interface EvaluationProps {
//   devicetype: deviceType;
//   issues: {};
// }

// interface IssuesInterface {
//   type : issueTypes;
// }

interface FormData {
  bodycondition: string;
  physicalcondition: string[];
  screencondition: string[];
  accessoriesunavailable: string[];
  warrentystatus: string;
}

const evaluateData = [
  {
    devicetype: "mobile",
    issues: {},
  },
];

const mobileIssues = [
  {
    issuetype: "bodycondition",
    details: [{}],
  },
];
