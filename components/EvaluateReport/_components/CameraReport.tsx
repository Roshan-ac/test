import { CameraFullBookingsInterface } from "@/interfaces/FullBookings/FullCameraBookings";

const CameraReport = ({
  formData,
}: {
  formData: CameraFullBookingsInterface;
}) => {
  const { bodycondition, deviceage } = formData;

  return (
    <div>
      {bodycondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Usage Marks</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
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
            </li>
          </ul>
        </div>
      )}

      {deviceage !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Age</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {deviceage == "W1"
                  ? "0 to 3 Months"
                  : deviceage == "W2"
                  ? "3 to 6 Months"
                  : deviceage == "W3"
                  ? "6 to 11 Months"
                  : "above 11 Months"}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CameraReport;
