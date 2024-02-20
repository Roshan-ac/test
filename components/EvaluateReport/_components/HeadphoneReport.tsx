import { HeadphoneFullBookingsInterface } from "@/interfaces/FullBookings/FullHeadphoneBookings";

const HeadphoneReport = ({
  formData,
}: {
  formData: HeadphoneFullBookingsInterface;
}) => {
  const { deviceage, accessories } = formData;

  return (
    <div className="font-primary space-y-4 font-normal text-md px-8">
      {/* {bodycondition !== undefined && (
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
      {physicalcondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Condition</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            {Array.isArray(physicalcondition) ? (
              <>
                {physicalcondition.length == 0 && (
                  <li className="text-secondary list-outside list-disc">
                    <span className="caption text-sm text-surface-text">
                      {"Have Physical Issues"}
                    </span>
                  </li>
                )}
                {physicalcondition.map((item, index) => (
                  <li
                    key={index}
                    className="text-secondary list-outside list-disc">
                    <span className="caption text-sm text-surface-text">
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
                        : "Have Physical Issues"}
                    </span>
                  </li>
                ))}
              </>
            ) : (
              <li className="text-secondary list-outside list-disc">
                <span className="caption text-sm text-surface-text">
                  {physicalcondition === "B2"
                    ? "No Physical Issues"
                    : "Have Physical Issues"}
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    */}
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

export default HeadphoneReport;
