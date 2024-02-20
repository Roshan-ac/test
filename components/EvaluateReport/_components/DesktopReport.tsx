import { DesktopFullBookingsInterface } from "@/interfaces/FullBookings/FullDesktopBookings";

const DesktopReport = ({
  formData,
}: {
  formData: DesktopFullBookingsInterface;
}) => {
  const {
    deviceprocessor,
    devicestorage,
    deviceram,
    physicalcondition,
    graphiccard,
    screensize,
    screentype,
  } = formData;

  return (
    <div className="font-primary space-y-4 font-normal text-md px-8">
      {deviceprocessor !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Processor</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {deviceprocessor[0]}
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
                {devicestorage[0]}
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
                {deviceram[0]}
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
                      ? "Keyboard Issue"
                      : item == "P2"
                      ? "Mouse Issue"
                      : item == "P3"
                      ? "Wifi Problem"
                      : item == "P4"
                      ? "Fan problem"
                      : item == "P5"
                      ? "USB Port Issues"
                      : item == "P6"
                      ? "CD Drive Issues"
                      : item == "P7"
                      ? "HDD/SSD Issues"
                      : item == "P8"
                      ? "Display issues"
                      : item == "P9"
                      ? "Spot On Issues"
                      : "No Physical Issues"}
                  </span>
                </li>
              ))}
            </>
          </ul>
        </div>
      )}
      {graphiccard !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Graphics Card</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {graphiccard}
              </span>
            </li>
          </ul>
        </div>
      )}
      {screensize !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Size</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {screensize}
              </span>
            </li>
          </ul>
        </div>
      )}
      {screentype !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Type</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {screentype}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DesktopReport;
