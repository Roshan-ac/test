import { Label } from "@/components/ui/label";
import { CameraFullBookingsInterface } from "@/interfaces/FullBookings/FullCameraBookings";

const CameraReport = ({
  formData,
}: {
  formData: CameraFullBookingsInterface;
}) => {
  const { bodycondition, deviceage, accessories, lens } = formData;
  const accessoriesunavailable = ["A3", "A1", "A2", "A4"].filter(
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

        {lens !== undefined && (
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">Lens : </span>
            <span className="inline-block w-full">
              {lens == "1" ? "Have Lens" : lens == "0" ? "No Lens" : `${lens}`}
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
                    ? "Charger"
                    : item == "A2"
                      ? "Camera Bag"
                      : item == "A3"
                        ? "Box"
                        : item == "A4" && "Tripod"}
                </li>
              ))}
            </ul>
          </Label>
        )}
      </div>
    </div>
  );
};

export default CameraReport;
