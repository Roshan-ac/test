import { Label } from "@/components/ui/label";
import { DesktopFullBookingsInterface } from "@/interfaces/FullBookings/FullDesktopBookings";

const DesktopReport = ({
  formData,
}: {
  formData: DesktopFullBookingsInterface;
}) => {
  const {
    deviceprocessor,
    devicestorage,
    deviceram,
    physicalcondition,
    graphiccard,
    screensize,
    screentype,
  } = formData;

  return (
    <div className="font-primary text-md space-y-4 font-normal">
      <div className="flex flex-col space-y-6">
        {deviceprocessor !== undefined && deviceprocessor !== "null" && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Processor : </span>
            <span className="inline-block w-full">{deviceprocessor}</span>
          </Label>
        )}
        {devicestorage !== undefined && devicestorage !== "null" && (
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
        {graphiccard !== undefined && graphiccard.length > 0 && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Graphic card : </span>
            <span className="inline-block w-full">{graphiccard}</span>
          </Label>
        )}
        {screensize !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Size : </span>
            <span className="inline-block w-full">{screensize}</span>
          </Label>
        )}
        {screentype !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Screen Type : </span>
            <span className="inline-block w-full">{screentype}</span>
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
                      ? "Keyboard Issue"
                      : item == "P2"
                        ? "Mouse Issue"
                        : item == "P3"
                          ? "Wifi Problem"
                          : item == "P4"
                            ? "Fan problem"
                            : item == "P5"
                              ? "USB Port Issues"
                              : item == "P6"
                                ? "CD Drive Issues"
                                : item == "P7"
                                  ? "Hard Disk Issues"
                                  : item == "P8"
                                    ? "Display issues"
                                    : item == "P9"
                                      ? "Spot On Desktop"
                                      : "No Physical Issues"}
                  </span>
                ))}
              </>
            </ul>
          </Label>
        )}
      </div>
    </div>
  );
};

export default DesktopReport;
