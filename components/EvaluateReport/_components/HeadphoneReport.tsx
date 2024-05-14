import { Label } from "@/components/ui/label";
import { HeadphoneFullBookingsInterface } from "@/interfaces/FullBookings/FullHeadphoneBookings";

const HeadphoneReport = ({
  formData,
}: {
  formData: HeadphoneFullBookingsInterface;
}) => {
  const { deviceage, accessories } = formData;
  console.log(accessories);

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
                  {item === "A1"
                    ? "Bill"
                    : item === "A2"
                      ? "Box"
                      : item === "A3" && "Charger"}
                </li>
              ))}
            </ul>
          </Label>
        )}
      </div>
    </div>
  );
};

export default HeadphoneReport;
