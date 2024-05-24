import { Label } from "@/components/ui/label";
import { MobileFullBookingsInterface } from "@/interfaces/FullBookings/FullMobileBookings";

const MobileReport = ({
  formData,
}: {
  formData: MobileFullBookingsInterface;
}) => {
  const {
    warrantystatus,
    physicalcondition,
    deviceram,
    devicestorage,
    bodycondition,
    screencondition,
    accessoriesunavailable,
  } = formData;
  return (
    <div className="font-primary text-md space-y-4 font-normal">
      <div className="flex flex-col space-y-6">
        {deviceram && deviceram !== "null" && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Ram : </span>
            <span className="inline-block w-full">
              {deviceram}
              {"GB"}
            </span>
          </Label>
        )}
        {devicestorage && devicestorage !== "null" && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Storage : </span>
            <span className="inline-block w-full">
              {devicestorage}
              {"GB"}
            </span>
          </Label>
        )}
        {warrantystatus !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Age : </span>
            <span className="inline-block w-full">
              {warrantystatus == "W1"
                ? "0 to 3 Months"
                : warrantystatus == "W2"
                  ? "3 to 6 Months"
                  : warrantystatus == "W3"
                    ? "6 to 11 Months"
                    : "above 11 Months"}
            </span>
          </Label>
        )}
        {screencondition !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Condition : </span>
            <span className="flex w-full flex-col gap-1">
              <span className="caption text-surface-text inline-block text-sm">
                {screencondition == "S5"
                  ? "Scratches on Screen"
                  : screencondition == "S4"
                    ? "Faulty Screen"
                    : screencondition == "S3"
                      ? "Screen Not Usable"
                      : screencondition == "S2"
                        ? "Cracked Screen"
                        : screencondition == "S0"
                          ? "No screen Issues"
                          : "Have screen Issues"}
              </span>
            </span>
          </Label>
        )}
        {physicalcondition !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Physical Condition : </span>
            <span className="flex w-full flex-col gap-1">
              {physicalcondition.map((item, index) => (
                <span
                  key={index}
                  className="caption text-surface-text inline-block text-sm"
                >
                  {item == "P2"
                    ? "Back Camera Problem"
                    : item == "P4"
                      ? "Fingerprint Problem"
                      : item == "P9"
                        ? "Speaker Problem"
                        : item == "P5"
                          ? "Face id problem"
                          : item == "P3"
                            ? "Battery Service / Problem"
                            : item == "P7"
                              ? "Bend Device"
                              : item == "P11"
                                ? "Network Problem"
                                : item == "P10"
                                  ? "Microphone Problem"
                                  : item == "P8"
                                    ? "Display Changed"
                                    : item == "P12"
                                      ? "Charging Problem"
                                      : item == "P6"
                                        ? "Wifi/Bluetooth Problem"
                                        : item == "P1"
                                          ? "Front Camera"
                                          : item == "P13"
                                            ? "Back Glass Broken"
                                            : item == "P14"
                                              ? "Vibration Problem"
                                              : item === "P15"
                                                ? "Sensor Problem"
                                                : "No Physical Issues"}
                </span>
              ))}
            </span>
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
        {accessoriesunavailable !== undefined &&
          accessoriesunavailable.length > 0 && (
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
                        ? "Earphones of the Device"
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

export default MobileReport;
