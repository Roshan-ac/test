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
    bodycondition,
  } = formData;

  return (
    <div>
      {laptopage !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Age</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {laptopage == "W1"
                  ? "0 to 3 Months"
                  : laptopage == "W2"
                  ? "3 to 6 Months"
                  : laptopage == "W3"
                  ? "6 to 11 Months"
                  : "above 11 Months"}
              </span>
            </li>
          </ul>
        </div>
      )}

      {screensize !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Size :</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {screensize == "S1"
                  ? "Screen 10 To 12 Inch"
                  : screensize == "S2"
                  ? "Screen 12 To 13 Inch"
                  : screensize == "S3"
                  ? "Screen 13 To 14 Inch"
                  : screensize === "S4"
                  ? "Screen 14 To 15 Inch"
                  : screensize === "S5" && "Screen more than 15 Inch"}
              </span>
            </li>
          </ul>
        </div>
      )}

      {deviceprocessor !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Processor</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {deviceprocessor}
              </span>
            </li>
          </ul>
        </div>
      )}
      {devicestorage !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Storage</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {devicestorage[0]} GB
              </span>
            </li>
          </ul>
        </div>
      )}
      {deviceram !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Ram</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {deviceram} GB
              </span>
            </li>
          </ul>
        </div>
      )}
      {/* {screencondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Condition</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            {screencondition.length == 0 && (
              <li className="text-secondary list-outside list-disc">
                <span className="caption text-sm text-surface-text">
                  {"Have Screen Issues"}
                </span>
              </li>
            )}
            {screencondition.map((item, index) => (
              <li key={index} className="text-secondary list-outside list-disc">
                <span className="caption text-sm text-surface-text">
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
              </li>
            ))}
          </ul>
        </div>
      )} */}

      {bodycondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Usage Marks</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
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
      {/* {physicalcondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Physical Condition</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <>
              {physicalcondition.length == 0 && (
                <li className="text-secondary list-outside list-disc">
                  <span className="caption text-sm text-surface-text">
                    {"No Physical Issues"}
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
                      : "No Physical Issues"}
                  </span>
                </li>
              ))}
            </>
          </ul>
        </div>
      )} */}
      {/* {accessoriesunavailable !== undefined &&
        accessoriesunavailable.length > 0 && (
          <div>
            <h3 className="mt-2.5">
              <div className=" text-sm">Device Accessories</div>
            </h3>
            <ul className="mt-2.5 ml-8">
              <>
                {accessoriesunavailable.map((item, index) => (
                  <li
                    key={index}
                    className="text-secondary list-outside list-disc">
                    <span className="caption text-sm text-surface-text">
                      {item == "A1"
                        ? "Charger Cable that comes with box"
                        : item == "A2"
                        ? "Earphones of the Device"
                        : item == "A3"
                        ? "Device box with IMEI"
                        : "Bill of the Device"}
                    </span>
                  </li>
                ))}
              </>
            </ul>
          </div>
        )} */}
    </div>
  );
};

export default LaptopReport;
