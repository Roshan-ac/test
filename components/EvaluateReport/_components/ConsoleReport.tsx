import { ConsoleFullBookingsInterface } from "@/interfaces/FullBookings/FullConsoleBookings";

const ConsoleReport = ({
  formData,
}: {
  formData: ConsoleFullBookingsInterface;
}) => {
  const {
    deviceage,
    bodycondition,
    physicalcondition,
    numberofcds,
    extracontrollers,
  } = formData;

  return (
    <div className="font-primary space-y-4 font-normal text-md px-8">
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
                      {item == "P1"
                        ? "Hard Disk Issue"
                        : item == "P2"
                        ? "CD drive Issue"
                        : item == "P3"
                        ? "Controller Issue"
                        : item == "P4"
                        ? "Motherboard Issue"
                        : item == "P5"
                        ? "Heating Issue"
                        : item == "P6"
                        ? "Restart Issue"
                        : "No Physical Issues"}
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
      {extracontrollers !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Extra Controllers</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {extracontrollers == "E0"
                  ? "No Extra Controllers"
                  : extracontrollers == "E1"
                  ? "1 Extra Controllers"
                  : extracontrollers == "E2"
                  ? "2 Extra Controllers"
                  : extracontrollers == "E3"
                  ? "3 Extra Controllers"
                  : extracontrollers == "E4"
                  ? "4 Extra Controllers"
                  : extracontrollers == "E5"
                  ? "5 Extra Controllers"
                  : "Have Extra Controllers"}
              </span>
            </li>
          </ul>
        </div>
      )}
      {numberofcds !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">{"No of CD's"}</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {numberofcds == "CD1"
                  ? "1 Extra CD"
                  : numberofcds == "CD2"
                  ? "2 Extra CD"
                  : numberofcds == "CD3"
                  ? "3 Extra CD"
                  : numberofcds == "CD4" && "4 Extra CD"}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConsoleReport;
