import { MacFullBookingsInterface } from "@/interfaces/FullBookings/FullMacBookings";

const MacReport = ({ formData }: { formData: MacFullBookingsInterface }) => {
  const { macage, physicalcondition, bodycondition } = formData;

  return (
    <div className="font-primary space-y-4 font-normal text-md px-8">
      {macage !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Age</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {macage == "W1"
                  ? "0 to 3 Months"
                  : macage == "W2"
                  ? "3 to 6 Months"
                  : macage == "W3"
                  ? "6 to 11 Months"
                  : "above 11 Months"}
              </span>
            </li>
          </ul>
        </div>
      )}

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
                      ? "Spots on display"
                      : item == "P2"
                      ? "Keyboard Issue"
                      : item == "P3"
                      ? "TackPad Issue"
                      : item == "P4"
                      ? "Speaker Problem"
                      : item == "P5"
                      ? "Wifi problem"
                      : item == "P6"
                      ? "Charging problem"
                      : item == "P7"
                      ? "Battery problem"
                      : item == "P8"
                      ? "USB Port Issues"
                      : item == "P9"
                      ? "CD Drive Issues"
                      : item == "P10"
                      ? "WebCam Issues"
                      : item == "P11"
                      ? "Charger Issues"
                      : item == "P12"
                      ? "Front Camera Issues"
                      : item == "P13"
                      ? " Display Camera"
                      : "No Physical Issues"}
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

export default MacReport;
