import { Label } from "@/components/ui/label";
import { ConsoleFullBookingsInterface } from "@/interfaces/FullBookings/FullConsoleBookings";

const ConsoleReport = ({
  formData,
}: {
  formData: ConsoleFullBookingsInterface;
}) => {
  const {
    deviceage,
    bodycondition,
    physicalcondition,
    numberofcds,
    extracontrollers,
  } = formData;
  console.log(numberofcds);

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
        {physicalcondition !== undefined && (
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
                      ? "Hard Disk Issue"
                      : item == "P2"
                        ? "CD drive Issue"
                        : item == "P3"
                          ? "Controller Issue"
                          : item == "P4"
                            ? "Motherboard Issue"
                            : item == "P5"
                              ? "Heating Issue"
                              : item == "P6"
                                ? "Restart Issue"
                                : "No Physical Issues"}
                  </span>
                ))}
              </>
            </ul>
          </Label>
        )}
        {extracontrollers !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Extra Controllers : </span>
            <span className="inline-block w-full">
              {extracontrollers == "E0"
                ? "No Extra Controllers"
                : extracontrollers == "E1"
                  ? "1 Extra Controllers"
                  : extracontrollers == "E2"
                    ? "2 Extra Controllers"
                    : extracontrollers == "E3"
                      ? "3 Extra Controllers"
                      : extracontrollers == "E4"
                        ? "4 Extra Controllers"
                        : extracontrollers == "E5"
                          ? "5 Extra Controllers"
                          : "Have Extra Controllers"}
            </span>
          </Label>
        )}
        {numberofcds !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Number of CD&lsquo;s : </span>
            <span className="inline-block w-full">
              {numberofcds == "CD0"
                ? "No Extra CD"
                : numberofcds == "CD1"
                  ? "1 Extra CD"
                  : numberofcds == "CD2"
                    ? "2 Extra CD"
                    : numberofcds == "CD3"
                      ? "3 Extra CD"
                      : numberofcds == "CD4" && "4 Extra CD"}
            </span>
          </Label>
        )}
      </div>
    </div>
  );
};

export default ConsoleReport;
