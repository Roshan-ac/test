import { Label } from "@/components/ui/label";
import { MacFullBookingsInterface } from "@/interfaces/FullBookings/FullMacBookings";

const MacReport = ({ formData }: { formData: MacFullBookingsInterface }) => {
  const { macage, physicalcondition, storage,ram, bodycondition, accessoriesunavailable } =
    formData;

  const accessoriesAvailable = ["A1", "A2", "A3"].filter(
    (item) => !accessoriesunavailable?.includes(item),
  );
  console.log(accessoriesAvailable);

  return (
    <div className="flex flex-col space-y-6">
          {ram && ram !== "null" && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Ram : </span>
            <span className="inline-block w-full">
              {ram}
              {"GB"}
            </span>
          </Label>
        )}
        {storage && storage !== "null" && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Storage : </span>
            <span className="inline-block w-full">
              {storage}
              {"GB"}
            </span>
          </Label>
        )}
      <Label htmlFor="terms" className=" flex w-full space-x-4  ">
        <span className="inline-block w-[40%]">Device Age : </span>
        <span className="inline-block w-full">
          {macage == "W1"
            ? "0 to 3 Months"
            : macage == "W2"
              ? "3 to 6 Months"
              : macage == "W3"
                ? "6 to 11 Months"
                : "above 11 Months"}
        </span>
      </Label>
      <Label htmlFor="terms" className=" flex w-full space-x-4  ">
        <span className="inline-block w-[40%]">Body Condition : </span>
        <span className="inline-block w-full">
          {bodycondition == "B1"
            ? "No Device Usage Marks"
            : bodycondition == "B2"
              ? "Light Usage Signs, Minor body scratch"
              : bodycondition == "B3"
                ? "1 or 2 Minor Dents, Major Scratch Colour Loss"
                : bodycondition == "B4"
                  ? "Major, Multiple Dents, Bend, Cracking Body"
                  : "Have Device Usage Marks"}
        </span>
      </Label>
      <Label htmlFor="terms" className=" flex w-full space-x-4  ">
        <span className="inline-block w-[40%]">Physical Condition : </span>
        <ul className=" w-full">
          <>
            {physicalcondition.map((item, index) => (
              <span key={index} className="caption text-surface-text text-sm">
                {item == "P1"
                  ? "Spots on display"
                  : item == "P2"
                    ? "Keyboard Issue"
                    : item == "P3"
                      ? "TackPad Issue"
                      : item == "P4"
                        ? "Speaker Problem"
                        : item == "P5"
                          ? "Wifi problem"
                          : item == "P6"
                            ? "Charging problem"
                            : item == "P7"
                              ? "Battery problem"
                              : item == "P8"
                                ? "USB Port Issues"
                                : item == "P9"
                                  ? "CD Drive Issues"
                                  : item == "P10"
                                    ? "WebCam Issues"
                                    : item == "P11"
                                      ? "Charger Issues"
                                      : item == "P12"
                                        ? "Front Camera Issues"
                                        : item == "P13"
                                          ? " Display Camera"
                                          : "No Physical Issues"}
              </span>
            ))}
          </>
        </ul>
      </Label>
      <>
        {accessoriesAvailable !== undefined &&
          accessoriesAvailable.length > 0 && (
            <Label
              htmlFor="terms"
              className=" flex w-full items-start  space-x-4"
            >
              <h4 className="inline-block w-[40%]">Device Accessories : </h4>
              <ul className=" flex w-full  flex-col justify-start gap-2">
                {accessoriesAvailable.map((item, index) => (
                  <li
                    key={index}
                    className="caption text-surface-text inline-block text-sm"
                  >
                    {item == "A1"
                      ? "Bill"
                      : item == "A2"
                        ? "Box"
                        : item == "A3" && "Charger"}
                  </li>
                ))}
              </ul>
            </Label>
          )}
      </>
    </div>
  );
};

export default MacReport;
