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
    accessories,
  } = formData;

  const accessoriesunavailable = ["A1", "A2", "A3"].filter(
    (item) => !accessories?.includes(item),
  );

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

        {screensize !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Size : </span>
            <span className="inline-block w-full">
              {screensize == "S1"
                ? "10-11 Inches"
                : screensize == "S2"
                  ? "12-13 Inches"
                  : screensize == "S3"
                    ? "13-14 Inches"
                    : screensize == "S4"
                      ? "14-15 Inches"
                      : screensize == "S5" && "more than 15 Inches"}
            </span>
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
                    {item == "P1"
                      ? "Spots on display"
                      : item == "P2"
                        ? "Keyboard Issue"
                        : item == "P3"
                          ? "TrackPad Issue"
                          : item == "P4"
                            ? "Speaker Problem"
                            : item == "P5"
                              ? "Wifi problem"
                              : item == "P6"
                                ? "Charging problem"
                                : item == "P7"
                                  ? "Battery problem"
                                  : item == "P8"
                                    ? "USB Port Issue"
                                    : item == "P9"
                                      ? "CD Drive Issue"
                                      : item == "P10"
                                        ? "WebCam Issue"
                                        : item == "P11"
                                          ? "Charger Issue"
                                          : item == "P12"
                                            ? "Hard Disk Issue"
                                            : item == "P13"
                                              ? " Display Issue"
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

        {accessories !== undefined && accessoriesunavailable.length > 0 && (
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
                    ? "Bill"
                    : item == "A2"
                      ? "Box"
                      : item == "A3" && "Charger"}
                </li>
              ))}
            </ul>
          </Label>
        )}
      </div>
    </div>
  );
};

export default LaptopReport;
