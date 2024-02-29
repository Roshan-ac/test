import { Label } from "@/components/ui/label";
import { LaptopFullBookingsInterface } from "@/interfaces/FullBookings/FullLaptopBookings";

const LaptopReport = ({
  formData,
}: {
  formData: LaptopFullBookingsInterface;
}) => {
  const {
    devicestorage,
    deviceram,
    deviceprocessor,
    screensize,
    laptopage,
    physicalcondition,
    bodycondition,
  } = formData;

  return (
    <div className="font-primary text-md space-y-4 font-normal">
      <div className="flex flex-col space-y-6">
        {laptopage !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Device Age : </span>
            <span className="inline-block w-full">
              {laptopage == "W1"
                ? "0 to 3 Months"
                : laptopage == "W2"
                  ? "3 to 6 Months"
                  : laptopage == "W3"
                    ? "6 to 11 Months"
                    : "above 11 Months"}
            </span>
          </Label>
        )}
        {deviceprocessor !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Processor : </span>
            <span className="inline-block w-full">{deviceprocessor}</span>
          </Label>
        )}
        {devicestorage !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Storage : </span>
            <span className="inline-block w-full">{devicestorage}</span>
          </Label>
        )}
        {deviceram !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Ram : </span>
            <span className="inline-block w-full">{deviceram}</span>
          </Label>
        )}

        {screensize !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Size : </span>
            <span className="inline-block w-full">{screensize}</span>
          </Label>
        )}

        {physicalcondition !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Condition : </span>
            <ul className=" w-full space-y-2">
              <>
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
                                ? "Bend Phone"
                                : item == "P11"
                                  ? "Network Problem"
                                  : item == "P10"
                                    ? "Microphone Problem"
                                    : item == "P8"
                                      ? "Display Changed"
                                      : item == "P12"
                                        ? "Charging Problem"
                                        : item == "P6"
                                          ? "Bluetooth Problem"
                                          : item == "P1"
                                            ? "Front Camera"
                                            : item == "P13"
                                              ? "Back Glass Broken"
                                              : item == "P14"
                                                ? "Wifi Problem"
                                                : "No Physical Issues"}
                  </span>
                ))}
              </>
            </ul>
          </Label>
        )}
        {bodycondition !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Condition : </span>
            <span className="inline-block w-full">
              {bodycondition === "B1"
                ? "No Device Usage Marks"
                : bodycondition === "B2"
                  ? "Light Usage Signs, Minor body scratch"
                  : bodycondition === "B3"
                    ? "1 or 2 Minor Dents, Major Scratch Colour Loss"
                    : bodycondition === "B4"
                      ? "Major, Multiple Dents, Bend, Cracking Body"
                      : "Have Device Usage Marks"}
            </span>
          </Label>
        )}
      </div>
    </div>
  );
};

export default LaptopReport;
