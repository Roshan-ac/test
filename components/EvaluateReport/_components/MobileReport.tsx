import { MobileFullBookingsInterface } from "@/interfaces/FullBookings/FullMobileBookings";

const MobileReport = ({
  formData,
}: {
  formData: MobileFullBookingsInterface;
}) => {
  const {
    warrantystatus,
    physicalcondition,
    bodycondition,
    screencondition,
    accessoriesunavailable,
  } = formData;

  return (
    <div className="h-full overflow-y-auto">
      {warrantystatus !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Age</div>
          </h3>
          <ul className="ml-8 mt-2.5">
            <div className="text-secondary">
              <span className="caption text-surface-text text-sm">
                {warrantystatus == "W1"
                  ? "0 to 3 Months"
                  : warrantystatus == "W2"
                    ? "3 to 6 Months"
                    : warrantystatus == "W3"
                      ? "6 to 11 Months"
                      : "above 11 Months"}
              </span>
            </div>
          </ul>
        </div>
      )}
      {screencondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Condition</div>
          </h3>
          <ul className="ml-8 mt-2.5">
            {screencondition.length == 0 && (
              <div className="text-secondary">
                <span className="caption text-surface-text text-sm">
                  {"Have Screen Issues"}
                </span>
              </div>
            )}
            {screencondition.map((item, index) => (
              <div key={index} className="text-secondary">
                <span className="caption text-surface-text text-sm">
                  {item == "S5"
                    ? "Scratches on Screen"
                    : item == "S4"
                      ? "Faulty Screen"
                      : item == "S3"
                        ? "Screen Not Usable"
                        : item == "S2"
                          ? "Cracked Screen"
                          : item == "S1"
                            ? "No Screen Issues"
                            : "Have Screen Issues"}
                </span>
              </div>
            ))}
          </ul>
        </div>
      )}

      {bodycondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Usage Marks</div>
          </h3>
          <ul className="ml-8 mt-2.5">
            <li className="text-secondary">
              <span className="caption text-surface-text text-sm">
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
            </li>
          </ul>
        </div>
      )}
      {physicalcondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Physical Condition</div>
          </h3>
          <ul className="ml-8 mt-2.5">
            <>
              {physicalcondition.length == 0 && (
                <li className="text-secondary ">
                  <span className="caption text-surface-text text-sm">
                    {"No Physical Issues"}
                  </span>
                </li>
              )}
              {physicalcondition.map((item, index) => (
                <li key={index} className="text-secondary">
                  <span className="caption text-surface-text text-sm">
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
                </li>
              ))}
            </>
          </ul>
        </div>
      )}
      {accessoriesunavailable !== undefined &&
        accessoriesunavailable.length > 0 && (
          <div>
            <h3 className="mt-2.5">
              <div className=" text-sm">Device Accessories</div>
            </h3>
            <ul className="ml-8 mt-2.5">
              <>
                {accessoriesunavailable.map((item, index) => (
                  <div key={index} className="text-secondary ">
                    <span className="caption text-surface-text text-sm">
                      {" "}
                      :
                      {item == "A1"
                        ? "Charger Cable that comes with box"
                        : item == "A2"
                          ? "Earphones of the Device"
                          : item == "A3"
                            ? "Device box with IMEI"
                            : "Bill of the Device"}
                    </span>
                  </div>
                ))}
              </>
            </ul>
          </div>
        )}
    </div>
  );
};

export default MobileReport;