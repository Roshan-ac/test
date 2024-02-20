import { WatchFullBookingsInterface } from "@/interfaces/FullBookings/FullWatchBookings";

interface WatchFormData {
  bodycondition: string;
  physicalcondition: string[];
  screencondition: string[];
  accessoriesunavailable: string[];
  warrantystatus: string;

  macage: string;
}

const WatchReport = ({
  formData,
}: {
  formData: WatchFullBookingsInterface;
}) => {
  const { deviceage, physicalcondition, bodycondition, accessories } = formData;

  return (
    <div className="font-primary space-y-4 font-normal text-md">
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

      {physicalcondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Physical Condition</div>
          </h3>
          <ul className="mt-2.5 ml-8">
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
                    {item == "P1"
                      ? "Battery Problem"
                      : item == "P2"
                      ? "Charging Problem"
                      : item == "P3"
                      ? "Broken"
                      : item == "P4"
                      ? "Display Changes"
                      : item == "P5"
                      ? "Wifi/Bluetooth Problem"
                      : item == "P6"
                      ? "Not connecting"
                      : "Have Physical Issues"}
                  </span>
                </li>
              ))}
            </>
          </ul>
        </div>
      )}

      {bodycondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Body Condititon</div>
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

      {accessories !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Accessories</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <>
              {accessories.map((item, index) => (
                <li
                  key={index}
                  className="text-secondary list-outside list-disc">
                  <span className="caption text-sm text-surface-text">
                    {item == "A1"
                      ? "Charger that comes with the device"
                      : item == "A2"
                      ? "Strap of the watch"
                      : item == "A3"
                      ? "Box of the device"
                      : item === "A4" && "Bill of the Device"}
                  </span>
                </li>
              ))}
            </>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WatchReport;
