import { Label } from "@/components/ui/label";
import { WatchFullBookingsInterface } from "@/interfaces/FullBookings/FullWatchBookings";

interface WatchFormData {
  bodycondition: string;
  physicalcondition: string[];
  screencondition: string[];
  accessoriesunavailable: string[];
  warrantystatus: string;

  macage: string;
}

const WatchReport = ({
  formData,
}: {
  formData: WatchFullBookingsInterface;
}) => {
  const { deviceage, physicalcondition, bodycondition, accessories } = formData;

  const accessoriesunavailable = ["A1", "A2", "A3", "A4"].filter(
    (item) => !accessories?.includes(item),
  );

  return (
    <div className="font-primary text-md space-y-4 font-normal">
      <div className="flex flex-col space-y-6">
        {deviceage !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Age : </span>
            <span className="inline-block w-full">
              {deviceage == "W1"
                ? "0 to 3 Months"
                : deviceage == "W2"
                  ? "3 to 6 Months"
                  : deviceage == "W3"
                    ? "6 to 11 Months"
                    : "above 11 Months"}
            </span>
          </Label>
        )}

        {physicalcondition !== undefined && physicalcondition.length > 0 && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Physical Condition : </span>
            <ul className=" w-full space-y-2">
              <>
                {physicalcondition.map((item, index) => (
                  <span
                    key={index}
                    className="caption text-surface-text inline-block text-sm"
                  >
                    {item == "P1"
                      ? "Battery Problem"
                      : item == "P2"
                        ? "Charging Problem"
                        : item == "P3"
                          ? "Broken"
                          : item == "P4"
                            ? "Display Changed"
                            : item == "P5"
                              ? "Wifi/Bluetooth Problem"
                              : item == "P6"
                                ? "Not connecting"
                                : "Have Physical Issues"}
                  </span>
                ))}
              </>
            </ul>
          </Label>
        )}

        {bodycondition !== undefined && (
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
        )}
        {accessories !== undefined && (
          <Label
            htmlFor="terms"
            className=" flex w-full items-start  space-x-4"
          >
            <h4 className="inline-block w-[40%]">Device Accessories : </h4>
            <ul className=" flex w-full  flex-col justify-start space-y-2">
              {accessoriesunavailable.map((item, index) => (
                <li
                  key={index}
                  className="caption text-surface-text inline-block text-sm"
                >
                  {item == "A1"
                    ? "Charger Cable that comes with box"
                    : item == "A2"
                      ? "Strap of the Watch"
                      : item == "A3"
                        ? "Device box with IMEI"
                        : "Bill of the Device"}
                </li>
              ))}
            </ul>
          </Label>
        )}
      </div>
    </div>
  );
};

export default WatchReport;
