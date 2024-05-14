import { Label } from "@/components/ui/label";
import { DroneFullBookingsInterface } from "@/interfaces/FullBookings/FullDroneBookings";

const DroneReport = ({
  formData,
}: {
  formData: DroneFullBookingsInterface;
}) => {
  const { bodycondition, deviceage, accessories } = formData;

  const accessoriesunavailable = ["A1", "A2", "A3", "A4"].filter(
    (item) => !accessories?.includes(item),
  );

  return (
    <div className="font-primary text-md space-y-4 font-normal">
      <div className="flex flex-col space-y-6">
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
                      ? "Major, Multiple Dents, Bend, Cracked Body"
                      : "Have Device Usage Marks"}
            </span>
          </Label>
        )}
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
                    : deviceage == "W4" && "Above 11 Months"}
            </span>
          </Label>
        )}

        {accessories !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">
              Accessories Available :{" "}
            </span>
            <span className="inline-block w-full">
              {accessoriesunavailable.map((item, index) => (
                <li
                  key={index}
                  className="caption text-surface-text inline-block text-sm"
                >
                  {item == "A1"
                    ? "Bill"
                    : item == "A2"
                      ? "Box"
                      : item == "A3"
                        ? "Charger"
                        : item === "A4" && "Extra battery"}
                </li>
              ))}
            </span>
          </Label>
        )}
      </div>
    </div>
  );
};

export default DroneReport;
